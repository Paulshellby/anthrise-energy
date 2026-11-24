(() => {
  'use strict';

  const zones = {
    en: 'America/New_York', zh: 'Asia/Shanghai', 'zh-Hant': 'Asia/Taipei',
    es: 'Europe/Madrid', 'pt-BR': 'America/Sao_Paulo', fr: 'Europe/Paris',
    de: 'Europe/Berlin', it: 'Europe/Rome', nl: 'Europe/Amsterdam',
    ru: 'Europe/Moscow', pl: 'Europe/Warsaw', tr: 'Europe/Istanbul',
    ar: 'Asia/Riyadh', fa: 'Asia/Tehran', he: 'Asia/Jerusalem',
    hi: 'Asia/Kolkata', bn: 'Asia/Dhaka', ur: 'Asia/Karachi',
    id: 'Asia/Jakarta', ms: 'Asia/Kuala_Lumpur', vi: 'Asia/Ho_Chi_Minh',
    th: 'Asia/Bangkok', ja: 'Asia/Tokyo', ko: 'Asia/Seoul',
    sw: 'Africa/Nairobi', ha: 'Africa/Lagos', zu: 'Africa/Johannesburg',
    af: 'Africa/Johannesburg', mi: 'Pacific/Auckland', fil: 'Asia/Manila'
  };

  const image = document.querySelector('.scene-city-image');
  const body = document.body;
  let timer;

  function update() {
    clearTimeout(timer);
    const locale = window.ANTHRISE_I18N?.language || 'en';
    const timeZone = zones[locale] || zones.en;
    const now = new Date();
    const hour = Number(new Intl.DateTimeFormat('en', {
      timeZone, hour: 'numeric', hourCycle: 'h23'
    }).format(now));
    const light = hour >= 6 && hour < 18 ? 'day' : 'night';

    if (body.dataset.campusLight !== light) {
      image.src = '/assets/experience/products-campus-' + light + '.webp';
      body.dataset.campusLight = light;
    }

    timer = setTimeout(update, 60000 - (now.getTime() % 60000));
  }

  window.addEventListener('anthrise:language-ready', update);
  window.addEventListener('pageshow', update);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) update();
  });
  update();
})();
