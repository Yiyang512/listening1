#!/usr/bin/env python3
"""Generate natural French listening MP3s with Microsoft Edge neural voices."""
from __future__ import annotations

import argparse
import asyncio
import re
import tempfile
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "js" / "listening-data.js"
OUT = ROOT / "audio"

VOICE_F = "fr-FR-DeniseNeural"
VOICE_M = "fr-FR-HenriNeural"
VOICE_YOUNG = "fr-FR-EloiseNeural"
RATE = "-8%"  # slightly slower for learners, still natural
PAUSE_MS = 420


def strip_html(html: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", html, flags=re.I)
    text = re.sub(r"</p\s*>", "\n", text, flags=re.I)
    text = re.sub(r"<[^>]+>", "", text)
    text = text.replace("&nbsp;", " ").replace("&amp;", "&")
    text = text.replace("&lt;", "<").replace("&gt;", ">")
    text = text.replace("\\'", "'")
    return re.sub(r"[ \t]+", " ", text).strip()


def parse_exercises(text: str) -> list[dict]:
    pattern = re.compile(
        r"{\s*id: '([a-z0-9-]+)',\s*title: '((?:\\'|[^'])*)',[\s\S]*?transcript: `(.*?)`,\s*questions:",
        re.S,
    )
    items = []
    for m in pattern.finditer(text):
        items.append(
            {
                "id": m.group(1),
                "title": m.group(2).replace("\\'", "'"),
                "transcript": m.group(3),
            }
        )
    return items


def split_turns(plain: str) -> list[str]:
    lines = [ln.strip() for ln in plain.splitlines() if ln.strip()]
    turns = []
    buf = []
    for ln in lines:
        dialogue = re.match(r"^[-–—]\s*(.*)$", ln)
        if dialogue:
            if buf:
                turns.append(" ".join(buf).strip())
                buf = []
            turns.append(dialogue.group(1).strip())
        else:
            buf.append(ln)
    if buf:
        turns.append(" ".join(buf).strip())
    # drop empties
    return [t for t in turns if t]


def pick_voices(ex_id: str, turns: list[str]) -> list[str]:
    """Alternate male/female for dialogues; pick a stable voice for monologues."""
    if len(turns) >= 2 and sum(1 for t in turns if len(t) < 180) >= 2:
        # dialogue-like
        pair = [VOICE_F, VOICE_M]
        # A1 kid-ish topics: bias young + adult
        if ex_id.startswith("a1-") and any(
            k in ex_id for k in ("ecole", "animaux", "parc", "zoo", "anniv")
        ):
            pair = [VOICE_YOUNG, VOICE_M]
        return [pair[i % 2] for i in range(len(turns))]
    # monologue
    if ex_id.startswith("b2-"):
        return [VOICE_M if hash(ex_id) % 2 else VOICE_F]
    if ex_id.startswith("a1-"):
        return [VOICE_F if hash(ex_id) % 2 else VOICE_YOUNG]
    return [VOICE_F if hash(ex_id) % 2 else VOICE_M]


async def synth_turn(text: str, voice: str, dest: Path) -> None:
    communicate = edge_tts.Communicate(text, voice, rate=RATE)
    await communicate.save(str(dest))


def concat_mp3(parts: list[Path], out_file: Path, pause_ms: int = PAUSE_MS) -> None:
    import subprocess

    work = OUT / ".tmp"
    work.mkdir(parents=True, exist_ok=True)
    silence = work / "silence.mp3"
    if not silence.exists():
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-f",
                "lavfi",
                "-i",
                "anullsrc=r=22050:cl=mono",
                "-t",
                str(pause_ms / 1000),
                "-b:a",
                "32k",
                str(silence),
            ],
            check=True,
            capture_output=True,
        )

    if len(parts) == 1:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                str(parts[0]),
                "-ac",
                "1",
                "-ar",
                "22050",
                "-b:a",
                "32k",
                str(out_file),
            ],
            check=True,
            capture_output=True,
        )
        return

    list_file = work / f"list-{out_file.stem}.txt"
    lines = []
    for i, p in enumerate(parts):
        lines.append(f"file '{p}'")
        if i < len(parts) - 1:
            lines.append(f"file '{silence}'")
    list_file.write_text("\n".join(lines))
    try:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-f",
                "concat",
                "-safe",
                "0",
                "-i",
                str(list_file),
                "-ac",
                "1",
                "-ar",
                "22050",
                "-b:a",
                "32k",
                str(out_file),
            ],
            check=True,
            capture_output=True,
        )
    finally:
        list_file.unlink(missing_ok=True)


async def build_one(ex: dict, out_dir: Path, force: bool = False) -> str:
    out_file = out_dir / f"{ex['id']}.mp3"
    if out_file.exists() and out_file.stat().st_size > 1000 and not force:
        return f"skip {ex['id']}"

    plain = strip_html(ex["transcript"])
    turns = split_turns(plain)
    if not turns:
        turns = [plain]
    voices = pick_voices(ex["id"], turns)

    work = OUT / ".tmp" / ex["id"]
    work.mkdir(parents=True, exist_ok=True)
    parts = []
    try:
        for i, (turn, voice) in enumerate(zip(turns, voices)):
            spoken = turn
            if not spoken.endswith((".", "!", "?", "…", ":")):
                spoken = spoken + "."
            part = work / f"part-{i:02d}.mp3"
            await synth_turn(spoken, voice, part)
            parts.append(part)
        concat_mp3(parts, out_file)
    finally:
        for p in work.glob("*"):
            p.unlink(missing_ok=True)
        work.rmdir()
    return f"ok   {ex['id']} ({len(turns)} turns, {out_file.stat().st_size // 1024}KB)"


async def main_async(args: argparse.Namespace) -> None:
    exercises = parse_exercises(DATA.read_text())
    if args.level:
        exercises = [e for e in exercises if e["id"].startswith(args.level.lower() + "-")]
    if args.limit:
        exercises = exercises[: args.limit]

    OUT.mkdir(parents=True, exist_ok=True)
    print(f"Generating {len(exercises)} files → {OUT}")

    sem = asyncio.Semaphore(args.concurrency)

    async def worker(ex):
        async with sem:
            try:
                msg = await build_one(ex, OUT, force=args.force)
                print(msg, flush=True)
            except Exception as e:
                print(f"FAIL {ex['id']}: {e}", flush=True)

    await asyncio.gather(*(worker(ex) for ex in exercises))
    total = sum(p.stat().st_size for p in OUT.glob("*.mp3"))
    print(f"Done. {len(list(OUT.glob('*.mp3')))} mp3s, ~{total // 1024} KB total")


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--level", choices=["a1", "a2", "b1", "b2"])
    p.add_argument("--limit", type=int)
    p.add_argument("--force", action="store_true")
    p.add_argument("--concurrency", type=int, default=3)
    args = p.parse_args()
    asyncio.run(main_async(args))


if __name__ == "__main__":
    main()
