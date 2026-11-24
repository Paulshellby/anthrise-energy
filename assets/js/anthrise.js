(() => {
  'use strict';

  // Teardown any prior controller instance cleanly (prevents duplicate listeners/rAF on HMR or re-init)
  if (typeof window.__anthriseRiseyCleanup === 'function') {
    window.__anthriseRiseyCleanup();
  }

  // Defensively ensure only a single foreground companion layer exists sitewide
  const existingLayers = Array.from(document.querySelectorAll('.risey-companion-layer'));
  if (existingLayers.length > 1) {
    existingLayers.slice(1).forEach((dup) => dup.remove());
  }

  const lifecycleAbort = new AbortController();
  const { signal } = lifecycleAbort;
  let mainRafId = 0;
  let revealRafId = 0;
  let heroObserver = null;

  const docEl = document.documentElement;
  docEl.classList.add('js-ready');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
  const saveData = Boolean(
    navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType === '2g')
  );

  const hero = document.getElementById('hero-section');
  const header = document.getElementById('site-header');
  const motionToggle = document.getElementById('motion-toggle');
  const motionLabel = document.getElementById('motion-label');
  const iconPause = document.getElementById('motion-icon-pause');
  const iconPlay = document.getElementById('motion-icon-play');

  let userPaused = prefersReducedMotion.matches || saveData;
  let followDisabled = false;
  let heroOffscreen = false;

  // Preload the independent companion idle, running and dance sprites
  [
    '/assets/images/risey-compact-idle.png',
    '/assets/images/risey-run-r.png',
    '/assets/images/risey-run-l.png',
    '/assets/aistudio/image_8eda316d.png',
    '/assets/images/risey-dance-samba.png',
    '/assets/images/risey-dance-hiphop.png',
    '/assets/images/risey-dance-tango.png',
    '/assets/images/risey-dance-ballet.png',
  ].forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // ---------------------------------------------------------------------------
  // 1. 3D Clean Energy Campus Controller Bridge, Day/Night & Flow Legend
  // ---------------------------------------------------------------------------
  const riseyFollowToggle = document.getElementById('risey-follow-toggle');
  const riseyFollowLabel = document.getElementById('risey-follow-label');
  const assistantFollowToggle = document.getElementById('assistant-follow-toggle');
  const sceneFlowBadge = document.getElementById('scene-flow-badge');
  const sceneFlowToggle = document.getElementById('scene-flow-toggle');
  const sceneFlowLabel = document.getElementById('scene-flow-label');
  const sceneFlowBadgeText = document.getElementById('scene-flow-badge-text');
  const legendPvEl = document.getElementById('legend-pv');
  const legendBatEl = document.getElementById('legend-bat');
  const legendAcEl = document.getElementById('legend-ac');
  const legendGridEl = document.getElementById('legend-grid');
  const legendLightEl = document.getElementById('legend-light');
  const sceneBtnDay = document.getElementById('scene-btn-day');
  const sceneBtnNight = document.getElementById('scene-btn-night');
  const sceneDayLabel = document.getElementById('scene-day-label');
  const sceneNightLabel = document.getElementById('scene-night-label');
  const heroCtaExplore = document.getElementById('hero-cta-explore');
  const heroCtaDiscuss = document.getElementById('hero-cta-discuss');
  const campusFallbackTitle = document.getElementById('campus-fallback-title');
  const campusFallbackDesc = document.getElementById('campus-fallback-desc');

  let currentLang = docEl.lang.startsWith('zh') ? 'zh' : 'en';
  const sceneState = {
    time: window.ANTHRISE_CAMPUS?.getState().time || 'day',
    targetTime: window.ANTHRISE_CAMPUS?.getState().time || 'day',
    flowVisible: true,
    timers: [],
  };

  window.addEventListener('anthrise:scene-time',event=>{sceneState.time=event.detail.time;sceneState.targetTime=event.detail.time;},{signal});
  window.__anthriseGetLang = () => currentLang;

  const SCENE_I18N = {
    en: {
      dayBtn: 'Day',
      nightBtn: 'Night',
      flowShow: 'Show energy flow',
      flowHide: 'Hide energy flow',
      flowBadge: 'Conceptual application diagram · Zones 01–02 grid-interfaced, Zone 03 isolated off-grid',
      legendPv: 'PV DC',
      legendBat: 'Battery DC',
      legendAc: 'AC Supply',
      legendGrid: 'Grid Tie',
      legendLight: 'Autonomous Solar Light',
      productsBtn: 'Products',
      discussBtn: 'Discuss your project',
      pauseMotion: 'Pause motion',
      resumeMotion: 'Resume motion',
      pauseFollow: 'Pause Risey',
      resumeFollow: 'Resume Risey',
      fallbackTitle: 'Explore residential, commercial & off-grid systems',
      fallbackDesc:
        'Real-time 3D rendering is paused or unavailable in this browser context. Browse full specifications and hardware below.',
    },
    zh: {
      dayBtn: '白昼',
      nightBtn: '夜晚',
      flowShow: '查看能源流向',
      flowHide: '隐藏能源流向',
      flowBadge: '概念运行示意 · 区域 01–02 含市电接入，区域 03 完全离网运行',
      legendPv: '光伏直流',
      legendBat: '储能直流',
      legendAc: '交流供电',
      legendGrid: '并网线路',
      legendLight: '独立太阳能灯具',
      productsBtn: '产品系列',
      discussBtn: '咨询您的项目',
      pauseMotion: '暂停动效',
      resumeMotion: '恢复动效',
      pauseFollow: '暂停 Risey',
      resumeFollow: '恢复 Risey',
      fallbackTitle: '探索家庭、工商业与偏远离网能源方案',
      fallbackDesc: '当前浏览器环境暂未启用实时 3D 渲染，您可通过下方入口浏览完整产品资料与咨询项目方案。',
    },
  };

  function syncSceneCopyUI() {
    const dict = SCENE_I18N[currentLang] || SCENE_I18N.en;
    docEl.lang = currentLang === 'zh' ? 'zh-Hans' : (docEl.dataset.siteLocale || 'en');
    if (sceneDayLabel) sceneDayLabel.textContent = dict.dayBtn;
    if (sceneNightLabel) sceneNightLabel.textContent = dict.nightBtn;
    if (sceneFlowLabel) {
      sceneFlowLabel.textContent = sceneState.flowVisible ? dict.flowHide : dict.flowShow;
    }
    if (legendPvEl) legendPvEl.textContent = dict.legendPv;
    if (legendBatEl) legendBatEl.textContent = dict.legendBat;
    if (legendAcEl) legendAcEl.textContent = dict.legendAc;
    if (legendGridEl) legendGridEl.textContent = dict.legendGrid;
    if (legendLightEl) legendLightEl.textContent = dict.legendLight;
    if (sceneFlowBadgeText) sceneFlowBadgeText.textContent = dict.flowBadge;
    if (heroCtaExplore) heroCtaExplore.textContent = dict.productsBtn;
    if (heroCtaDiscuss) heroCtaDiscuss.textContent = dict.discussBtn;
    if (campusFallbackTitle) campusFallbackTitle.textContent = dict.fallbackTitle;
    if (campusFallbackDesc) campusFallbackDesc.textContent = dict.fallbackDesc;

    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setLanguage === 'function') {
      window.ANTHRISE_CAMPUS.setLanguage(currentLang === 'zh' ? 'zh' : 'en');
    }

    // Update all localized product URLs across page
    document.querySelectorAll('a[data-href-en][data-href-zh]').forEach((anchor) => {
      const nextHref = anchor.getAttribute(currentLang === 'zh' ? 'data-href-zh' : 'data-href-en');
      if (nextHref) {
        anchor.setAttribute('href', nextHref);
      }
    });

  }

  function clearSceneTransitionTimers() {
    while (sceneState.timers.length > 0) {
      window.clearTimeout(sceneState.timers.pop());
    }
  }

  function setSceneTime(nextTime, instant = false) {
    const target = nextTime === 'night' ? 'night' : 'day';
    sceneState.targetTime = target;
    clearSceneTransitionTimers();

    if (sceneBtnDay) {
      const isDay = target === 'day';
      sceneBtnDay.classList.toggle('is-active', isDay);
      sceneBtnDay.setAttribute('aria-pressed', String(isDay));
    }
    if (sceneBtnNight) {
      const isNight = target === 'night';
      sceneBtnNight.classList.toggle('is-active', isNight);
      sceneBtnNight.setAttribute('aria-pressed', String(isNight));
    }

    sceneState.time = target;
    if (hero) {
      hero.dataset.sceneTime = target;
    }

    const finishInstant = instant || prefersReducedMotion.matches || userPaused || saveData;
    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setTime === 'function') {
      window.ANTHRISE_CAMPUS.setTime(target, finishInstant);
    }

    syncSceneCopyUI();

    // Re-roll idle dance pool when switching between Day and Night
    if (typeof state !== 'undefined' && state.mode !== 'dancing' && typeof scheduleIdleDance === 'function') {
      scheduleIdleDance();
    }
  }

  if (sceneBtnDay) {
    sceneBtnDay.addEventListener('click', () => setSceneTime('day'), { signal });
  }
  if (sceneBtnNight) {
    sceneBtnNight.addEventListener('click', () => setSceneTime('night'), { signal });
  }

  if (sceneFlowToggle) {
    sceneFlowToggle.addEventListener(
      'click',
      () => {
        sceneState.flowVisible = !sceneState.flowVisible;
        if (sceneFlowBadge) sceneFlowBadge.hidden = !sceneState.flowVisible;
        sceneFlowToggle.setAttribute('aria-pressed', String(sceneState.flowVisible));
        if (hero) hero.dataset.flowVisible = String(sceneState.flowVisible);
        if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setFlowVisible === 'function') {
          window.ANTHRISE_CAMPUS.setFlowVisible(sceneState.flowVisible);
        }
        syncSceneCopyUI();
      },
      { signal }
    );
  }

  function syncMotionState() {
    if (!hero) return;
    const shouldPause = userPaused || heroOffscreen || document.visibilityState === 'hidden';
    hero.classList.toggle('is-paused', shouldPause);

    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setMotionPaused === 'function') {
      window.ANTHRISE_CAMPUS.setMotionPaused(shouldPause);
    }

    if (shouldPause && typeof state !== 'undefined' && state.mode === 'dancing') {
      interruptDance(true);
    }

    const dict = SCENE_I18N[currentLang] || SCENE_I18N.en;
    if (motionToggle && motionLabel && iconPause && iconPlay) {
      motionToggle.setAttribute('aria-pressed', String(userPaused));
      motionLabel.textContent = userPaused ? dict.resumeMotion : dict.pauseMotion;
      motionToggle.setAttribute('aria-label', userPaused ? dict.resumeMotion : dict.pauseMotion);
      iconPause.hidden = userPaused;
      iconPlay.hidden = !userPaused;
    }
  }

  function syncFollowToggleUI() {
    const dict = SCENE_I18N[currentLang] || SCENE_I18N.en;
    if (riseyFollowToggle && riseyFollowLabel) {
      riseyFollowToggle.setAttribute('aria-pressed', String(followDisabled));
      riseyFollowLabel.textContent = followDisabled ? dict.resumeFollow : dict.pauseFollow;
      riseyFollowToggle.setAttribute(
        'aria-label',
        followDisabled ? 'Enable Risey gaze follow' : 'Disable Risey gaze follow'
      );
    }
    if (assistantFollowToggle) {
      assistantFollowToggle.setAttribute('aria-pressed', String(followDisabled));
      assistantFollowToggle.textContent = followDisabled
        ? 'Enable Risey motion'
        : 'Pause Risey motion';
    }
  }

  if (motionToggle) {
    motionToggle.addEventListener(
      'click',
      () => {
        userPaused = !userPaused;
        syncMotionState();
        if (!userPaused) {
          scheduleIdleDance();
        }
      },
      { signal }
    );
  }

  if ('IntersectionObserver' in window && hero) {
    heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          heroOffscreen = !entry.isIntersecting;
          syncMotionState();
        });
      },
      { threshold: 0.02 }
    );
    heroObserver.observe(hero);
  }

  // One-time entrance sequence
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
  if (prefersReducedMotion.matches) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealRafId = window.requestAnimationFrame(() => {
      revealItems.forEach((el, idx) => {
        window.setTimeout(() => {
          el.classList.add('is-visible');
        }, 70 + idx * 120);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 2. Navigation Dropdowns, Mobile Drawer, Hotspots, Risey Contact Menu & Inquiry Socials
  // ---------------------------------------------------------------------------
  const navGroups = Array.from(document.querySelectorAll('[data-nav-group]'));
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const riseyLayer = document.getElementById('risey-companion-layer');
  const inquirySocialList = document.getElementById('inquiry-social-list');
  const inquiryFormEl = document.getElementById('inquiry-form');
  const riseyActorBtn = document.getElementById('risey-actor-btn');
  const riseyAssistantMenu = document.getElementById('risey-assistant-menu');
  const assistantCloseBtn = document.getElementById('assistant-close-btn');
  const assistantCloseX = document.getElementById('assistant-close-x');

  function syncRiseyYield() {
    if (!riseyLayer) return;
    const stageOpen = isProductExplorerOpen();
    const mobileOpen = Boolean(mobileDrawer && !mobileDrawer.hidden);
    riseyLayer.classList.toggle('is-yielded', stageOpen || mobileOpen);
  }

  function closeAllDropdowns(exceptGroup = null) {
    navGroups.forEach((group) => {
      if (group === exceptGroup) return;
      const btn = group.querySelector('.nav-trigger');
      const menu = group.querySelector('.nav-dropdown');
      if (btn && menu) {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
  }

  function closeMobileDrawer() {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.hidden = true;
    syncRiseyYield();
  }

  function closeAllHotspots() {
    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.closeHotspots === 'function') {
      window.ANTHRISE_CAMPUS.closeHotspots();
    }
  }

  function clearSocialTooltips() {
    if (!inquirySocialList) return;
    inquirySocialList.querySelectorAll('.is-tip-open').forEach((el) => el.classList.remove('is-tip-open'));
  }

  function closeAssistantMenu(restoreFocus = false) {
    if (!riseyActorBtn || !riseyAssistantMenu) return;
    const wasOpen = !riseyAssistantMenu.hidden;
    riseyActorBtn.setAttribute('aria-expanded', 'false');
    riseyAssistantMenu.hidden = true;

    if (wasOpen && state.mode === 'menuOpen') {
      state.mode = state.preMenuMode === 'arrivedIdle' ? 'arrivedIdle' : 'dockedIdle';
    }
    if (wasOpen) {
      scheduleIdleDance();
    }

    if (wasOpen && restoreFocus && document.contains(riseyActorBtn)) {
      riseyActorBtn.focus({ preventScroll: true });
    }
  }

  function positionAssistantMenu() {
    if (!riseyActorBtn || !riseyAssistantMenu || riseyAssistantMenu.hidden) return;
    const btnRect = riseyActorBtn.getBoundingClientRect();
    const menuW = riseyAssistantMenu.offsetWidth || 248;
    const menuH = Math.min(riseyAssistantMenu.offsetHeight || 340, window.innerHeight - 96);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const headerH = header ? header.offsetHeight : 70;
    const margin = 12;
    const rightLimit = vw - (vw <= 768 ? 64 : 76);

    // Prefer upper-left beside Risey without covering Risey's face/upper body
    let left = btnRect.left - menuW - 14;
    let top = btnRect.top + btnRect.height * 0.25 - menuH * 0.5;

    // Clamp top cleanly below fixed header & above viewport bottom
    top = clamp(top, headerH + margin, Math.max(headerH + margin, vh - menuH - margin));

    // If insufficient space on left, place to the right if clear of floating rail, else directly above Risey
    if (left < margin) {
      const rightCandidate = btnRect.right + 14;
      if (rightCandidate + menuW <= rightLimit) {
        left = rightCandidate;
      } else {
        left = clamp(btnRect.left - (menuW - btnRect.width) * 0.5, margin, Math.max(margin, rightLimit - menuW));
        const aboveTop = btnRect.top - menuH - 12;
        if (aboveTop >= headerH + margin) {
          top = aboveTop;
        }
      }
    } else {
      left = clamp(left, margin, Math.max(margin, rightLimit - menuW));
    }

    // Extra safety: never let menu rectangle overlap Risey's face box
    const faceBox = {
      left: btnRect.left + btnRect.width * 0.14,
      right: btnRect.right - btnRect.width * 0.14,
      top: btnRect.top + btnRect.height * 0.08,
      bottom: btnRect.top + btnRect.height * 0.62,
    };
    const overlapsFace =
      left < faceBox.right &&
      left + menuW > faceBox.left &&
      top < faceBox.bottom &&
      top + menuH > faceBox.top;

    if (overlapsFace) {
      const aboveTop = btnRect.top - menuH - 12;
      if (aboveTop >= headerH + margin) {
        top = aboveTop;
      } else if (btnRect.left - menuW - 14 >= margin) {
        left = btnRect.left - menuW - 14;
      }
    }

    riseyAssistantMenu.style.left = `${Math.round(left)}px`;
    riseyAssistantMenu.style.top = `${Math.round(top)}px`;
  }

  navGroups.forEach((group) => {
    const btn = group.querySelector('.nav-trigger');
    const menu = group.querySelector('.nav-dropdown');
    if (!btn || !menu) return;

    btn.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        const willOpen = btn.getAttribute('aria-expanded') !== 'true';
        closeAllDropdowns(willOpen ? group : null);
        closeAssistantMenu(false);
        btn.setAttribute('aria-expanded', String(willOpen));
        menu.hidden = !willOpen;
      },
      { signal }
    );

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener(
        'click',
        () => {
          closeAllDropdowns();
          if (isProductExplorerOpen()) {
            closeProductExplorer();
          }
        },
        { signal }
      );
    });
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        const willOpen = mobileToggle.getAttribute('aria-expanded') !== 'true';
        closeAssistantMenu(false);
        mobileToggle.setAttribute('aria-expanded', String(willOpen));
        mobileDrawer.hidden = !willOpen;
        interruptDance(!willOpen);
        syncRiseyYield();
      },
      { signal }
    );

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileDrawer, { signal });
    });
  }

  if (inquirySocialList) {
    inquirySocialList.addEventListener(
      'click',
      (event) => {
        const t = event.target;
        if (!(t instanceof Element)) return;
        const soonEl = t.closest('.is-soon[aria-disabled="true"]');
        if (soonEl) {
          event.preventDefault();
          event.stopPropagation();
          const already = soonEl.classList.contains('is-tip-open');
          clearSocialTooltips();
          if (!already) {
            soonEl.classList.add('is-tip-open');
          }
        }
      },
      { signal }
    );

    inquirySocialList.addEventListener(
      'keydown',
      (event) => {
        const t = event.target;
        if (!(t instanceof Element)) return;
        const soonEl = t.closest('.is-soon[aria-disabled="true"]');
        if (soonEl && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          event.stopPropagation();
          const already = soonEl.classList.contains('is-tip-open');
          clearSocialTooltips();
          if (!already) {
            soonEl.classList.add('is-tip-open');
          }
        }
      },
      { signal }
    );
  }

  if (inquiryFormEl) {
    inquiryFormEl.addEventListener(
      'focusin',
      () => {
        interruptDance(true);
      },
      { signal }
    );
    inquiryFormEl.addEventListener(
      'input',
      () => {
        interruptDance(true);
      },
      { signal }
    );
  }

  if (riseyActorBtn && riseyAssistantMenu) {
    riseyActorBtn.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        interruptDance(true);
        if (state.phase === 'anticipate' || state.phase === 'run' || state.phase === 'decelerate') {
          return;
        }
        const willOpen = riseyActorBtn.getAttribute('aria-expanded') !== 'true';
        closeAllDropdowns();
        closeAllHotspots();
        closeMobileDrawer();
        clearSocialTooltips();

        if (willOpen) {
          state.preMenuMode = state.mode === 'arrivedIdle' ? 'arrivedIdle' : 'dockedIdle';
          state.mode = 'menuOpen';
          riseyActorBtn.setAttribute('aria-expanded', 'true');
          riseyAssistantMenu.hidden = false;
          positionAssistantMenu();
        } else {
          closeAssistantMenu(false);
        }
      },
      { signal }
    );

    riseyAssistantMenu.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
      },
      { signal }
    );

    riseyAssistantMenu.addEventListener(
      'scroll',
      (event) => {
        event.stopPropagation();
      },
      { passive: true, signal }
    );

    riseyAssistantMenu.querySelectorAll('[data-assistant-close]').forEach((el) => {
      el.addEventListener(
        'click',
        () => {
          closeAssistantMenu(false);
        },
        { signal }
      );
    });
  }

  if (assistantCloseBtn) {
    assistantCloseBtn.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        closeAssistantMenu(true);
      },
      { signal }
    );
  }

  if (assistantCloseX) {
    assistantCloseX.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        closeAssistantMenu(true);
      },
      { signal }
    );
  }

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  // Product collections use the current sphere explorer directly.
  const isProductExplorerOpen = () => Boolean(document.querySelector('.product-orbits:not([hidden]), #atlas:not([hidden])'));
  function openProductCollections() { window.__anthriseOpenProductOrbits?.(); }
  function closeProductExplorer() {
    window.ATLAS_PREVIEW?.close();
    document.querySelector('.product-orbits:not([hidden]) .orbit-close')?.click();
  }
  window.__anthriseOpenStageProduct = id => window.__anthriseOpenAtlasProduct?.(id);
  document.querySelectorAll('[data-open-products-stage]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); event.stopPropagation(); openProductCollections();
    }, {signal});
  });

  // Prefill bridge for 3D Campus inquiry actions -> smoothly scroll to #project-inquiry
  window.__anthrisePrefillInquiry = (topic, modelCode, label) => {
    closeAllHotspots();
    const inquirySec = document.getElementById('project-inquiry');
    const topicEl = document.getElementById('inq-topic');
    const msgEl = document.getElementById('inq-message');
    const nameEl = document.getElementById('inq-name');
    if (topicEl instanceof HTMLSelectElement && topic) {
      topicEl.value = topic;
    }
    if (msgEl instanceof HTMLTextAreaElement && label) {
      const prefix =
        currentLang === 'zh'
          ? `[园区场景咨询] ${label}${modelCode ? `（型号：${modelCode}）` : ''}\n`
          : `[Campus Inquiry] ${label}${modelCode ? ` (Model: ${modelCode})` : ''}\n`;
      const existing = msgEl.value.trim();
      if (!existing) {
        msgEl.value = prefix;
      } else if (!existing.includes(label)) {
        msgEl.value = `${prefix}\n${existing}`;
      }
    }
    inquirySec?.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => {
      if (nameEl instanceof HTMLInputElement && !nameEl.value.trim()) {
        nameEl.focus({ preventScroll: true });
      } else if (msgEl instanceof HTMLTextAreaElement) {
        msgEl.focus({ preventScroll: true });
      }
    }, prefersReducedMotion.matches ? 40 : 420);
  };

  // ---------------------------------------------------------------------------
  // 4. Independent Foreground Compact Risey: Bottom-Right Dock + Gaze + Run + Scroll Return
  // ---------------------------------------------------------------------------
  const riseyMover = document.getElementById('risey-mover');
  const riseyRig = document.getElementById('risey-rig');
  const riseyContactShadow = document.getElementById('risey-contact-shadow');
  const riseyHeadGroup = document.getElementById('risey-head-group');
  const riseyIrisL = document.getElementById('risey-iris-l');
  const riseyIrisR = document.getElementById('risey-iris-r');
  const riseyEyelids = [
    document.getElementById('risey-eyelid-l'),
    document.getElementById('risey-eyelid-r'),
  ].filter(Boolean);
  const riseyTail = document.getElementById('risey-tail');
  const riseyBody = document.getElementById('risey-body');
  const riseySpriteViewport = document.getElementById('risey-sprite-viewport');
  const riseySpriteR = document.getElementById('risey-sprite-r');
  const riseySpriteL = document.getElementById('risey-sprite-l');
  const riseyDanceViewport = document.getElementById('risey-dance-viewport');
  const riseyDanceSheets = {
    samba: document.getElementById('risey-dance-samba'),
    hiphop: document.getElementById('risey-dance-hiphop'),
    tango: document.getElementById('risey-dance-tango'),
    ballet: document.getElementById('risey-dance-ballet'),
  };
  const riseyFallback = document.getElementById('risey-fallback');

  const ASPECT_RATIO = 492 / 420;
  const BASE_HERO_WIDTH = 176;

  // Day vs Night dance routine pools (strictly solo character choreography)
  const DANCE_POOLS = {
    day: [
      { id: 'day-samba', sheetKey: 'samba', seq: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1], fps: 8.5, durMs: 5200, swayDeg: 2.2 },
      { id: 'day-hiphop', sheetKey: 'hiphop', seq: [0, 1, 2, 1, 3, 4, 5, 4, 2, 3], fps: 8.0, durMs: 5000, swayDeg: 1.5 },
      { id: 'day-ballet', sheetKey: 'ballet', seq: [0, 1, 2, 3, 4, 5, 3, 2, 1], fps: 7.0, durMs: 5500, swayDeg: 1.8 },
    ],
    night: [
      { id: 'night-tango', sheetKey: 'tango', seq: [0, 1, 2, 3, 4, 5, 4, 3, 2, 0], fps: 6.2, durMs: 6000, swayDeg: 1.2 },
      { id: 'night-ballet', sheetKey: 'ballet', seq: [0, 1, 2, 3, 2, 4, 5, 4], fps: 5.4, durMs: 5800, swayDeg: 1.4 },
      { id: 'night-groove', sheetKey: 'hiphop', seq: [0, 1, 4, 5, 4, 2, 1], fps: 5.2, durMs: 5600, swayDeg: 1.0 },
    ],
  };

  // Track failed image layers so fallback triggers ONLY on failure and hides upon recovery
  const failedRigImgs = new Set();
  const failedSpriteImgs = new Set();
  const failedDanceImgs = new Set();

  function attachAssetHealthWatcher(imgEl, errorSet) {
    if (!imgEl) return;
    if (imgEl.complete && imgEl.naturalWidth === 0) {
      errorSet.add(imgEl);
    }
    imgEl.addEventListener(
      'error',
      () => {
        errorSet.add(imgEl);
        syncActiveVisualMode();
      },
      { signal }
    );
    imgEl.addEventListener(
      'load',
      () => {
        if (imgEl.naturalWidth > 0) {
          errorSet.delete(imgEl);
          syncActiveVisualMode();
        }
      },
      { signal }
    );
  }

  if (riseyRig) {
    riseyRig.querySelectorAll('img').forEach((img) => attachAssetHealthWatcher(img, failedRigImgs));
  }
  attachAssetHealthWatcher(riseySpriteR, failedSpriteImgs);
  attachAssetHealthWatcher(riseySpriteL, failedSpriteImgs);
  Object.values(riseyDanceSheets).forEach((el) => attachAssetHealthWatcher(el, failedDanceImgs));

  function setRiseyRenderMode(requestedMode, dir = 1, danceSheetKey = null) {
    if (!riseyRig || !riseySpriteViewport || !riseyDanceViewport || !riseyFallback) return;

    const useRight = dir >= 0;
    const activeRunSheet = useRight ? riseySpriteR : riseySpriteL;
    const activeDanceSheet = danceSheetKey ? riseyDanceSheets[danceSheetKey] : null;
    let effectiveMode = requestedMode;

    if (effectiveMode === 'rig' && failedRigImgs.size > 0) {
      effectiveMode = 'fallback';
    } else if (
      effectiveMode === 'sprite' &&
      (!activeRunSheet || failedSpriteImgs.has(activeRunSheet) || failedSpriteImgs.size > 0)
    ) {
      effectiveMode = 'fallback';
    } else if (
      effectiveMode === 'dance' &&
      (!activeDanceSheet || failedDanceImgs.has(activeDanceSheet))
    ) {
      effectiveMode = failedRigImgs.size > 0 ? 'fallback' : 'rig';
    }

    // Strict mutual exclusivity: at most ONE visual layer visible at any moment
    riseyRig.hidden = effectiveMode !== 'rig';
    riseySpriteViewport.hidden = effectiveMode !== 'sprite';
    riseyDanceViewport.hidden = effectiveMode !== 'dance';
    riseyFallback.hidden = effectiveMode !== 'fallback';

    if (effectiveMode === 'sprite' && riseySpriteR && riseySpriteL) {
      riseySpriteR.hidden = !useRight;
      riseySpriteL.hidden = useRight;
    }

    Object.entries(riseyDanceSheets).forEach(([key, imgEl]) => {
      if (!imgEl) return;
      imgEl.hidden = effectiveMode !== 'dance' || key !== danceSheetKey;
    });
  }

  function syncActiveVisualMode() {
    if (state.phase === 'anticipate' || state.phase === 'run' || state.phase === 'decelerate') {
      setRiseyRenderMode('sprite', state.runDir);
    } else if (state.mode === 'dancing' && state.activeDance) {
      setRiseyRenderMode('dance', 1, state.activeDance.sheetKey);
    } else {
      setRiseyRenderMode('rig', state.runDir);
    }
  }

  function isGazeAllowed() {
    return (
      !followDisabled &&
      finePointerQuery.matches &&
      !prefersReducedMotion.matches &&
      !userPaused &&
      !isProductExplorerOpen() &&
      state.mode !== 'dancing' &&
      document.visibilityState !== 'hidden'
    );
  }

  function isRunInteractive() { return false; }

  function isIdleBreathAllowed() {
    return !prefersReducedMotion.matches && !userPaused && !isProductExplorerOpen() && document.visibilityState !== 'hidden';
  }

  function isTypingInForm() {
    const active = document.activeElement;
    if (!active) return false;
    if (inquiryFormEl && inquiryFormEl.contains(active)) return true;
    const tag = active.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  }

  function canStartIdleDance() {
    const menuOpen = Boolean(riseyAssistantMenu && !riseyAssistantMenu.hidden);
    const mobileOpen = Boolean(mobileDrawer && !mobileDrawer.hidden);
    return (
      state.mode === 'dockedIdle' &&
      state.phase === 'idle' &&
      !menuOpen &&
      !mobileOpen &&
      !isProductExplorerOpen() &&
      !followDisabled &&
      !userPaused &&
      !prefersReducedMotion.matches &&
      !saveData &&
      !heroOffscreen &&
      document.visibilityState === 'visible' &&
      !isTypingInForm()
    );
  }

  // Controller state machine:
  // mode: 'dockedIdle' | 'dancing' | 'running' | 'arrivedIdle' | 'returning' | 'menuOpen'
  // phase: 'idle' | 'notice' | 'turn' | 'anticipate' | 'run' | 'decelerate' | 'settle'
  const state = {
    x: 0,
    y: 0,
    w: BASE_HERO_WIDTH,
    h: BASE_HERO_WIDTH * ASPECT_RATIO,
    restX: 0,
    restY: 0,
    restW: BASE_HERO_WIDTH,
    restH: BASE_HERO_WIDTH * ASPECT_RATIO,
    // Hierarchical damped gaze channels (pupil fastest, head medium, body softest)
    pupilX: 0,
    pupilY: 0,
    headX: 0,
    headY: 0,
    bodyX: 0,
    bodyY: 0,
    targetGazeX: 0,
    targetGazeY: 0,
    pointerX: 0,
    pointerY: 0,
    pointerActive: false,
    // High-level state & locomotion phase
    mode: 'dockedIdle',
    preMenuMode: 'dockedIdle',
    runPurpose: 'roam', // 'roam' | 'navigate' | 'returnHome'
    confirmedNavAction: null,
    phase: 'idle',
    runToken: 0,
    runStartTime: 0,
    tNoticeTurn: 60,
    tAnticipate: 130,
    tRunEnd: 480,
    tDecelEnd: 560,
    tSettleEnd: 620,
    runFromX: 0,
    runFromY: 0,
    runFromW: BASE_HERO_WIDTH,
    runToX: 0,
    runToY: 0,
    runToW: BASE_HERO_WIDTH,
    runDir: 1,
    runDist: 0,
    activeAction: null,
    activeFailSafeId: 0,
    actionFiredForToken: -1,
    lastPageScrollX: window.scrollX || window.pageXOffset || 0,
    lastPageScrollY: window.scrollY || window.pageYOffset || 0,
    // Idle random Day/Night choreography scheduler
    danceTimerId: 0,
    danceEndTimerId: 0,
    danceStartTime: 0,
    activeDance: null,
    lastDanceId: '',
    // Intermittent blink scheduler
    nextBlinkAt: performance.now() + 2600,
    blinkStart: 0,
    initialized: false,
  };

  function getViewportSafeRect(w, h) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const headerH = header ? header.offsetHeight : 70;
    const rightReserve = document.body.classList.contains('home-showcase') ? 6 : (vw <= 768 ? 64 : 84);
    return {
      minX: 12,
      maxX: Math.max(12, vw - w - rightReserve),
      minY: headerH + 8,
      maxY: Math.max(headerH + 8, vh - h - (vw <= 768 ? 14 : 18)),
    };
  }

  function computeRestAnchor() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw <= 768;

    const showcase = document.body.classList.contains('home-showcase');
    const targetW = showcase ? (isMobile ? 70 : 94) : (isMobile ? clamp(vw * 0.28, 108, 128) : clamp(vw * 0.125, 148, BASE_HERO_WIDTH));
    const targetH = targetW * ASPECT_RATIO;
    const rightGap = showcase ? 6 : (isMobile ? 64 : 84);
    const bottomGap = showcase ? (isMobile ? 170 : 140) : (isMobile ? 14 : 90);

    const bounds = getViewportSafeRect(targetW, targetH);
    state.restW = targetW;
    state.restH = targetH;
    state.restX = clamp(vw - targetW - rightGap, bounds.minX, bounds.maxX);
    state.restY = clamp(vh - targetH - bottomGap, bounds.minY, bounds.maxY);

    if (!state.initialized) {
      state.x = state.restX;
      state.y = state.restY;
      state.w = state.restW;
      state.h = state.restH;
      state.initialized = true;
    } else if (
      state.mode === 'dockedIdle' ||
      state.mode === 'dancing' ||
      (state.mode === 'menuOpen' && state.preMenuMode === 'dockedIdle')
    ) {
      state.x = state.restX;
      state.y = state.restY;
      state.w = state.restW;
      state.h = state.restH;
    } else if (state.mode === 'returning') {
      state.runToX = state.restX;
      state.runToY = state.restY;
      state.runToW = state.restW;
    } else if (state.mode === 'arrivedIdle' || (state.mode === 'menuOpen' && state.preMenuMode === 'arrivedIdle')) {
      const curBounds = getViewportSafeRect(state.w, state.h);
      state.x = clamp(state.x, curBounds.minX, curBounds.maxX);
      state.y = clamp(state.y, curBounds.minY, curBounds.maxY);
    }
  }

  function showSpriteFrame(dir, frameIdx, airborneLiftPx) {
    setRiseyRenderMode('sprite', dir);
    const useRight = dir >= 0;
    const activeSheet = useRight ? riseySpriteR : riseySpriteL;
    if (activeSheet && !riseySpriteViewport.hidden) {
      const idx = clamp(Math.round(frameIdx), 0, 7);
      activeSheet.style.transform = `translate3d(${-(idx * 12.5)}%, 0, 0)`;
    }

    if (riseyContactShadow) {
      const liftRatio = clamp(airborneLiftPx / 24, 0, 1);
      riseyContactShadow.style.transform = `scale(${(1 - liftRatio * 0.24).toFixed(2)}, 1)`;
      riseyContactShadow.style.opacity = (0.95 - liftRatio * 0.42).toFixed(2);
    }
  }

  function showDanceFrame(danceSpec, frameIdx, swayDeg) {
    setRiseyRenderMode('dance', 1, danceSpec.sheetKey);
    const activeSheet = riseyDanceSheets[danceSpec.sheetKey];
    if (activeSheet && riseyDanceViewport && !riseyDanceViewport.hidden) {
      const idx = clamp(Math.round(frameIdx), 0, 5);
      activeSheet.style.transform = `translate3d(${-(idx * (100 / 6)).toFixed(4)}%, 0, 0)`;
      riseyDanceViewport.style.transform = swayDeg ? `rotate(${swayDeg.toFixed(2)}deg)` : 'none';
    }
    if (riseyContactShadow) {
      riseyContactShadow.style.transform = 'scale(0.96, 1)';
      riseyContactShadow.style.opacity = '0.9';
    }
  }

  function showIdleRig() {
    setRiseyRenderMode('rig', state.runDir);
    if (riseyDanceViewport) {
      riseyDanceViewport.style.transform = 'none';
    }
    if (riseyContactShadow) {
      riseyContactShadow.style.transform = 'none';
      riseyContactShadow.style.opacity = '1';
    }
  }

  function interruptDance(reschedule = true) {
    if (state.danceEndTimerId) {
      window.clearTimeout(state.danceEndTimerId);
      state.danceEndTimerId = 0;
    }
    if (state.mode === 'dancing') {
      state.activeDance = null;
      state.mode = 'dockedIdle';
      showIdleRig();
    }
    if (reschedule) {
      scheduleIdleDance();
    } else if (state.danceTimerId) {
      window.clearTimeout(state.danceTimerId);
      state.danceTimerId = 0;
    }
  }

  function scheduleIdleDance(delayOverrideMs = null) {
    if (state.danceTimerId) {
      window.clearTimeout(state.danceTimerId);
      state.danceTimerId = 0;
    }
    if (prefersReducedMotion.matches || saveData || followDisabled || userPaused) {
      return;
    }
    // 18s–32s untouched interval before occasional idle dance routine
    const waitMs =
      typeof delayOverrideMs === 'number' ? delayOverrideMs : Math.round(18500 + Math.random() * 13500);

    state.danceTimerId = window.setTimeout(() => {
      state.danceTimerId = 0;
      if (!canStartIdleDance()) {
        scheduleIdleDance();
        return;
      }

      const poolKey = sceneState.time === 'night' ? 'night' : 'day';
      const pool = (DANCE_POOLS[poolKey] || DANCE_POOLS.day).filter((item) => {
        const sheet = riseyDanceSheets[item.sheetKey];
        return sheet && !failedDanceImgs.has(sheet) && item.id !== state.lastDanceId;
      });
      if (pool.length === 0) {
        scheduleIdleDance();
        return;
      }

      const picked = pool[Math.floor(Math.random() * pool.length)];
      state.lastDanceId = picked.id;
      state.activeDance = picked;
      state.danceStartTime = performance.now();
      state.mode = 'dancing';
      showDanceFrame(picked, picked.seq[0], 0);

      state.danceEndTimerId = window.setTimeout(() => {
        state.danceEndTimerId = 0;
        if (state.mode === 'dancing') {
          state.activeDance = null;
          state.mode = 'dockedIdle';
          showIdleRig();
          scheduleIdleDance();
        }
      }, picked.durMs);
    }, waitMs);
  }

  function renderRisey(nowMs, settleOffsetY) {
    if (!riseyMover) return;

    riseyMover.style.width = `${state.w.toFixed(1)}px`;
    riseyMover.style.transform = `translate3d(${state.x.toFixed(1)}px, ${state.y.toFixed(1)}px, 0)`;

    const scaleFactor = state.w / BASE_HERO_WIDTH;
    const breathOk = isIdleBreathAllowed();
    const gazeOk = isGazeAllowed();

    // During directional running sprite phases or idle dance routine, left-facing idle rig stays strictly hidden
    if (state.phase === 'anticipate' || state.phase === 'run' || state.phase === 'decelerate') {
      return;
    }
    if (state.mode === 'dancing' && state.activeDance) {
      const dElapsed = nowMs - state.danceStartTime;
      const stepIdx = Math.floor((dElapsed / 1000) * state.activeDance.fps) % state.activeDance.seq.length;
      const frame = state.activeDance.seq[stepIdx];
      const sway = Math.sin(dElapsed * 0.0052) * state.activeDance.swayDeg;
      showDanceFrame(state.activeDance, frame, sway);
      return;
    }

    showIdleRig();
    if (riseyRig && riseyRig.hidden) {
      return;
    }

    // Gentle idle breathing & ear/tail micro-motion (stationary relaxed left-facing wait)
    const breathWave = breathOk && state.phase === 'idle' ? Math.sin(nowMs * 0.00145) : 0;
    const breathY = breathWave * 1.6 * scaleFactor + settleOffsetY;
    const breathScaleY = 1 + breathWave * 0.005;
    const turnLean =
      state.phase === 'turn' ? state.runDir * 4.0 : state.phase === 'notice' ? state.runDir * 1.4 : 0;

    if (riseyRig) {
      riseyRig.style.transform = `translate3d(0, ${breathY.toFixed(2)}px, 0) scaleY(${breathScaleY.toFixed(4)}) rotate(${turnLean.toFixed(2)}deg)`;
    }

    if (riseyTail) {
      if (state.phase === 'turn') {
        riseyTail.style.transform = `rotate(${(-state.runDir * 4.5).toFixed(2)}deg)`;
      } else if (breathOk) {
        riseyTail.style.transform = `rotate(${(Math.sin(nowMs * 0.0017) * 1.8).toFixed(2)}deg)`;
      } else {
        riseyTail.style.transform = 'none';
      }
    }

    if (riseyBody) {
      if (gazeOk || state.phase === 'notice' || state.phase === 'turn') {
        riseyBody.style.transform = 'none';
      } else {
        riseyBody.style.transform = 'none';
      }
    }

    if (riseyHeadGroup) {
      if (gazeOk || state.phase === 'notice' || state.phase === 'turn' || state.phase === 'settle') {
        const yaw = state.headX * 7.8;
        const pitch = -state.headY * 5.0;
        const roll = state.headX * 2.2;
        riseyHeadGroup.style.transform = 'none';
      } else {
        riseyHeadGroup.style.transform = 'none';
      }
    }

    if (gazeOk || state.phase === 'notice' || state.phase === 'turn') {
      const ixL = state.pupilX * 1.9 * scaleFactor;
      const iyL = state.pupilY * 1.5 * scaleFactor;
      const ixR = state.pupilX * 2.5 * scaleFactor;
      const iyR = state.pupilY * 1.6 * scaleFactor;
      if (riseyIrisL) riseyIrisL.style.transform = `translate3d(${ixL.toFixed(2)}px, ${iyL.toFixed(2)}px, 0)`;
      if (riseyIrisR) riseyIrisR.style.transform = `translate3d(${ixR.toFixed(2)}px, ${iyR.toFixed(2)}px, 0)`;
    } else {
      if (riseyIrisL) riseyIrisL.style.transform = 'none';
      if (riseyIrisR) riseyIrisR.style.transform = 'none';
    }

    // Intermittent natural bilateral eyelid blink during idle
    if (riseyEyelids.length > 0) {
      if (breathOk && state.phase === 'idle') {
        if (state.blinkStart === 0 && nowMs >= state.nextBlinkAt) {
          state.blinkStart = nowMs;
        }
        if (state.blinkStart > 0) {
          const bElapsed = nowMs - state.blinkStart;
          const bDur = 165;
          if (bElapsed >= bDur) {
            state.blinkStart = 0;
            state.nextBlinkAt = nowMs + 3400 + Math.random() * 2600;
            riseyEyelids.forEach((lid) => {
              lid.style.transform = 'scaleY(0)';
            });
          } else {
            const lidScale = clamp(Math.sin((bElapsed / bDur) * Math.PI), 0, 1).toFixed(3);
            riseyEyelids.forEach((lid) => {
              lid.style.transform = `scaleY(${lidScale})`;
            });
          }
        } else {
          riseyEyelids.forEach((lid) => {
            lid.style.transform = 'scaleY(0)';
          });
        }
      } else {
        state.blinkStart = 0;
        riseyEyelids.forEach((lid) => {
          lid.style.transform = 'scaleY(0)';
        });
      }
    }
  }

  // Pointermove ONLY updates gaze coordinates — never triggers scrolling/homing/chasing
  document.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      state.pointerActive = true;
    },
    { passive: true, signal }
  );

  document.addEventListener(
    'mouseleave',
    () => {
      state.pointerActive = false;
    },
    { signal }
  );

  window.addEventListener(
    'blur',
    () => {
      state.pointerActive = false;
    },
    { signal }
  );

  function cancelRoamOnly() {
    if (state.activeFailSafeId) {
      window.clearTimeout(state.activeFailSafeId);
      state.activeFailSafeId = 0;
    }
    if (state.runPurpose !== 'navigate') {
      state.activeAction = null;
    }
    state.phase = 'idle';
    if (riseyMover) riseyMover.classList.remove('is-running');
    interruptDance(true);
    showIdleRig();
  }

  function cancelActiveRun(executePendingNav = false) {
    if (state.activeFailSafeId) {
      window.clearTimeout(state.activeFailSafeId);
      state.activeFailSafeId = 0;
    }
    const pendingNav = state.confirmedNavAction;
    const pendingAction = state.activeAction;
    state.confirmedNavAction = null;
    state.activeAction = null;
    state.phase = 'idle';
    if (riseyMover) riseyMover.classList.remove('is-running');
    interruptDance(false);
    showIdleRig();
    if (executePendingNav) {
      if (typeof pendingNav === 'function') pendingNav();
      else if (typeof pendingAction === 'function') pendingAction();
    }
  }

  function triggerArrivalAction(token) {
    if (token !== state.runToken || state.actionFiredForToken === token) return;
    state.actionFiredForToken = token;

    const purpose = state.runPurpose;
    const action = state.activeAction;
    const navAction = state.confirmedNavAction;
    state.activeAction = null;
    state.confirmedNavAction = null;
    state.runPurpose = 'roam';

    if (purpose === 'returnHome') {
      state.mode = 'dockedIdle';
      scheduleIdleDance();
    } else if (purpose === 'navigate') {
      const distFromDock = Math.hypot(state.x - state.restX, state.y - state.restY);
      state.mode = distFromDock <= 6 ? 'dockedIdle' : 'arrivedIdle';
      if (state.mode === 'dockedIdle') {
        scheduleIdleDance();
      }
      if (typeof navAction === 'function') {
        navAction();
      } else if (typeof action === 'function') {
        action();
      }
    } else {
      // Blank-area roam stays in arrivedIdle until user clicks another spot or scrolls the page
      state.mode = 'arrivedIdle';
      if (typeof action === 'function') {
        action();
      }
    }
  }

  function startRunTo(destX, destY, destW, onArrive, purpose = 'roam') {
    if (typeof onArrive === 'function') onArrive();
    return; // Stationary companion: no click travel, turning or rolling.

    if (state.activeFailSafeId) {
      window.clearTimeout(state.activeFailSafeId);
      state.activeFailSafeId = 0;
    }

    interruptDance(false);

    state.runToken += 1;
    const myToken = state.runToken;

    state.runPurpose = purpose;
    state.confirmedNavAction = purpose === 'navigate' && typeof onArrive === 'function' ? onArrive : null;
    state.activeAction = typeof onArrive === 'function' ? onArrive : null;
    state.actionFiredForToken = -1;

    const destH = destW * ASPECT_RATIO;
    const bounds = getViewportSafeRect(destW, destH);
    const clampedX = clamp(destX, bounds.minX, bounds.maxX);
    const clampedY = clamp(destY, bounds.minY, bounds.maxY);

    const dx = clampedX - state.x;
    const dy = clampedY - state.y;
    const dist = Math.hypot(dx, dy);

    closeAssistantMenu(false);

    if (!isRunInteractive() || dist < 6) {
      state.x = clampedX;
      state.y = clampedY;
      state.w = destW;
      state.h = destH;
      state.phase = 'idle';
      if (riseyMover) riseyMover.classList.remove('is-running');
      showIdleRig();
      triggerArrivalAction(myToken);
      return;
    }

    // Distance-scaled choreography:
    // Short (<220px): ~320-430ms | Medium/Long (>=220px): ~450-860ms
    const noticeDur = dist < 220 ? 35 : 55;
    const anticDur = dist < 220 ? 50 : 75;
    const runTravelDur =
      dist < 220 ? clamp(160 + dist * 0.62, 160, 270) : clamp(240 + (dist - 220) * 0.42, 240, 560);
    const decelDur = dist < 220 ? 55 : 85;
    const settleDur = 55;

    state.mode = purpose === 'returnHome' ? 'returning' : 'running';
    state.phase = 'notice';
    state.runFromX = state.x;
    state.runFromY = state.y;
    state.runFromW = state.w;
    state.runToX = clampedX;
    state.runToY = clampedY;
    state.runToW = destW;
    state.runDist = dist;
    state.runDir = dx >= -10 ? 1 : -1;
    state.runStartTime = performance.now();

    state.tNoticeTurn = noticeDur;
    state.tAnticipate = noticeDur + anticDur;
    state.tRunEnd = state.tAnticipate + runTravelDur;
    state.tDecelEnd = state.tRunEnd + decelDur;
    state.tSettleEnd = state.tDecelEnd + settleDur;

    if (riseyMover) {
      // Curl only for a blank-area click. Navigation and returning retain the
      // original directional running, anticipation and settling choreography.
      riseyMover.dataset.motion = purpose === 'roam' ? 'rolling' : purpose;
      riseyMover.style.setProperty('--roll-direction', state.runDir);
      riseyMover.classList.add('is-running');
    }

    // Coordinated failsafe <= 1.2s guarantees UI never stalls
    const failsafeMs = clamp(Math.round(state.tDecelEnd + 220), 600, 1180);
    state.activeFailSafeId = window.setTimeout(() => {
      if (state.runToken === myToken && state.phase !== 'idle') {
        state.x = state.runToX;
        state.y = state.runToY;
        state.w = state.runToW;
        state.h = state.runToW * ASPECT_RATIO;
        state.phase = 'idle';
        if (riseyMover) riseyMover.classList.remove('is-running');
        showIdleRig();
        triggerArrivalAction(myToken);
      }
    }, failsafeMs);
  }

  function startScrollReturnToDock() {
    computeRestAnchor();

    // Reduced-motion jumps directly to dock without running sprite frames
    if (prefersReducedMotion.matches || followDisabled) {
      cancelRoamOnly();
      state.x = state.restX;
      state.y = state.restY;
      state.w = state.restW;
      state.h = state.restH;
      state.runPurpose = 'roam';
      state.mode = 'dockedIdle';
      state.phase = 'idle';
      if (riseyMover) riseyMover.classList.remove('is-running');
      showIdleRig();
      scheduleIdleDance();
      return;
    }

    // If a return run is already in progress, update its target without restarting animation
    if (state.mode === 'returning' && state.phase !== 'idle') {
      state.runToX = state.restX;
      state.runToY = state.restY;
      state.runToW = state.restW;
      return;
    }

    const distToDock = Math.hypot(state.x - state.restX, state.y - state.restY);
    if (distToDock <= 6 && state.phase === 'idle') {
      state.x = state.restX;
      state.y = state.restY;
      state.w = state.restW;
      state.h = state.restH;
      state.mode = 'dockedIdle';
      scheduleIdleDance();
      return;
    }

    startRunTo(state.restX, state.restY, state.restW, null, 'returnHome');
  }

  function getAdjacentRunTarget(targetRect) {
    const vw = window.innerWidth;
    const runW = Math.min(state.restW, 176);
    const runH = runW * ASPECT_RATIO;

    const spaceRight = vw - targetRect.right - 84;
    const spaceLeft = targetRect.left;
    let spotX;
    if (spaceRight >= runW + 14) {
      spotX = targetRect.right + 12;
    } else if (spaceLeft >= runW + 14) {
      spotX = targetRect.left - runW - 12;
    } else {
      spotX = targetRect.left > vw * 0.5 ? targetRect.left - runW * 0.85 : targetRect.right - runW * 0.15;
    }

    const spotY = targetRect.top + targetRect.height * 0.5 - runH * 0.56;
    return { x: spotX, y: spotY, w: runW };
  }

  function isInSiteHref(anchor) {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref) return false;
    if (
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('javascript:') ||
      anchor.target === '_blank' ||
      anchor.hasAttribute('download')
    ) {
      return false;
    }
    if (rawHref.startsWith('#') || rawHref.startsWith('/')) {
      return true;
    }
    try {
      const parsed = new URL(rawHref, window.location.href);
      return (
        parsed.origin === window.location.origin ||
        parsed.hostname === 'anthrise-tech.com' ||
        parsed.hostname === 'www.anthrise-tech.com'
      );
    } catch {
      return false;
    }
  }

  function executeAnchorAction(anchor) {
    const rawHref = anchor.getAttribute('href') || '';
    closeAllDropdowns();
    closeMobileDrawer();
    closeAssistantMenu(false);

    if (
      anchor.hasAttribute('data-scroll-top') &&
      (window.location.pathname === '/' || window.location.pathname.endsWith('index.html'))
    ) {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
      return;
    }

    if (rawHref.startsWith('#')) {
      const id = rawHref.slice(1);
      const targetEl = id ? document.getElementById(id) : null;
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
        if (history.replaceState) {
          history.replaceState(null, '', rawHref);
        }
      }
      return;
    }

    window.location.assign(anchor.href);
  }

  // A canvas orbit drag is not a click-to-roll gesture.
  let companionPointerDown = null;
  document.addEventListener('pointerdown', event => {
    companionPointerDown = { x: event.clientX, y: event.clientY };
  }, { passive: true, signal });
  // Click-to-Run Intercept (Desktop fine pointer + follow enabled + stage closed)
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (!target.closest('[data-nav-group]')) closeAllDropdowns();
      if (!target.closest('.hotspot-item')) closeAllHotspots();
      if (!target.closest('.site-header')) closeMobileDrawer();
      if (!target.closest('#inquiry-social-list')) clearSocialTooltips();
      interruptDance(true);

      if (!target.closest('#risey-mover') && riseyAssistantMenu && !riseyAssistantMenu.hidden) {
        closeAssistantMenu(false);
      }

      if (
        event.defaultPrevented ||
        (companionPointerDown && Math.hypot(event.clientX - companionPointerDown.x, event.clientY - companionPointerDown.y) > 8) ||
        event.detail === 0 ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        !isRunInteractive()
      ) {
        return;
      }

      if (
        target.closest(
          'input, textarea, select, option, label, form, #inquiry-form, #inquiry-social-list, .campus-hud-card, .campus-hotspot, .campus-popover, .campus-zone-bar, .campus-zone-btn, #hero-control-bar, .hero-motion-toggles, #risey-actor-btn, #risey-assistant-menu, #motion-toggle, #risey-follow-toggle, #back-to-top, .mobile-menu-toggle, .lang-btn, .floating-controls, .nav-trigger, [data-open-products-stage], .product-orbits, #atlas'
        )
      ) {
        return;
      }

      const anchor = target.closest('a[href]');
      if (anchor) {
        if (!isInSiteHref(anchor)) {
          return;
        }

        event.preventDefault();
        const rect = anchor.getBoundingClientRect();
        const adj = getAdjacentRunTarget(rect);
        startRunTo(
          adj.x,
          adj.y,
          adj.w,
          () => {
            executeAnchorAction(anchor);
          },
          'navigate'
        );
        return;
      }

      if (target.closest('button, [role="button"], .nav-dropdown, .hotspot-popover')) {
        return;
      }
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }

      // Blank page area click: run near cursor and stay there in arrivedIdle (no auto-return)
      const roamW = state.restW;
      const roamH = roamW * ASPECT_RATIO;
      const spotX = event.clientX - roamW * 0.5;
      const spotY = event.clientY - roamH * 0.72;
      startRunTo(spotX, spotY, roamW, null, 'roam');
    },
    { signal }
  );

  // Follow / Character Motion Toggle Handlers
  function handleToggleFollow() {
    followDisabled = !followDisabled;
    syncFollowToggleUI();
    if (followDisabled) {
      cancelActiveRun(true);
      interruptDance(false);
      computeRestAnchor();
      state.x = state.restX;
      state.y = state.restY;
      state.w = state.restW;
      state.h = state.restH;
      state.mode = riseyAssistantMenu && !riseyAssistantMenu.hidden ? 'menuOpen' : 'dockedIdle';
      state.preMenuMode = 'dockedIdle';
      state.targetGazeX = 0;
      state.targetGazeY = 0;
      state.pupilX = state.pupilY = state.headX = state.headY = state.bodyX = state.bodyY = 0;
      renderRisey(performance.now(), 0);
      if (riseyAssistantMenu && !riseyAssistantMenu.hidden) {
        positionAssistantMenu();
      }
    } else {
      scheduleIdleDance();
    }
  }

  if (riseyFollowToggle) {
    riseyFollowToggle.addEventListener('click', handleToggleFollow, { signal });
  }
  if (assistantFollowToggle) {
    assistantFollowToggle.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        handleToggleFollow();
      },
      { signal }
    );
  }

  // Independent foreground companion animation loop
  function tick(nowMs) {
    // Update the companion when the page is visible
    if (document.visibilityState !== 'hidden' && !isProductExplorerOpen()) {
      if (!state.initialized) {
        computeRestAnchor();
      }

      let settleOffsetY = 0;

      if (state.phase !== 'idle') {
        const elapsed = nowMs - state.runStartTime;

        if (elapsed < state.tNoticeTurn) {
          state.phase = elapsed < state.tNoticeTurn * 0.45 ? 'notice' : 'turn';
          state.targetGazeX = state.runDir * 0.95;
          state.targetGazeY = 0.06;
        } else if (elapsed < state.tAnticipate) {
          state.phase = 'anticipate';
          showSpriteFrame(state.runDir, 0, 0);
        } else if (elapsed < state.tRunEnd) {
          state.phase = 'run';
          const runT = clamp(
            (elapsed - state.tAnticipate) / Math.max(state.tRunEnd - state.tAnticipate, 1),
            0,
            1
          );
          const ease =
            runT < 0.5 ? 2 * runT * runT : 1 - Math.pow(-2 * runT + 2, 2) / 2;

          state.x = state.runFromX + (state.runToX - state.runFromX) * ease;
          state.y = state.runFromY + (state.runToY - state.runFromY) * ease;
          state.w = state.runFromW + (state.runToW - state.runFromW) * ease;
          state.h = state.w * ASPECT_RATIO;

          const cycleFrames = [1, 2, 3, 4, 5, 6];
          const stridesNeeded = clamp(Math.round(state.runDist / 135), 1, 4);
          const travelledFrac = ease * stridesNeeded;
          const seqIdx = Math.floor(travelledFrac * cycleFrames.length) % cycleFrames.length;
          const spriteFrame = cycleFrames[seqIdx];
          const airLift = spriteFrame === 2 ? 24 : spriteFrame === 6 ? 22 : spriteFrame === 1 || spriteFrame === 5 ? 6 : 0;

          showSpriteFrame(state.runDir, spriteFrame, airLift);
        } else if (elapsed < state.tDecelEnd) {
          state.phase = 'decelerate';
          state.x = state.runToX;
          state.y = state.runToY;
          state.w = state.runToW;
          state.h = state.w * ASPECT_RATIO;
          showSpriteFrame(state.runDir, 7, 0);
        } else if (elapsed < state.tSettleEnd) {
          state.phase = 'settle';
          const st = clamp(
            (elapsed - state.tDecelEnd) / Math.max(state.tSettleEnd - state.tDecelEnd, 1),
            0,
            1
          );
          settleOffsetY = Math.sin(st * Math.PI) * 2.8;
          state.targetGazeX = state.runDir * 0.25 * (1 - st);
          state.targetGazeY = 0;
        } else {
          state.phase = 'idle';
          if (state.activeFailSafeId) {
            window.clearTimeout(state.activeFailSafeId);
            state.activeFailSafeId = 0;
          }
          if (riseyMover) riseyMover.classList.remove('is-running');
          showIdleRig();
          triggerArrivalAction(state.runToken);
        }
      } else if (isGazeAllowed() && state.pointerActive) {
        const eyeX = state.x + state.w * 0.36;
        const eyeY = state.y + state.h * 0.44;
        state.targetGazeX = clamp((state.pointerX - eyeX) / 380, -1, 1);
        state.targetGazeY = clamp((state.pointerY - eyeY) / 300, -1, 1);
      } else {
        state.targetGazeX = 0;
        state.targetGazeY = 0;
      }

      // Hierarchical damped interpolation (pupil -> head -> body)
      state.pupilX += (state.targetGazeX - state.pupilX) * 0.24;
      state.pupilY += (state.targetGazeY - state.pupilY) * 0.24;
      state.headX += (state.targetGazeX - state.headX) * 0.14;
      state.headY += (state.targetGazeY - state.headY) * 0.14;
      state.bodyX += (state.targetGazeX - state.bodyX) * 0.08;
      state.bodyY += (state.targetGazeY - state.bodyY) * 0.08;

      renderRisey(nowMs, settleOffsetY);
    }

    mainRafId = window.requestAnimationFrame(tick);
  }

  computeRestAnchor();
  syncSceneCopyUI();
  syncFollowToggleUI();
  renderRisey(performance.now(), 0);
  scheduleIdleDance();
  mainRafId = window.requestAnimationFrame(tick);

  // ---------------------------------------------------------------------------
  // 5. Scroll, Resize, Visibility, Escape, Language, Form
  // ---------------------------------------------------------------------------
  const backToTop = document.getElementById('back-to-top');

  function handleWindowScroll() {
    if (isProductExplorerOpen()) return;

    const x = window.scrollX || window.pageXOffset || 0;
    const y = window.scrollY || window.pageYOffset || 0;

    if (header) header.classList.toggle('is-scrolled', y > 24);
    if (backToTop) backToTop.hidden = y < 380;

    // Trigger homing ONLY on real document scroll displacement
    const scrolled =
      Math.abs(y - state.lastPageScrollY) >= 2 || Math.abs(x - state.lastPageScrollX) >= 2;
    state.lastPageScrollX = x;
    state.lastPageScrollY = y;

    if (!scrolled) return;

    // 1. Interrupt idle dance, close Risey menu & clear tooltips on real page scroll
    interruptDance(true);
    if (riseyAssistantMenu && !riseyAssistantMenu.hidden) {
      closeAssistantMenu(false);
    }
    clearSocialTooltips();

    // 2. Cancel unfinished blank-area movement & smoothly return to bottom-right dock
    const distFromDock = Math.hypot(state.x - state.restX, state.y - state.restY);
    const hasNavInProgress = state.mode === 'running' && state.runPurpose === 'navigate';
    if (!hasNavInProgress && (state.mode === 'arrivedIdle' || state.mode === 'returning' || state.mode === 'running' || distFromDock > 6)) {
      startScrollReturnToDock();
    } else {
      computeRestAnchor();
    }
  }

  window.addEventListener('scroll', handleWindowScroll, { passive: true, signal });

  function handleViewportResize() {
    computeRestAnchor();
    if (riseyAssistantMenu && !riseyAssistantMenu.hidden) {
      positionAssistantMenu();
    }
  }

  window.addEventListener('resize', handleViewportResize, { passive: true, signal });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', handleViewportResize, { passive: true, signal });
  }

  document.addEventListener(
    'visibilitychange',
    () => {
      syncMotionState();
      if (document.visibilityState === 'hidden') {
        state.pointerActive = false;
        interruptDance(false);
        if (state.phase !== 'idle') {
          state.x = state.runToX;
          state.y = state.runToY;
          state.w = state.runToW;
          state.phase = 'idle';
          if (riseyMover) riseyMover.classList.remove('is-running');
          showIdleRig();
          triggerArrivalAction(state.runToken);
        }
      } else {
        scheduleIdleDance();
      }
    },
    { signal }
  );

  prefersReducedMotion.addEventListener(
    'change',
    (event) => {
      userPaused = event.matches;
      syncMotionState();
      if (event.matches) {
        interruptDance(false);
        setSceneTime(sceneState.targetTime, true);
        cancelActiveRun(true);
        computeRestAnchor();
        renderRisey(performance.now(), 0);
      } else {
        scheduleIdleDance();
      }
    },
    { signal }
  );

  window.RISEY_STATIONARY={getState:()=>({stationary:true,mode:state.mode,phase:state.phase,x:state.x,y:state.y,pupilX:state.pupilX,pupilY:state.pupilY}),dance:()=>scheduleIdleDance(0)};
  syncMotionState();

  window.__anthriseRiseyCleanup = () => {
    lifecycleAbort.abort();
    if (mainRafId) window.cancelAnimationFrame(mainRafId);
    if (revealRafId) window.cancelAnimationFrame(revealRafId);
    if (state.activeFailSafeId) window.clearTimeout(state.activeFailSafeId);
    if (state.danceTimerId) window.clearTimeout(state.danceTimerId);
    if (state.danceEndTimerId) window.clearTimeout(state.danceEndTimerId);
    clearSceneTransitionTimers();
    if (heroObserver) heroObserver.disconnect();
  };

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape') {
        const assistantWasOpen = Boolean(riseyAssistantMenu && !riseyAssistantMenu.hidden);
        closeAllDropdowns();
        closeAllHotspots();
        closeMobileDrawer();
        clearSocialTooltips();
        closeAssistantMenu(assistantWasOpen);
      }
    },
    { signal }
  );

  if (backToTop) {
    backToTop.addEventListener(
      'click',
      () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
      },
      { signal }
    );
  }

  document.querySelectorAll('[data-scroll-top]').forEach((el) => {
    el.addEventListener(
      'click',
      (event) => {
        if (isProductExplorerOpen()) closeProductExplorer();
        if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
        }
      },
      { signal }
    );
  });

  // Localized Chinese company name toggle (shown ONLY in Chinese mode)
  const footerCompany = document.getElementById('footer-company-name');
  const langButtons = Array.from(document.querySelectorAll('.lang-btn'));

  langButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        const lang = btn.dataset.lang === 'zh' ? 'zh' : 'en';
        currentLang = lang;
        langButtons.forEach((other) => {
          const active = other === btn;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        });
        if (footerCompany) {
          footerCompany.textContent =
            lang === 'zh' ? '深圳市昂旭启元科技有限公司 · Shenzhen' : 'Anthrise Technology · Shenzhen';
        }
        syncSceneCopyUI();
        syncMotionState();
        syncFollowToggleUI();
      },
      { signal }
    );
  });


  // Project inquiry form validation & accessible confirmation
  const inquiryForm = document.getElementById('inquiry-form');
  const formFeedback = document.getElementById('form-feedback');

  if (inquiryForm && formFeedback) {
    inquiryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('inq-name');
        const emailInput = document.getElementById('inq-email');
        const msgInput = document.getElementById('inq-message');

        const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : '';
        const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : '';
        const message = msgInput instanceof HTMLTextAreaElement ? msgInput.value.trim() : '';

        if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
          formFeedback.textContent =
            currentLang === 'zh'
              ? '请完整填写您的姓名、有效邮箱和项目需求说明。'
              : 'Please complete your name, a valid email address, and project notes.';
          return;
        }

        const topic = document.getElementById('inq-topic');
        const focus = topic instanceof HTMLSelectElement ? topic.selectedOptions[0].text : '';
        const body = `Name: ${name}\nEmail: ${email}\nApplication: ${focus}\n\n${message}`;
        window.location.href = `mailto:sales@anthrise-tech.com?subject=${encodeURIComponent('Anthrise project inquiry — ' + focus)}&body=${encodeURIComponent(body)}`;
        formFeedback.textContent = 'Your email app will open with the inquiry. Review it and press Send there. Your entries remain here until you finish.';
      },
      { signal }
    );
  }

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Homepage catalogue anchors open the current product collections.
  document.querySelectorAll('a[href="#products"]').forEach(anchor=>{
    if(anchor.hasAttribute('data-open-products-stage'))return;
    anchor.addEventListener('click',event=>{event.preventDefault();openProductCollections(anchor);},{signal});
  });
  if(location.hash==='#products')requestAnimationFrame(()=>openProductCollections());
  window.addEventListener('hashchange',()=>{if(location.hash==='#products')openProductCollections();},{signal});
})();
