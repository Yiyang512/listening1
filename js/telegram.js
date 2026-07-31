/**
 * Send registration payloads directly to Telegram Bot API.
 */
window.TelegramNotify = (function () {
  function getConfig() {
    const cfg = (window.APP_CONFIG && window.APP_CONFIG.telegram) || {};
    return {
      botToken: cfg.botToken || '',
      chatId: String(cfg.chatId || '').trim(),
      enabled: cfg.enabled !== false
    };
  }

  function escapeHtml(text) {
    return String(text ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function formatRegistration(payload) {
    return [
      '<b>🎧 New Listening Registration</b>',
      '',
      `<b>Name:</b> ${escapeHtml(payload.fullName)}`,
      `<b>Email:</b> ${escapeHtml(payload.email)}`,
      `<b>Phone:</b> ${escapeHtml(payload.phone || '—')}`,
      `<b>Target level:</b> ${escapeHtml(payload.targetLevel)}`,
      `<b>Mode preference:</b> ${escapeHtml(payload.mode || 'exam')}`,
      `<b>Time:</b> ${escapeHtml(payload.time || new Date().toLocaleString())}`,
      `<b>Source:</b> ${escapeHtml(payload.source || 'listening tool')}`,
      payload.note ? `<b>Note:</b> ${escapeHtml(payload.note)}` : null
    ]
      .filter(Boolean)
      .join('\n');
  }

  async function notifyRegistration(payload) {
    const { botToken, chatId, enabled } = getConfig();
    if (!enabled) return { ok: false, skipped: true, reason: 'Telegram disabled' };
    if (!botToken || !chatId) {
      return { ok: false, reason: 'Missing Telegram botToken or chatId in config' };
    }

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatRegistration(payload),
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.description || `HTTP ${res.status}`);
    }
    return data;
  }

  return { notifyRegistration, getConfig };
})();
