(() => {
  'use strict';
  const lang = document.documentElement.lang.split('-')[0];
  const index = { en: 0, zh: 1, es: 2, ru: 3 }[lang] ?? 0;
  const labels = {
    atlas: ['Inspect the product atlas', '查看产品图鉴', 'Ver el atlas de productos', 'Открыть атлас продукции'],
    note: ['Branch review · Conceptual 3D application, not an installation drawing', '分支审阅 · 3D 概念应用示意，非安装施工图', 'Revisión de rama · Concepto 3D, no plano de instalación', 'Просмотр ветки · 3D-концепция, не монтажный чертёж'],
    inquire: ['Product inquiry', '产品咨询', 'Consulta del producto', 'Запрос по изделию'],
    model: ['Model', '型号', 'Modelo', 'Модель']
  };
  const locale = ['en', 'zh', 'es', 'ru'].includes(lang) ? lang : 'en';
  function repairRetiredStoryLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      let url;
      try { url = new URL(link.href, location.href); } catch { return; }
      if (url.origin === location.origin && url.hash === '#stories') {
        url.hash = '#hero-section';
        link.href = url.pathname + url.search + url.hash;
      }
    });
  }
  function init() {
    document.querySelectorAll('header a[href="https://anthrise-tech.com/"]').forEach(link => {
      link.href = locale === 'en' ? '/' : '/home-' + locale + '.html';
    });
    const card = document.getElementById('campus-zone-card');
    if (card && !card.querySelector('.atlas-review-link')) {
      const note = document.createElement('p');
      note.className = 'branch-preview-note';
      note.textContent = labels.note[index];
      const link = document.createElement('a');
      link.className = 'atlas-review-link';
      link.href = '/products/ess16-' + locale + '.html';
      link.textContent = labels.atlas[index] + ' →';
      card.append(note, link);
    }
    // Optional shareable review state, applied through the existing scene control.
    const reviewTime = new URLSearchParams(location.search).get('campus-time');
    if (reviewTime === 'day' || reviewTime === 'night') {
      document.getElementById('scene-btn-' + reviewTime)?.click();
      window.ANTHRISE_CAMPUS?.setTime(reviewTime, true);
    }
    const reviewZone = new URLSearchParams(location.search).get('campus-zone');
    if (['overview', 'home', 'commercial', 'offgrid'].includes(reviewZone)) {
      window.ANTHRISE_CAMPUS?.setZone(reviewZone, true);
    }
    // Do not restore the retired Application Stories cards to fix old links.
    repairRetiredStoryLinks();
    window.addEventListener('anthrise:language-ready', () => queueMicrotask(repairRetiredStoryLinks));
    const id = new URLSearchParams(location.search).get('inquire');
    if (!id) return;
    const items = (window.ANTHRISE_SHOWROOM_CATALOG || []).flatMap(category => category.items || []);
    const product = items.find(item => item.id === id);
    const message = document.getElementById('inq-message');
    const topic = document.getElementById('inq-topic');
    if (!product || !(message instanceof HTMLTextAreaElement)) return;
    const fieldIds = ['inq-name', 'inq-email', 'inq-topic', 'inq-message'];
    const storageKey = 'anthrise-branch-inquiry:' + id;
    let draft = null;
    try { draft = JSON.parse(sessionStorage.getItem(storageKey) || 'null'); } catch { /* Storage can be unavailable. */ }
    if (draft && typeof draft === 'object') {
      for (const fieldId of fieldIds) {
        const field = document.getElementById(fieldId);
        if (field && typeof draft[fieldId] === 'string' && draft[fieldId].length <= 20000) field.value = draft[fieldId];
      }
    }
    const name = index === 1 ? product.nameZh : product.nameEn;
    const prefix = '[' + labels.inquire[index] + '] ' + name + '\n' + labels.model[index] + ': ' + (product.modelCode || id) + '\n';
    if (!message.value.includes(product.modelCode || id)) message.value = prefix + message.value;
    if (topic instanceof HTMLSelectElement && !draft?.['inq-topic']) topic.value = product.topic || 'home';
    function saveDraft() {
      const values = Object.fromEntries(fieldIds.map(fieldId => [fieldId, document.getElementById(fieldId)?.value || '']));
      try { sessionStorage.setItem(storageKey, JSON.stringify(values)); } catch { /* No remote storage or submission. */ }
    }
    function preserveInquiryLanguageLinks() {
      document.querySelectorAll('.site-language-picker [data-language]').forEach(link => {
        const url = new URL(link.href, location.href);
        if (url.origin !== location.origin) return;
        url.searchParams.set('inquire', id);
        url.hash = '#project-inquiry';
        link.href = url.pathname + url.search + url.hash;
      });
    }
    fieldIds.forEach(fieldId => document.getElementById(fieldId)?.addEventListener('input', saveDraft));
    topic?.addEventListener('change', saveDraft);
    document.addEventListener('click', event => {
      if (event.target.closest('.site-language-picker [data-language]')) saveDraft();
    }, true);
    window.addEventListener('anthrise:language-ready', preserveInquiryLanguageLinks);
    preserveInquiryLanguageLinks();
    // Local draft only. Sending still requires the existing explicit email-app action.
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
