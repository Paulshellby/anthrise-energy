/* The shared catalog showcase uses the same products as the full catalog. */
(() => {
  'use strict';

  const links = [...document.querySelectorAll('[data-home-catalog]')];
  const catalog = window.ANTHRISE_SCENE_PRODUCTS;
  if (!links.length || !catalog || !HTMLDialogElement.prototype.showModal) return;

  const featuredIds = ['ess16', 'series_ascend', 'balconyBess', 'series_horizon', 'hybrid20', 'jcLight09'];
  const featured = featuredIds.map(id => catalog.find(product => product.id === id)).filter(Boolean);
  const products = [...featured, ...catalog.filter(product => !featured.includes(product))];
  if (!products.length) return;

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
      <p class="home-catalog-empty" hidden></p>
    </div>
    <footer>
      <div class="home-catalog-controls">
        <button type="button" data-step="-1">←</button>
        <button type="button" data-playback></button>
        <button type="button" data-step="1">→</button>
      </div>
      <div class="home-catalog-search">
        <input type="search" autocomplete="off" enterkeyhint="search">
        <span class="home-catalog-search-status" role="status"></span>
      </div>
    </footer>`;
  document.body.append(dialog);

  const stage = dialog.querySelector('.home-catalog-stage');
  const orbit = dialog.querySelector('.home-catalog-orbit');
  const track = dialog.querySelector('.home-catalog-track');
  const close = dialog.querySelector('[data-close]');
  const playback = dialog.querySelector('[data-playback]');
  const steps = [...dialog.querySelectorAll('[data-step]')];
  const search = dialog.querySelector('input[type="search"]');
  const searchStatus = dialog.querySelector('.home-catalog-search-status');
  const empty = dialog.querySelector('.home-catalog-empty');
  const items = [...products, ...products].map((product, index) => {
    const card = document.createElement('a');
    card.className = 'home-catalog-card';
    card.dataset.product = product.id;
    if (index >= products.length) {
      card.tabIndex = -1;
      card.setAttribute('aria-hidden', 'true');
    }
    const image = new Image();
    image.loading = index < featured.length ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.draggable = false;
    image.src = '/' + product.image;
    image.alt = '';
    const name = document.createElement('strong');
    const detail = document.createElement('span');
    card.append(image, name, detail);
    track.append(card);
    return {card, name, detail, product, duplicate: index >= products.length};
  });

  const interfaceCopy = {
    en: ['All products', 'Play', 'Pause', 'Scroll left', 'Scroll right', count => 'Search all ' + count + ' products'],
    zh: ['全部产品', '播放', '暂停', '向左滑动', '向右滑动', count => '搜索全部 ' + count + ' 款产品'],
    es: ['Todos los productos', 'Reproducir', 'Pausar', 'Desplazar a la izquierda', 'Desplazar a la derecha', count => 'Buscar en ' + count + ' productos'],
    ru: ['Все продукты', 'Воспроизвести', 'Приостановить', 'Прокрутить влево', 'Прокрутить вправо', count => 'Поиск по каталогу (' + count + ')']
  };

  let playbackText, paused, frameId, previousTime, distance, resumeAt = 0;
  let drag, hovering = false, suppressClick = false;
  let searching = false;
  let localeLanguage = 'en';

  function filterCatalog() {
    const query = search.value.trim();
    searching = Boolean(query);
    if (searching) stopAnimation();
    let count = 0;
    for (const {card, product, name, duplicate} of items) {
      const visible = !searching || (!duplicate && window.ANTHRISE_PRODUCT_MATCHES(product, query, name.textContent));
      card.hidden = !visible;
      if (visible && !duplicate) count++;
    }
    empty.hidden = count > 0;
    const chinese = localeLanguage === 'zh';
    empty.textContent = chinese ? '未找到匹配的产品' : translate('No matching products.');
    searchStatus.textContent = searching ? (chinese ? count + ' 款匹配产品' : count + ' ' + translate('Products')) : '';
    track.scrollLeft = 0;
    for (const button of steps) button.disabled = count === 0;
    playback.disabled = searching;
    if (searching) stopAutoplay();
    else if (!dialog.classList.contains('is-orbiting')) startAutoplay();
  }

  search.addEventListener('input', filterCatalog);
  search.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.isComposing) event.preventDefault();
    if (event.key === 'Escape' && !event.isComposing && search.value) {
      event.preventDefault();
      event.stopPropagation();
      search.value = '';
      filterCatalog();
    }
  });

  function localize() {
    const locale = window.ANTHRISE_I18N?.language || document.documentElement.lang;
    const language = locale.split('-')[0];
    localeLanguage = language;
    const productLanguage = ['en', 'zh', 'es', 'ru'].includes(language) ? language : 'en';
    const [title, play, pause, left, right, searchText] = interfaceCopy[language] || interfaceCopy.en;

    dialog.querySelector('h2').textContent = title;
    close.setAttribute('aria-label', translate('Close'));
    playbackText = {play, pause};
    steps[0].setAttribute('aria-label', left);
    steps[1].setAttribute('aria-label', right);
    updatePlaybackLabel();
    search.placeholder = searchText(catalog.length);
    search.setAttribute('aria-label', search.placeholder);
    for (const {card, name, detail, product} of items) {
      card.href = '/products/' + product.id + '-' + productLanguage + '.html?lang=' + encodeURIComponent(locale);
      name.textContent = language === 'zh' ? product.zh : translate(product.en);
      detail.textContent = translate('View details');
    }
    search.value = '';
    filterCatalog();
  }

  function updatePlaybackLabel() {
    if (playbackText) playback.textContent = paused ? playbackText.play : playbackText.pause;
  }

  function cycleWidth() {
    if (searching) return 0;
    return items[products.length].card.offsetLeft - items[0].card.offsetLeft;
  }

  function stopAutoplay() {
    cancelAnimationFrame(frameId);
    frameId = previousTime = distance = 0;
  }

  function tick(time) {
    const elapsed = previousTime ? Math.min(50, time - previousTime) : 0;
    previousTime = time;
    if (!paused && !drag && !hovering && !track.contains(document.activeElement) && time >= resumeAt) {
      distance += elapsed * .052;
      const step = Math.floor(distance);
      if (step) {
        distance -= step;
        const cycle = cycleWidth();
        const position = track.scrollLeft - step;
        track.scrollLeft = cycle && position < 0 ? position + cycle : position;
      }
    }
    frameId = requestAnimationFrame(tick);
  }

  function startAutoplay() {
    stopAutoplay();
    if (!paused && !searching && dialog.open) frameId = requestAnimationFrame(tick);
  }

  function deferAutoplay() {
    resumeAt = performance.now() + 1600;
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
    if (reducedMotion.matches) { startAutoplay(); return; }

    const bounds = stage.getBoundingClientRect();
    dialog.classList.add('is-orbiting');
    const movement = items.slice(0, featured.length).map(({card}, index) => {
      const rect = card.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2 - rect.left - rect.width / 2;
      const centerY = bounds.top + bounds.height / 2 - rect.top - rect.height / 2;
      function orbitFrame(turn, offset) {
        const angle = -.7 + 2 * Math.PI * (index / featured.length + turn);
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
      if (animations === movement) { stopAnimation(); startAutoplay(); }
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
      paused = reducedMotion.matches;
      resumeAt = 0;
      hovering = false;
      localize();
      dialog.showModal();
      animate();
    });
  }
  close.addEventListener('click', () => dialog.close());
  playback.addEventListener('click', () => {
    paused = !paused;
    updatePlaybackLabel();
    if (paused) stopAutoplay();
    else startAutoplay();
  });
  for (const button of steps) button.addEventListener('click', () => {
    const step = Number(button.dataset.step);
    if (dialog.classList.contains('is-orbiting')) {
      stopAnimation();
      startAutoplay();
    }
    deferAutoplay();
    const cycle = cycleWidth();
    if (step < 0 && track.scrollLeft === 0 && cycle) track.scrollLeft = cycle;
    if (step > 0 && track.scrollLeft >= cycle && cycle) track.scrollLeft -= cycle;
    track.scrollBy({left: step * (track.querySelector('.home-catalog-card:not([hidden])')?.offsetWidth || 0), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  });
  track.addEventListener('wheel', deferAutoplay, {passive: true});
  track.addEventListener('dragstart', event => event.preventDefault());
  track.addEventListener('pointerdown', event => {
    suppressClick = false;
    deferAutoplay();
    if (event.pointerType !== 'mouse' || event.button !== 0 || dialog.classList.contains('is-orbiting')) return;
    drag = {pointer: event.pointerId, x: event.clientX, left: track.scrollLeft, moved: false};
  });
  track.addEventListener('pointermove', event => {
    hovering = event.pointerType === 'mouse' && !!event.target.closest('.home-catalog-card');
    if (!drag || drag.pointer !== event.pointerId) return;
    const delta = event.clientX - drag.x;
    if (!drag.moved && Math.abs(delta) < 6) return;
    if (!drag.moved) track.setPointerCapture(event.pointerId);
    drag.moved = true;
    event.preventDefault();
    const cycle = cycleWidth();
    const position = drag.left - delta;
    if (cycle && position < 0) drag.left += cycle;
    else if (cycle && position > track.scrollWidth - track.clientWidth) drag.left -= cycle;
    track.scrollLeft = drag.left - delta;
  });
  function endDrag(event) {
    if (!drag || drag.pointer !== event.pointerId) return;
    suppressClick = drag.moved;
    drag = null;
    deferAutoplay();
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('pointerleave', event => {
    hovering = false;
    if (drag && !drag.moved) endDrag(event);
  });
  track.addEventListener('click', event => {
    if (!suppressClick || !event.detail) return;
    event.preventDefault();
    suppressClick = false;
  }, true);
  dialog.addEventListener('close', () => {
    stopAnimation();
    stopAutoplay();
    drag = null;
    trigger?.focus({preventScroll: true});
  });
  window.addEventListener('pagehide', () => {
    stopAutoplay();
    if (dialog.open) dialog.close();
  });
  reducedMotion.addEventListener('change', event => {
    if (!event.matches) return;
    paused = true;
    stopAnimation();
    stopAutoplay();
    updatePlaybackLabel();
  });
})();
