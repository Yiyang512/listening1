document.addEventListener('DOMContentLoaded', () => {
  const CFG = window.APP_CONFIG;
  const storage = {
    get(key, fallback = null) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const els = {
    contactSection: document.getElementById('contact-section'),
    contactForm: document.getElementById('contact-form'),
    formSuccess: document.getElementById('form-success'),
    formError: document.getElementById('form-error'),
    submitBtn: document.getElementById('submit-form'),
    app: document.getElementById('listening-app'),
    userChip: document.getElementById('user-chip'),
    resetUser: document.getElementById('reset-user'),
    levelButtons: [...document.querySelectorAll('.level-btn')],
    levelPanel: document.getElementById('level-panel'),
    levelTitle: document.getElementById('level-title'),
    levelExplanation: document.getElementById('level-explanation'),
    searchInput: document.getElementById('exercise-search'),
    exerciseGrid: document.getElementById('exercise-grid'),
    statsBar: document.getElementById('stats-bar'),
    sessionPanel: document.getElementById('session-panel'),
    backBtn: document.getElementById('back-btn'),
    exerciseTitle: document.getElementById('exercise-title'),
    exerciseMeta: document.getElementById('exercise-meta'),
    modeBadge: document.getElementById('mode-badge'),
    playerStatus: document.getElementById('player-status'),
    playBtn: document.getElementById('play-btn'),
    pauseBtn: document.getElementById('pause-btn'),
    stopBtn: document.getElementById('stop-btn'),
    replayBtn: document.getElementById('replay-btn'),
    speedSelect: document.getElementById('speed-select'),
    progressFill: document.getElementById('progress-fill'),
    timeCurrent: document.getElementById('time-current'),
    timeTotal: document.getElementById('time-total'),
    playCount: document.getElementById('play-count'),
    playLimit: document.getElementById('play-limit'),
    sourceBadge: document.getElementById('source-badge'),
    audioEl: document.getElementById('audio-el'),
    timerDisplay: document.getElementById('timer'),
    timerToggle: document.getElementById('timer-toggle'),
    timerReset: document.getElementById('timer-reset'),
    transcriptSection: document.getElementById('transcript-section'),
    transcriptContent: document.getElementById('transcript-content'),
    revealTranscript: document.getElementById('reveal-transcript'),
    quizForm: document.getElementById('quiz-form'),
    results: document.getElementById('results'),
    scoreSummary: document.getElementById('score-summary'),
    scoreDetail: document.getElementById('score-detail'),
    retryBtn: document.getElementById('retry-btn'),
    nextBtn: document.getElementById('next-btn'),
    toast: document.getElementById('toast')
  };

  const state = {
    user: storage.get(CFG.storageKeys.user),
    progress: storage.get(CFG.storageKeys.progress, {}),
    settings: storage.get(CFG.storageKeys.settings, { mode: 'exam', speed: 1 }),
    level: null,
    exercise: null,
    mode: 'exam',
    plays: 0,
    maxPlays: CFG.audio.maxPlaysExam,
    source: 'none',
    playing: false,
    timerId: null,
    timeLeft: 0,
    timerRunning: false,
    tts: {
      utterances: [],
      index: 0,
      speaking: false,
      charsTotal: 0,
      charsDone: 0
    },
    filter: ''
  };

  // ---------- helpers ----------
  function toast(msg, type = 'info') {
    els.toast.textContent = msg;
    els.toast.className = `toast show ${type}`;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => els.toast.classList.remove('show'), 3200);
  }

  function stripHtml(html) {
    const d = document.createElement('div');
    d.innerHTML = html || '';
    return (d.textContent || d.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function splitSentences(text) {
    const parts = text
      .split(/(?<=[.!?…])\s+|\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
    return parts.length ? parts : [text];
  }

  function formatTime(sec) {
    const s = Math.max(0, Math.floor(sec || 0));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  function notifyParentHeight() {
    const height = Math.ceil(document.documentElement.scrollHeight);
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'hemiya-listen-resize', height }, '*');
    }
  }

  function saveProgress() {
    storage.set(CFG.storageKeys.progress, state.progress);
  }

  function exerciseKey(level, id) {
    return `${level}:${id}`;
  }

  function getProgress(level, id) {
    return state.progress[exerciseKey(level, id)] || null;
  }

  function frenchVoices() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    const fr = voices.filter((v) => /^fr/i.test(v.lang));
    const prefer = (re) => fr.find((v) => re.test(v.name));
    const female =
      prefer(/google français|thomas|amelie|marie|denise|aurelie|siri.*female|hortense/i) ||
      fr.find((v) => /female|femme/i.test(v.name)) ||
      fr[0] ||
      null;
    const male =
      prefer(/henri|paul|thomas|google français|siri.*male|claude/i) ||
      fr.find((v) => /male|homme/i.test(v.name) && v !== female) ||
      fr[1] ||
      female;
    return { female, male, all: fr };
  }

  function pickFrenchVoice(turnIndex = 0) {
    const { female, male } = frenchVoices();
    return turnIndex % 2 === 0 ? female : male;
  }

  function dialogueTurns(text) {
    const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
    const turns = [];
    let buf = [];
    lines.forEach((ln) => {
      const m = ln.match(/^[-–—]\s*(.*)$/);
      if (m) {
        if (buf.length) {
          turns.push(buf.join(' '));
          buf = [];
        }
        turns.push(m[1].trim());
      } else {
        buf.push(ln);
      }
    });
    if (buf.length) turns.push(buf.join(' '));
    return turns.filter(Boolean);
  }

  // ---------- contact / gate ----------
  function showApp() {
    els.contactSection.classList.add('hidden');
    els.app.classList.remove('hidden');
    if (state.user) {
      els.userChip.textContent = `${state.user.fullName} · ${state.user.targetLevel}`;
      els.userChip.classList.remove('hidden');
    }
    // Prefer user's target level
    if (state.user && state.user.targetLevel) {
      selectLevel(state.user.targetLevel);
    }
    notifyParentHeight();
  }

  function validateField(id) {
    const field = document.getElementById(id);
    const err = document.getElementById(`${id}-error`);
    const ok = !!(field && String(field.value).trim());
    field.classList.toggle('error', !ok);
    if (err) err.style.display = ok ? 'none' : 'block';
    if (id === 'email' && ok) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      field.classList.toggle('error', !emailOk);
      if (err) {
        err.textContent = emailOk ? 'Please enter a valid email address' : 'Please enter a valid email address';
        err.style.display = emailOk ? 'none' : 'block';
      }
      return emailOk;
    }
    return ok;
  }

  if (state.user) {
    showApp();
  }

  els.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    els.formSuccess.classList.add('hidden');
    els.formError.classList.add('hidden');

    const ok =
      validateField('fullName') &&
      validateField('email') &&
      validateField('targetLevel');
    if (!ok) return;

    const payload = {
      fullName: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      targetLevel: document.getElementById('targetLevel').value,
      mode: document.getElementById('prefMode').value || 'exam',
      note: document.getElementById('note').value.trim(),
      website: document.getElementById('website')?.value || '',
      time: new Date().toLocaleString(),
      source: 'Hemiya Listening Tool'
    };

    els.submitBtn.disabled = true;
    els.submitBtn.textContent = 'Sending…';

    try {
      const tg = window.TelegramNotify;
      const cfg = tg.getConfig();
      if (!cfg.chatId || !cfg.botToken) {
        console.warn('Telegram not fully configured');
        els.formError.innerHTML =
          '<p>Telegram is not configured yet. Access is unlocked locally.</p>';
        els.formError.classList.remove('hidden');
      } else {
        await tg.notifyRegistration(payload);
      }

      state.user = payload;
      state.settings.mode = payload.mode;
      storage.set(CFG.storageKeys.user, payload);
      storage.set(CFG.storageKeys.settings, state.settings);

      els.formSuccess.classList.remove('hidden');
      toast('Welcome! Opening your practice space…', 'success');
      setTimeout(showApp, 900);
    } catch (err) {
      console.error(err);
      els.formError.innerHTML = `<p>Could not send registration (${err.message}). You can still continue locally.</p>`;
      els.formError.classList.remove('hidden');
      // Soft-fail unlock so learners are not blocked by network issues
      state.user = payload;
      storage.set(CFG.storageKeys.user, payload);
      setTimeout(showApp, 1600);
    } finally {
      els.submitBtn.disabled = false;
      els.submitBtn.textContent = 'Start listening practice';
    }
  });

  els.resetUser.addEventListener('click', () => {
    localStorage.removeItem(CFG.storageKeys.user);
    state.user = null;
    location.reload();
  });

  // ---------- level / catalog ----------
  function selectLevel(level) {
    state.level = level;
    els.levelButtons.forEach((b) => b.classList.toggle('active', b.dataset.level === level));
    els.levelTitle.textContent = `Niveau ${level}`;
    els.levelExplanation.textContent = listeningLevelDescriptions[level] || '';
    els.levelPanel.classList.remove('hidden');
    els.sessionPanel.classList.add('hidden');
    stopAllAudio();
    renderStats();
    renderExerciseGrid();
    notifyParentHeight();
  }

  els.levelButtons.forEach((btn) => {
    btn.addEventListener('click', () => selectLevel(btn.dataset.level));
  });

  els.searchInput.addEventListener('input', () => {
    state.filter = els.searchInput.value.trim().toLowerCase();
    renderExerciseGrid();
  });

  function renderStats() {
    if (!state.level) return;
    const list = listeningData[state.level] || [];
    let done = 0;
    let scoreSum = 0;
    let scored = 0;
    list.forEach((ex) => {
      const p = getProgress(state.level, ex.id);
      if (p) {
        done += 1;
        if (typeof p.percent === 'number') {
          scoreSum += p.percent;
          scored += 1;
        }
      }
    });
    const avg = scored ? Math.round(scoreSum / scored) : 0;
    els.statsBar.innerHTML = `
      <div class="stat"><span class="stat-value">${list.length}</span><span class="stat-label">Exercises</span></div>
      <div class="stat"><span class="stat-value">${done}</span><span class="stat-label">Attempted</span></div>
      <div class="stat"><span class="stat-value">${avg}%</span><span class="stat-label">Avg score</span></div>
    `;
  }

  function renderExerciseGrid() {
    const list = (listeningData[state.level] || []).filter((ex) => {
      if (!state.filter) return true;
      return ex.title.toLowerCase().includes(state.filter) || ex.id.toLowerCase().includes(state.filter);
    });

    els.exerciseGrid.innerHTML = '';
    if (!list.length) {
      els.exerciseGrid.innerHTML = `<p class="empty-state">No exercises match your search.</p>`;
      return;
    }

    list.forEach((ex, idx) => {
      const p = getProgress(state.level, ex.id);
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'exercise-card';
      card.innerHTML = `
        <div class="exercise-card-top">
          <span class="exercise-index">${String(idx + 1).padStart(2, '0')}</span>
          ${p ? `<span class="pill ${p.percent >= 70 ? 'good' : 'warn'}">${p.percent}%</span>` : '<span class="pill muted">New</span>'}
        </div>
        <h3>${ex.title}</h3>
        <p>${ex.questions.length} questions · ~${estimateDuration(ex)} min</p>
      `;
      card.addEventListener('click', () => openExercise(ex.id));
      els.exerciseGrid.appendChild(card);
    });
    notifyParentHeight();
  }

  function estimateDuration(ex) {
    const words = stripHtml(ex.transcript).split(/\s+/).length;
    return Math.max(3, Math.round(words / 120 + ex.questions.length * 0.6));
  }

  // ---------- player (mp3 + TTS) ----------
  function stopTts() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    state.tts.speaking = false;
    state.tts.index = 0;
    state.tts.charsDone = 0;
  }

  function stopAllAudio() {
    stopTts();
    els.audioEl.pause();
    els.audioEl.removeAttribute('src');
    els.audioEl.load();
    state.playing = false;
    updatePlayButtons();
  }

  function resetPlaybackCounters() {
    state.plays = 0;
    els.playCount.textContent = '0';
    els.playLimit.textContent = String(state.maxPlays);
    els.progressFill.style.width = '0%';
    els.timeCurrent.textContent = '00:00';
    els.timeTotal.textContent = '00:00';
  }

  function updatePlayButtons() {
    const limitHit = state.mode === 'exam' && state.plays >= state.maxPlays && !state.playing;
    els.playBtn.disabled = limitHit;
    els.replayBtn.disabled = limitHit;
    els.pauseBtn.disabled = !state.playing;
    els.stopBtn.disabled = !state.playing && state.source !== 'tts';
    els.playerStatus.textContent = limitHit
      ? 'Play limit reached'
      : state.playing
        ? 'Playing…'
        : state.source === 'tts'
          ? 'Ready (voice synthesis)'
          : state.source === 'mp3'
            ? 'Ready (audio file)'
            : 'Preparing audio…';
  }

  async function prepareSource(exercise) {
    state.source = 'none';
    els.sourceBadge.textContent = 'Checking audio…';
    els.sourceBadge.className = 'source-badge';

    const files = [
      `${CFG.audio.localBase}${exercise.id}.mp3`,
      `${CFG.audio.remoteBase}${exercise.id}.mp3`,
      exercise.audioFile
    ].filter(Boolean);

    for (const url of files) {
      const ok = await probeAudio(url);
      if (ok) {
        els.audioEl.src = url;
        await new Promise((resolve) => {
          const onReady = () => {
            cleanup();
            resolve(true);
          };
          const onErr = () => {
            cleanup();
            resolve(false);
          };
          const cleanup = () => {
            els.audioEl.removeEventListener('loadedmetadata', onReady);
            els.audioEl.removeEventListener('error', onErr);
          };
          els.audioEl.addEventListener('loadedmetadata', onReady, { once: true });
          els.audioEl.addEventListener('error', onErr, { once: true });
          els.audioEl.load();
        });
        if (els.audioEl.duration && !Number.isNaN(els.audioEl.duration)) {
          state.source = 'mp3';
          els.sourceBadge.textContent = 'Natural French voice';
          els.sourceBadge.className = 'source-badge file';
          els.timeTotal.textContent = formatTime(els.audioEl.duration);
          updatePlayButtons();
          return;
        }
      }
    }

    // TTS fallback — critical because hosted MP3s are currently missing
    prepareTts(exercise);
  }

  function probeAudio(url) {
    return new Promise((resolve) => {
      const audio = new Audio();
      let settled = false;
      const done = (val) => {
        if (settled) return;
        settled = true;
        audio.removeAttribute('src');
        resolve(val);
      };
      audio.preload = 'metadata';
      audio.onloadedmetadata = () => done(true);
      audio.onerror = () => done(false);
      setTimeout(() => done(false), 2500);
      audio.src = url;
    });
  }

  function prepareTts(exercise) {
    stopTts();
    const text = stripHtml(exercise.transcript);
    const turns = dialogueTurns(text);
    const chunks = turns.length >= 2 ? turns : splitSentences(text);
    state.tts.utterances = chunks;
    state.tts.charsTotal = text.length || 1;
    state.tts.charsDone = 0;
    state.tts.index = 0;
    state.source = 'tts';
    els.sourceBadge.textContent = 'Browser voice (fallback)';
    els.sourceBadge.className = 'source-badge tts';
    const est = Math.max(8, Math.round(text.length / (13 * (state.settings.speed || 1))));
    els.timeTotal.textContent = formatTime(est);
    updatePlayButtons();

    if (window.speechSynthesis) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    }
  }

  function canStartPlay() {
    if (state.mode === 'exam' && state.plays >= state.maxPlays) {
      toast('Maximum listens reached for exam mode.', 'warn');
      els.transcriptSection.classList.remove('hidden');
      return false;
    }
    return true;
  }

  function registerPlayStart() {
    if (!state.playing) {
      state.plays += 1;
      els.playCount.textContent = String(state.plays);
      if (state.mode === 'exam' && state.plays >= state.maxPlays) {
        els.revealTranscript.disabled = false;
      }
    }
  }

  function playMp3(fromStart = false) {
    if (!canStartPlay() && !state.playing) return;
    if (fromStart) els.audioEl.currentTime = 0;
    els.audioEl.playbackRate = Number(els.speedSelect.value) || 1;
    registerPlayStart();
    state.playing = true;
    els.audioEl.play().catch(() => {
      state.playing = false;
      toast('Could not play audio file. Switching to voice…', 'warn');
      prepareTts(state.exercise);
      playTts(true);
    });
    updatePlayButtons();
  }

  function playTts(fromStart = false) {
    if (!window.speechSynthesis) {
      toast('Speech synthesis is not available in this browser.', 'error');
      return;
    }
    if (!canStartPlay() && !state.tts.speaking) return;

    if (fromStart) {
      stopTts();
      state.tts.index = 0;
      state.tts.charsDone = 0;
    }

    registerPlayStart();
    state.playing = true;
    state.tts.speaking = true;
    updatePlayButtons();
    speakNextChunk();
  }

  function speakNextChunk() {
    if (!state.tts.speaking) return;
    if (state.tts.index >= state.tts.utterances.length) {
      state.playing = false;
      state.tts.speaking = false;
      els.progressFill.style.width = '100%';
      updatePlayButtons();
      if (state.mode === 'exam' && state.plays >= state.maxPlays) {
        els.transcriptSection.classList.remove('hidden');
      }
      return;
    }

    const chunk = state.tts.utterances[state.tts.index];
    const u = new SpeechSynthesisUtterance(chunk);
    u.lang = 'fr-FR';
    // Slightly slower + tiny pitch alternation makes dialogue less flat
    const speed = Number(els.speedSelect.value) || 1;
    u.rate = Math.min(1.25, Math.max(0.75, speed * 0.92));
    u.pitch = state.tts.index % 2 === 0 ? 1.05 : 0.92;
    const voice = pickFrenchVoice(state.tts.index);
    if (voice) u.voice = voice;

    u.onboundary = (ev) => {
      if (typeof ev.charIndex === 'number') {
        const base = state.tts.utterances.slice(0, state.tts.index).join(' ').length;
        const done = base + ev.charIndex;
        const pct = Math.min(100, (done / state.tts.charsTotal) * 100);
        els.progressFill.style.width = `${pct}%`;
        els.timeCurrent.textContent = formatTime((done / state.tts.charsTotal) * parseTime(els.timeTotal.textContent));
      }
    };

    u.onend = () => {
      state.tts.charsDone += chunk.length + 1;
      state.tts.index += 1;
      const pct = Math.min(100, (state.tts.charsDone / state.tts.charsTotal) * 100);
      els.progressFill.style.width = `${pct}%`;
      speakNextChunk();
    };

    u.onerror = () => {
      state.playing = false;
      state.tts.speaking = false;
      updatePlayButtons();
      toast('Voice playback interrupted.', 'warn');
    };

    speechSynthesis.speak(u);
  }

  function parseTime(mmss) {
    const [m, s] = String(mmss).split(':').map(Number);
    return (m || 0) * 60 + (s || 0);
  }

  function pausePlayback() {
    if (state.source === 'mp3') {
      els.audioEl.pause();
    } else if (state.source === 'tts') {
      speechSynthesis.pause();
    }
    state.playing = false;
    updatePlayButtons();
  }

  function resumePlayback() {
    if (state.source === 'tts' && speechSynthesis.paused) {
      speechSynthesis.resume();
      state.playing = true;
      updatePlayButtons();
      return;
    }
    if (state.source === 'mp3') playMp3(false);
    else playTts(false);
  }

  function stopPlayback() {
    if (state.source === 'mp3') {
      els.audioEl.pause();
      els.audioEl.currentTime = 0;
    } else {
      stopTts();
    }
    state.playing = false;
    els.progressFill.style.width = '0%';
    els.timeCurrent.textContent = '00:00';
    updatePlayButtons();
  }

  els.playBtn.addEventListener('click', () => {
    if (state.playing) return;
    if (state.source === 'tts' && speechSynthesis.paused) {
      resumePlayback();
      return;
    }
    if (state.source === 'mp3') playMp3(false);
    else playTts(state.tts.index === 0);
  });
  els.pauseBtn.addEventListener('click', pausePlayback);
  els.stopBtn.addEventListener('click', stopPlayback);
  els.replayBtn.addEventListener('click', () => {
    if (state.source === 'mp3') playMp3(true);
    else playTts(true);
  });
  els.speedSelect.addEventListener('change', () => {
    state.settings.speed = Number(els.speedSelect.value) || 1;
    storage.set(CFG.storageKeys.settings, state.settings);
    if (state.source === 'mp3') els.audioEl.playbackRate = state.settings.speed;
  });

  els.audioEl.addEventListener('timeupdate', () => {
    if (state.source !== 'mp3' || !els.audioEl.duration) return;
    const pct = (els.audioEl.currentTime / els.audioEl.duration) * 100;
    els.progressFill.style.width = `${pct}%`;
    els.timeCurrent.textContent = formatTime(els.audioEl.currentTime);
  });
  els.audioEl.addEventListener('ended', () => {
    state.playing = false;
    els.progressFill.style.width = '100%';
    updatePlayButtons();
    if (state.mode === 'exam' && state.plays >= state.maxPlays) {
      els.transcriptSection.classList.remove('hidden');
    }
  });

  // Block seeking in exam mode
  els.audioEl.addEventListener('seeking', () => {
    if (state.mode === 'exam' && state.playing) {
      // allow natural playback only — snap forward seeks back gently is hard;
      // hide native controls instead (we use custom UI)
    }
  });

  // ---------- session / exercise ----------
  async function openExercise(id) {
    const list = listeningData[state.level] || [];
    const exercise = list.find((x) => x.id === id);
    if (!exercise) return;

    state.exercise = exercise;
    state.mode = (state.settings && state.settings.mode) || (state.user && state.user.mode) || 'exam';
    state.maxPlays = state.mode === 'exam' ? CFG.audio.maxPlaysExam : 99;

    els.levelPanel.classList.add('hidden');
    els.sessionPanel.classList.remove('hidden');
    els.results.classList.add('hidden');
    els.transcriptSection.classList.add('hidden');
    els.exerciseTitle.textContent = exercise.title;
    els.exerciseMeta.textContent = `${state.level} · ${exercise.questions.length} questions`;
    els.modeBadge.textContent = state.mode === 'exam' ? 'Exam mode' : 'Practice mode';
    els.modeBadge.className = `mode-badge ${state.mode}`;
    els.transcriptContent.innerHTML = exercise.transcript;
    els.revealTranscript.disabled = state.mode === 'exam';
    els.speedSelect.value = String(state.settings.speed || 1);
    els.speedSelect.disabled = state.mode === 'exam';

    resetPlaybackCounters();
    resetTimer();
    buildQuiz(exercise.questions);
    await prepareSource(exercise);
    notifyParentHeight();
    window.scrollTo({ top: els.sessionPanel.offsetTop - 20, behavior: 'smooth' });
  }

  els.backBtn.addEventListener('click', () => {
    stopAllAudio();
    clearTimer(true);
    els.sessionPanel.classList.add('hidden');
    els.levelPanel.classList.remove('hidden');
    renderStats();
    renderExerciseGrid();
    notifyParentHeight();
  });

  els.revealTranscript.addEventListener('click', () => {
    if (state.mode === 'exam' && state.plays < state.maxPlays) {
      toast('Finish your listens first, or switch to practice mode next time.', 'warn');
      return;
    }
    els.transcriptSection.classList.toggle('hidden');
    notifyParentHeight();
  });

  // Mode toggle in session header
  document.getElementById('toggle-mode').addEventListener('click', () => {
    state.mode = state.mode === 'exam' ? 'practice' : 'exam';
    state.settings.mode = state.mode;
    storage.set(CFG.storageKeys.settings, state.settings);
    state.maxPlays = state.mode === 'exam' ? CFG.audio.maxPlaysExam : 99;
    els.modeBadge.textContent = state.mode === 'exam' ? 'Exam mode' : 'Practice mode';
    els.modeBadge.className = `mode-badge ${state.mode}`;
    els.playLimit.textContent = String(state.maxPlays === 99 ? '∞' : state.maxPlays);
    els.speedSelect.disabled = state.mode === 'exam';
    els.revealTranscript.disabled = state.mode === 'exam' && state.plays < state.maxPlays;
    toast(state.mode === 'exam' ? 'Exam mode: 2 listens, no speed change.' : 'Practice mode: unlimited listens + speed control.', 'info');
    updatePlayButtons();
  });

  // ---------- timer ----------
  function resetTimer() {
    clearTimer(false);
    state.timeLeft = (CFG.timer[state.level] || 300);
    els.timerDisplay.textContent = formatTime(state.timeLeft);
    els.timerDisplay.classList.remove('urgent');
    els.timerToggle.textContent = 'Start timer';
    els.timerToggle.disabled = false;
  }

  function clearTimer(resetLabel) {
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = null;
    state.timerRunning = false;
    if (resetLabel) els.timerToggle.textContent = 'Start timer';
  }

  els.timerToggle.addEventListener('click', () => {
    if (state.timerRunning) {
      clearTimer(true);
      return;
    }
    state.timerRunning = true;
    els.timerToggle.textContent = 'Pause';
    state.timerId = setInterval(() => {
      state.timeLeft -= 1;
      els.timerDisplay.textContent = formatTime(state.timeLeft);
      if (state.timeLeft <= 30) els.timerDisplay.classList.add('urgent');
      if (state.timeLeft <= 0) {
        clearTimer(true);
        els.timerToggle.textContent = 'Time up';
        els.timerToggle.disabled = true;
        toast('Time is up — submitting your answers.', 'warn');
        gradeQuiz(true);
      }
    }, 1000);
  });
  els.timerReset.addEventListener('click', resetTimer);

  // ---------- quiz ----------
  function buildQuiz(questions) {
    els.quizForm.innerHTML = '';
    questions.forEach((q, index) => {
      const block = document.createElement('div');
      block.className = 'question';
      block.id = q.id;
      block.innerHTML = `<p class="question-text"><span class="q-num">${index + 1}</span> ${q.question}</p>`;
      const options = document.createElement('div');
      options.className = 'options';

      if (q.type === 'radio' || q.type === 'checkbox') {
        q.options.forEach((opt) => {
          const row = document.createElement('label');
          row.className = 'option';
          row.innerHTML = `
            <input type="${q.type === 'radio' ? 'radio' : 'checkbox'}" name="${q.id}" value="${opt.id}" id="${q.id}-${opt.id}">
            <span>${opt.text}</span>
          `;
          options.appendChild(row);
        });
      } else {
        const ta = document.createElement('textarea');
        ta.id = `${q.id}-answer`;
        ta.name = q.id;
        ta.rows = 3;
        ta.placeholder = 'Votre réponse…';
        options.appendChild(ta);
      }

      const feedback = document.createElement('div');
      feedback.className = 'feedback';
      feedback.id = `feedback-${q.id}`;

      block.appendChild(options);
      block.appendChild(feedback);
      els.quizForm.appendChild(block);
    });

    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.innerHTML = `
      <button type="submit" id="submit-quiz">Check answers</button>
      <button type="button" id="show-answers" class="ghost">Reveal answers</button>
    `;
    els.quizForm.appendChild(controls);
    document.getElementById('show-answers').addEventListener('click', () => revealAnswers());
  }

  els.quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    gradeQuiz(false);
  });

  function gradeQuiz(auto) {
    if (!state.exercise) return;
    const questions = state.exercise.questions;
    let correct = 0;
    const details = [];

    questions.forEach((q) => {
      let isCorrect = false;
      let userAnswer = '';

      if (q.type === 'radio') {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        userAnswer = selected ? selected.value : '';
        isCorrect = userAnswer === q.correctAnswer;
      } else if (q.type === 'checkbox') {
        const selected = [...document.querySelectorAll(`input[name="${q.id}"]:checked`)].map((i) => i.value);
        userAnswer = selected.join(', ');
        const expected = [...q.correctAnswer].sort().join(',');
        isCorrect = [...selected].sort().join(',') === expected;
      } else {
        const val = (document.getElementById(`${q.id}-answer`).value || '').trim().toLowerCase();
        userAnswer = val;
        isCorrect = val === String(q.correctAnswer).trim().toLowerCase();
      }

      if (isCorrect) correct += 1;
      showFeedback(q.id, isCorrect, q.explanation);
      markOptions(q, isCorrect);
      details.push({ id: q.id, isCorrect, explanation: q.explanation, userAnswer });
    });

    const percent = Math.round((correct / questions.length) * 100);
    els.scoreSummary.textContent = `${correct}/${questions.length} · ${percent}%`;
    els.scoreDetail.innerHTML = details
      .map(
        (d, i) =>
          `<div class="score-row ${d.isCorrect ? 'ok' : 'bad'}">
            <strong>Q${i + 1}</strong> ${d.isCorrect ? 'Correct' : 'Incorrect'}
            <span>${d.explanation}</span>
          </div>`
      )
      .join('');
    els.results.classList.remove('hidden');
    els.transcriptSection.classList.remove('hidden');

    state.progress[exerciseKey(state.level, state.exercise.id)] = {
      percent,
      correct,
      total: questions.length,
      at: Date.now(),
      mode: state.mode,
      auto: !!auto
    };
    saveProgress();
    renderStats();

    els.results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    notifyParentHeight();
    toast(percent >= 70 ? 'Nice work!' : 'Review the transcript and try again.', percent >= 70 ? 'success' : 'info');
  }

  function showFeedback(id, isCorrect, explanation) {
    const box = document.getElementById(`feedback-${id}`);
    box.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    box.innerHTML = `<p class="${isCorrect ? 'correct' : 'incorrect'}-feedback">${isCorrect ? 'Correct' : 'Incorrect'}</p><p>${explanation}</p>`;
  }

  function markOptions(q) {
    if (q.type !== 'radio' && q.type !== 'checkbox') return;
    q.options.forEach((opt) => {
      const label = document.querySelector(`label.option input#${CSS.escape(`${q.id}-${opt.id}`)}`)?.closest('label');
      if (!label) return;
      const isRight =
        q.type === 'radio' ? opt.id === q.correctAnswer : q.correctAnswer.includes(opt.id);
      label.classList.toggle('is-correct', isRight);
    });
  }

  function revealAnswers() {
    if (!state.exercise) return;
    state.exercise.questions.forEach((q) => {
      if (q.type === 'radio' || q.type === 'checkbox') {
        q.options.forEach((opt) => {
          const input = document.getElementById(`${q.id}-${opt.id}`);
          const label = input && input.closest('label');
          const isRight =
            q.type === 'radio' ? opt.id === q.correctAnswer : q.correctAnswer.includes(opt.id);
          if (isRight && label) label.classList.add('is-correct', 'highlight');
          if (isRight && input) input.checked = true;
        });
      } else {
        const ta = document.getElementById(`${q.id}-answer`);
        if (ta) {
          ta.value = q.correctAnswer;
          ta.classList.add('highlight');
        }
      }
      showFeedback(q.id, true, q.explanation);
    });
    els.transcriptSection.classList.remove('hidden');
    notifyParentHeight();
  }

  els.retryBtn.addEventListener('click', () => {
    if (state.exercise) openExercise(state.exercise.id);
  });

  els.nextBtn.addEventListener('click', () => {
    const list = listeningData[state.level] || [];
    const idx = list.findIndex((x) => x.id === state.exercise.id);
    const next = list[idx + 1] || list[0];
    openExercise(next.id);
  });

  // ---------- iframe / init ----------
  const ro = new ResizeObserver(() => notifyParentHeight());
  ro.observe(document.body);
  window.addEventListener('load', notifyParentHeight);

  // Prefill mode select
  const prefMode = document.getElementById('prefMode');
  if (prefMode && state.settings.mode) prefMode.value = state.settings.mode;
  if (els.speedSelect) els.speedSelect.value = String(state.settings.speed || 1);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (!state.exercise || e.target.matches('input, textarea, select')) return;
    if (e.code === 'Space') {
      e.preventDefault();
      if (state.playing) pausePlayback();
      else els.playBtn.click();
    }
  });
});
