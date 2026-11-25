/* The shared catalog showcase uses the same products as the full catalog. */
(() => {
  'use strict';

  const links = [...document.querySelectorAll('[data-home-catalog]')];
  const catalog = window.ANTHRISE_SCENE_PRODUCTS;
  if (!links.length || !catalog || !HTMLDialogElement.prototype.showModal) return;

  const showcase = ['ess16', 'series_ascend', 'balconyBess', 'series_horizon', 'hybrid20', 'origAER400']
    .map(id => catalog.find(product => product.id === id)).filter(Boolean);
  if (!showcase.length) return;

  const translate = text => window.ANTHRISE_I18N?.t(text) || text;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const dialog = document.createElement('dialog');
  dialog.className = 'home-catalog-dialog';
  dialog.id = 'catalog-showcase';
  dialog.setAttribute('aria-labelledby', 'home-catalog-title');
  dialog.innerHTML = `
    <header><h2 id="home-catalog-title"></h2><button type="button" data-close autofocus>×</button></header>
    <div class="home-catalog-stage">
      <div class="home-catalog-orbit" aria-hidden="true"></div>
      <div class="home-catalog-track"></div>
    </div>
    <footer><button type="button" data-replay></button><a href="/products.html?category=all"></a></footer>`;
  document.body.append(dialog);

  const stage = dialog.querySelector('.home-catalog-stage');
  const orbit = dialog.querySelector('.home-catalog-orbit');
  const track = dialog.querySelector('.home-catalog-track');
  const close = dialog.querySelector('[data-close]');
  const replay = dialog.querySelector('[data-replay]');
  const browse = dialog.querySelector('footer a');
  const items = showcase.map(product => {
    const card = document.createElement('a');
    card.className = 'home-catalog-card';
    const image = new Image();
    image.src = '/' + product.image;
    image.alt = '';
    const name = document.createElement('strong');
    const detail = document.createElement('span');
    card.append(image, name, detail);
    track.append(card);
    return {card, name, detail, product};
  });

  const interfaceCopy = {
    en: ['All products', 'Replay animation', count => 'Search all ' + count + ' products'],
    zh: ['全部产品', '重播动画', count => '搜索全部 ' + count + ' 款产品'],
    es: ['Todos los productos', 'Repetir animación', count => 'Buscar en ' + count + ' productos'],
    ru: ['Все продукты', 'Повторить анимацию', count => 'Поиск по каталогу (' + count + ')']
  };

  function localize() {
    const locale = window.ANTHRISE_I18N?.language || document.documentElement.lang;
    const language = locale.split('-')[0];
    const productLanguage = ['en', 'zh', 'es', 'ru'].includes(language) ? language : 'en';
    const [title, replayText, searchText] = interfaceCopy[language] || interfaceCopy.en;

    dialog.querySelector('h2').textContent = title;
    close.setAttribute('aria-label', translate('Close'));
    replay.textContent = replayText;
    browse.textContent = searchText(catalog.length);
    browse.href = '/products.html?category=all&lang=' + encodeURIComponent(locale);
    for (const {card, name, detail, product} of items) {
      card.href = '/products/' + product.id + '-' + productLanguage + '.html?lang=' + encodeURIComponent(locale);
      name.textContent = language === 'zh' ? product.zh : translate(product.en);
      detail.textContent = translate('View details');
    }
  }

  let animations = [];
  let trigger;
  function stopAnimation() {
    for (const animation of animations) animation.cancel();
    animations = [];
    dialog.classList.remove('is-orbiting');
  }

  function animate() {
    stopAnimation();
    track.scrollLeft = 0;
    if (reducedMotion.matches) return;

    const bounds = stage.getBoundingClientRect();
    dialog.classList.add('is-orbiting');
    const movement = items.map(({card}, index) => {
      const rect = card.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2 - rect.left - rect.width / 2;
      const centerY = bounds.top + bounds.height / 2 - rect.top - rect.height / 2;
      function orbitFrame(turn, offset) {
        const angle = -.7 + 2 * Math.PI * (index / items.length + turn);
        const depth = Math.sin(angle);
        const x = centerX + Math.cos(angle) * bounds.width * .35;
        const y = centerY + depth * bounds.height * .29 + Math.cos(angle) * bounds.height * .07;
        const scale = .7 + .14 * depth;
        return {offset, opacity: .94, transform: `translate(${x}px,${y}px) perspective(800px) rotateY(${Math.cos(angle)*36}deg) rotate(-6deg) scale(${scale})`};
      }
      const frames = [{offset: 0, opacity: 0, transform: `translate(${centerX}px,${centerY}px) scale(.38)`}];
      for (let frame = 0; frame <= 24; frame++) frames.push(orbitFrame(frame / 24, .11 + .57 * frame / 24));
      frames[frames.length - 1].easing = 'cubic-bezier(.19,.75,.23,1)';
      frames.push({offset: 1, opacity: 1, transform: 'none'});
      return card.animate(frames, {duration: 2370});
    });
    movement.push(orbit.animate([{opacity: 0}, {opacity: 1, offset: .15}, {opacity: 1, offset: .68}, {opacity: 0}], {duration: 2370}));
    animations = movement;
    Promise.allSettled(movement.map(animation => animation.finished)).then(() => {
      if (animations === movement) stopAnimation();
    });
  }

  for (const link of links) {
    link.setAttribute('aria-controls', dialog.id);
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      event.preventDefault();
      trigger = link;
      window.PRODUCT_BROWSER?.close();
      localize();
      dialog.showModal();
      animate();
    });
  }
  close.addEventListener('click', () => dialog.close());
  replay.addEventListener('click', animate);
  dialog.addEventListener('close', () => {
    stopAnimation();
    trigger?.focus({preventScroll: true});
  });
  reducedMotion.addEventListener('change', event => { if (event.matches) stopAnimation(); });
})();
