/**
 * Public app config.
 * Telegram bot token is visible in client-side JS on GitHub Pages.
 * Rotate via @BotFather if needed.
 */
window.APP_CONFIG = {
  brandName: 'Hemiya Listen',
  botUsername: 'Hemiya_listen_bot',
  telegram: {
    botToken: '8868760493:AAFBMjVoa-MU5aeESm_2ma-TckJP_A3CLC4',
    chatId: '7480579678',
    enabled: true
  },
  audio: {
    remoteBase: 'https://yiyang512.github.io/listening1/audio/',
    localBase: 'audio/',
    maxPlaysExam: 2,
    defaultSpeed: 1
  },
  timer: {
    A1: 5 * 60,
    A2: 6 * 60,
    B1: 8 * 60,
    B2: 10 * 60
  },
  storageKeys: {
    user: 'hemiya_listen_user',
    progress: 'hemiya_listen_progress',
    settings: 'hemiya_listen_settings'
  }
};
