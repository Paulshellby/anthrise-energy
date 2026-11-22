(() => {
  'use strict';
  if (window.__anthriseShellLoaded) return;
  window.__anthriseShellLoaded = true;
  if (!window.__anthriseUnifiedRisey && !document.querySelector('script[data-unified-risey]')) {
    const companionScript=document.createElement('script');companionScript.src='/assets/risey-companion.js?v=20261120-actions3';companionScript.dataset.unifiedRisey='';document.head.append(companionScript);
  }
  const version = '20261122-telegram1';
  const paths = { en: '/', zh: '/home-zh.html', es: '/home-es.html', ru: '/home-ru.html' };
  const locale = () => {
    if (window.ANTHRISE_I18N) return window.ANTHRISE_I18N.language;
    const value = document.documentElement.lang.split('-')[0];
    return Object.hasOwn(paths, value) ? value : 'en';
  };
  const labels = {
    en: ['About', 'Products', 'Solutions', 'Selection tools', 'Partnership', 'Choose language'],
    zh: ['关于我们', '产品', '解决方案', '选型工具', '合作', '选择语言'],
    es: ['Empresa', 'Productos', 'Soluciones', 'Selección', 'Colaboración', 'Elegir idioma'],
    ru: ['О компании', 'Продукция', 'Решения', 'Подбор', 'Партнёрство', 'Выбрать язык'],
  };
  const homeFor = lang => window.ANTHRISE_I18N?.home(lang) || paths[lang] || '/';
  function routeProducts() { location.assign(homeFor(locale()) + '#products'); }
  // Solutions and selection tools are normal standalone destinations.
  function planningTarget(target) {
    const trigger=target.closest('header [aria-controls="menu-about"],header [aria-controls="mega-company"],header [aria-controls="menu-solutions"],header [aria-controls="mega-solutions"],header [aria-controls="menu-tools"],header [aria-controls="mega-tools"]');
    if(!trigger)return null;if(['menu-about','mega-company'].includes(trigger.getAttribute('aria-controls')))return 'about.html';return trigger.getAttribute('aria-controls').endsWith('tools')?'selection-tools.html':'solutions.html';
  }
  document.addEventListener('click',event=>{const page=planningTarget(event.target);if(!page)return;event.preventDefault();event.stopImmediatePropagation();location.assign('/'+page+'?lang='+locale());},true);
  document.addEventListener('keydown',event=>{if(!['Enter',' '].includes(event.key))return;const page=planningTarget(event.target);if(!page)return;event.preventDefault();event.stopImmediatePropagation();location.assign('/'+page+'?lang='+locale());},true);
  // Capture before the retired menu controller can expand its product taxonomy.
  document.addEventListener('click', event => {
    const target = event.target.closest('header summary[aria-controls="mega-products"],header [data-nav-category],header a[href$="#products"]');
    if (!target || target.hasAttribute('data-open-products-stage')) return;
    event.preventDefault(); event.stopImmediatePropagation(); routeProducts();
  }, true);
  document.addEventListener('keydown', event => {
    if (!['Enter', ' '].includes(event.key) || !event.target.matches('header summary[aria-controls="mega-products"]')) return;
    event.preventDefault(); event.stopImmediatePropagation(); routeProducts();
  }, true);
  function init(data) {
    const headerActions = document.querySelector('.site-header .header-actions');
    if (headerActions && !document.getElementById('localeToggle') && !document.querySelector('.site-language-picker')) {
      const picker = document.createElement('details');
      picker.className = 'site-language-picker';
      picker.innerHTML = '<summary>' + data.globe + '<span class="site-language-code"></span><span aria-hidden="true">⌄</span></summary><nav aria-label="Languages"><a href="/" lang="en">English</a><a href="/home-zh.html" lang="zh-Hans">简体中文</a><a href="/home-es.html" lang="es">Español</a><a href="/home-ru.html" lang="ru">Русский</a></nav>';
      headerActions.prepend(picker);
      document.addEventListener('click', event => { if (!picker.contains(event.target)) picker.open = false; });
      document.addEventListener('keydown', event => { if (event.key === 'Escape' && picker.open) { picker.open = false; picker.querySelector('summary').focus(); } });
    }
    document.querySelectorAll('footer.site-footer,footer.footer').forEach(footer => footer.remove());
    document.querySelectorAll('footer .lang-switch,footer .language-switch,footer .locale-picker').forEach(node => node.remove());
    const isCompanyPage = location.pathname.endsWith('/official-site.html');
    let lastLocale;
    function sync() {
      const lang = locale(), copy = labels[lang] || labels.en, home = homeFor(lang);
      const picker = document.querySelector('.site-language-picker');
      if (picker && !picker.hasAttribute('data-global-locale')) {
        picker.querySelector('.site-language-code').textContent = { en: 'EN', zh: '中', es: 'ES', ru: 'RU' }[lang] || lang.toUpperCase();
        picker.querySelector('summary').setAttribute('aria-label', copy[5]);
        picker.querySelectorAll('a').forEach(a => { if (a.pathname === home) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      }
      if (isCompanyPage && lastLocale !== lang) {
        const previous = document.querySelector('.site-inquiry-shell');
        const values = previous ? [...previous.querySelectorAll('input,select,textarea')].map(node => [node.id, node.value]) : [];
        if (previous) previous.remove();
        const contactAnchor=document.getElementById('site-contact-anchor');
        if(contactAnchor)contactAnchor.insertAdjacentHTML('beforebegin',data.contacts[lang]||data.contacts.en);
        else document.body.insertAdjacentHTML('beforeend',data.contacts[lang]||data.contacts.en);
        for (const [id, value] of values) { const node = document.getElementById(id); if (node) node.value = value; }
        const old = document.getElementById('inquiry'); if (old) old.hidden = true;
      }
      document.querySelectorAll('a[href*="official-site.html"]').forEach(a => {
        const url = new URL(a.href, location.href); if (url.origin !== location.origin) return;
        if (url.hash === '#products') a.href = home + '#products';
        else { url.searchParams.set('lang', lang); a.href = url.pathname + url.search + url.hash; }
      });
      if (isCompanyPage) document.querySelectorAll('a[href="#inquiry"]').forEach(a => a.href = '#project-inquiry');
      document.querySelectorAll('.site-inquiry-shell .contact-row dd').forEach(dd => {
        if (lang === 'zh' && dd.textContent.includes('Office 2285')) dd.innerHTML = '中国广东省深圳市龙华区大浪街道水围社区华盛路49号2层2285室<br>邮编：518109';
      });
      lastLocale = lang;
    }
    sync();
    window.addEventListener('anthrise:language-ready',sync);
    const languageScript=document.createElement('script');languageScript.src='/assets/global-languages.js?v=20261122-locale1';document.head.append(languageScript);
    const footer = document.querySelector('.site-inquiry-shell, #project-inquiry');
    if (footer && 'IntersectionObserver' in window) new IntersectionObserver(entries => {
      document.body.classList.toggle('site-footer-in-view', entries[0].isIntersecting);
    }).observe(footer);
    new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    // Legacy pages retain their established controls; the new contact form prepares a mail draft.
    if (isCompanyPage) document.addEventListener('submit', event => {
      if (!event.target.matches('.site-inquiry-shell #inquiry-form')) return;
      event.preventDefault(); const form = event.target;
      if (!form.reportValidity()) return;
      const name = form.querySelector('#inq-name').value.trim(), email = form.querySelector('#inq-email').value.trim(), notes = form.querySelector('#inq-message').value.trim();
      if (!name || !email || !notes) return;
      const topic = form.querySelector('#inq-topic').selectedOptions[0].textContent;
      const body = `Name: ${name}\nEmail: ${email}\nApplication: ${topic}\n\n${notes}`;
      location.href = 'mailto:sales@anthrise-tech.com?subject=' + encodeURIComponent('Anthrise project inquiry — ' + topic) + '&body=' + encodeURIComponent(body);
      form.querySelector('#form-feedback').textContent = locale() === 'zh' ? '已准备询盘邮件，请在邮箱应用中确认并发送。' : 'Review and send the draft in your email app.';
    });
  }
  const dataScript = document.createElement('script');
  dataScript.src = '/assets/site-shell-data.js?v=' + version;
  dataScript.onload = () => { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => init(window.ANTHRISE_SHELL_DATA), { once: true }); else init(window.ANTHRISE_SHELL_DATA); };
  document.head.append(dataScript);
})();
