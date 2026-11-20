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

  // Preload compact idle + running + dance + HD Products Stage sprite sheets cleanly
  [
    '/assets/images/risey-compact-idle.png',
    '/assets/images/risey-run-r.png',
    '/assets/images/risey-run-l.png',
    '/assets/aistudio/image_8eda316d.png',
    '/assets/images/risey-dance-samba.png',
    '/assets/images/risey-dance-hiphop.png',
    '/assets/images/risey-dance-tango.png',
    '/assets/images/risey-dance-ballet.png',
    '/assets/images/risey-hd-center-idle.png',
    '/assets/images/risey-hd-walk-r.png',
    '/assets/images/risey-hd-walk-l.png',
    '/assets/images/risey-hd-turn.png',
    '/assets/images/risey-hd-throw.png',
    '/assets/images/risey-hd-surprise.png',
    '/assets/images/risey-hd-guide.png',
    '/assets/images/risey-hd-backpack.png',
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
    time: 'day',
    targetTime: 'day',
    flowVisible: false,
    timers: [],
  };

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

    if (typeof syncStageLocaleUI === 'function') {
      syncStageLocaleUI();
    }
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
        followDisabled ? 'Enable Risey gaze follow and click running' : 'Disable Risey gaze follow and click running'
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
    const stageOpen = Boolean(productsStage && !productsStage.hidden);
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
          if (productsStage && !productsStage.hidden) {
            closeProductsStage(false);
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

  // ---------------------------------------------------------------------------
  // 3. Fullscreen Risey-Guided Energy-Orb & Architectural Showroom Explorer
  // ---------------------------------------------------------------------------
  const CATALOG_CATEGORIES =
    Array.isArray(window.ANTHRISE_SHOWROOM_CATALOG) && window.ANTHRISE_SHOWROOM_CATALOG.length === 3
      ? window.ANTHRISE_SHOWROOM_CATALOG
      : [
          {
            id: 'storage',
            num: '01',
            thumb: '/assets/images/stage-battery.png',
            titleEn: 'ENERGY STORAGE',
            titleZh: '储能系统系列',
            descEn: 'Residential racks, HV stacks & portable power',
            descZh: '户用柜式、高压堆叠与便携储能设备',
            items: [],
          },
          {
            id: 'solar-inverters',
            num: '02',
            thumb: '/assets/images/stage-inverter.png',
            titleEn: 'SOLAR & INVERTERS',
            titleZh: '光伏与混合逆变器',
            descEn: 'Hybrid inverters, PV modules & off-grid power',
            descZh: '混网逆变器、单晶组件与离网发电方案',
            items: [],
          },
          {
            id: 'lighting',
            num: '03',
            thumb: '/assets/images/stage-light.png',
            titleEn: 'SOLAR LIGHTING',
            titleZh: '太阳能照明系列',
            descEn: 'Street luminaires, wall security & garden lights',
            descZh: '道路路灯、庭院柱灯与自主照明灯具',
            items: [],
          },
        ];

  const productsStage = document.getElementById('products-stage');
  const stageViewport = document.getElementById('stage-viewport');
  const stageArena = document.getElementById('stage-arena');
  const navProductsTrigger = document.getElementById('nav-products-trigger');
  const stageCloseBtn = document.getElementById('stage-close-btn');
  const stageCloseLabel = document.getElementById('stage-close-label');
  const stageSkipBtn = document.getElementById('stage-skip-btn');
  const stageReplayBtn = document.getElementById('stage-replay-btn');
  const stageProgressFill = document.getElementById('stage-progress-fill');
  const stageScrollCue = document.getElementById('stage-scroll-cue');
  const stageBrandFloor = document.getElementById('stage-brand-floor');
  const stageHallSub = document.getElementById('stage-hall-sub');
  const stageFlyingBackpack = document.getElementById('stage-flying-backpack');
  const stageBurstFx = document.getElementById('stage-burst-fx');
  const stageBurstParticles = document.getElementById('stage-burst-particles');
  const stageCategoryOrbsWrap = document.getElementById('stage-category-orbs');
  const stageTriLines = document.getElementById('stage-tri-lines');
  const stageTriLegL = document.getElementById('stage-tri-leg-l');
  const stageTriLegR = document.getElementById('stage-tri-leg-r');
  const stageTriCross = document.getElementById('stage-tri-cross');
  const stageCatOrbs = Array.from(document.querySelectorAll('.stage-cat-orb'));
  const stageArcSvg = document.getElementById('stage-arc-svg');
  const stageArcAura = document.getElementById('stage-arc-aura');
  const stageArcMain = document.getElementById('stage-arc-main');
  const stageArcCore = document.getElementById('stage-arc-core');
  const stageArcBranchA = document.getElementById('stage-arc-branch-a');
  const stageArcBranchB = document.getElementById('stage-arc-branch-b');
  const stageFingerGlow = document.getElementById('stage-finger-glow');
  const stageTargetFlash = document.getElementById('stage-target-flash');
  const stageProductsView = document.getElementById('stage-products-view');
  const stageCatBackBtn = document.getElementById('stage-cat-back-btn');
  const stageBackLabel = document.getElementById('stage-back-label');
  const stageDetailNum = document.getElementById('stage-detail-num');
  const stageDetailTitle = document.getElementById('stage-detail-title');
  const stageDetailCount = document.getElementById('stage-detail-count');
  const stageCatSwitcher = document.getElementById('stage-cat-switcher');
  const stageViewToggleBtn = document.getElementById('stage-view-toggle-btn');
  const stageViewToggleLabel = document.getElementById('stage-view-toggle-label');
  const stageRingView = document.getElementById('stage-ring-view');
  const stageRingField = document.getElementById('stage-ring-field');
  const stageTurntableHint = document.getElementById('stage-turntable-hint');
  const stageRotToggleBtn = document.getElementById('stage-rot-toggle-btn');
  const stageRotToggleLabel = document.getElementById('stage-rot-toggle-label');
  const stagePlinthStage = document.getElementById('stage-plinth-stage');
  const stagePlinthDial = document.getElementById('stage-plinth-dial');
  const stageRingItems = document.getElementById('stage-ring-items');
  const stageFocalCounter = document.getElementById('stage-focal-counter');
  const stageFocalTag = document.getElementById('stage-focal-tag');
  const stageFocalModel = document.getElementById('stage-focal-model');
  const stageFocalName = document.getElementById('stage-focal-name');
  const stageFocalOpenBtn = document.getElementById('stage-focal-open-btn');
  const stageFocalOpenLabel = document.getElementById('stage-focal-open-label');
  const stageTurnPrev = document.getElementById('stage-turn-prev');
  const stageTurnNext = document.getElementById('stage-turn-next');
  const stageRingPager = document.getElementById('stage-ring-pager');
  const stagePagePrev = document.getElementById('stage-page-prev');
  const stagePageNext = document.getElementById('stage-page-next');
  const stagePageLabel = document.getElementById('stage-page-label');
  const stageListView = document.getElementById('stage-list-view');
  const stageStepControls = document.getElementById('stage-step-controls');
  const stageStepPrevBtn = document.getElementById('stage-step-prev-btn');
  const stageStepNextBtn = document.getElementById('stage-step-next-btn');
  const stageStepPrevLabel = document.getElementById('stage-step-prev-label');
  const stageStepNextLabel = document.getElementById('stage-step-next-label');
  const stageOpenTriggers = Array.from(document.querySelectorAll('[data-open-products-stage]'));

  // Single-Product Split Detail Elements
  const stageProductDetail = document.getElementById('stage-product-detail');
  const detailParallaxWrap = document.getElementById('detail-parallax-wrap');
  const detailStageImg = document.getElementById('detail-stage-img');
  const detailThumbsRow = document.getElementById('detail-thumbs-row');
  const detailInfoPanel = document.getElementById('detail-info-panel');
  const detailBackCollectionBtn = document.getElementById('detail-back-collection-btn');
  const detailBackCollectionLabel = document.getElementById('detail-back-collection-label');
  const detailPanelIndex = document.getElementById('detail-panel-index');
  const detailCatKicker = document.getElementById('detail-cat-kicker');
  const detailModelCode = document.getElementById('detail-model-code');
  const detailTitle = document.getElementById('detail-title');
  const detailSummary = document.getElementById('detail-summary');
  const detailSpecsHeading = document.getElementById('detail-specs-heading');
  const detailSpecsList = document.getElementById('detail-specs-list');
  const detailHighlightsHeading = document.getElementById('detail-highlights-heading');
  const detailHighlightsList = document.getElementById('detail-highlights-list');
  const detailDiscussBtn = document.getElementById('detail-discuss-btn');
  const detailDiscussLabel = document.getElementById('detail-discuss-label');
  const detailExtLink = document.getElementById('detail-ext-link');
  const detailExtLabel = document.getElementById('detail-ext-label');

  // Single Stage Risey Actor Elements (Strict Mutual Exclusivity Across Sub-Modes)
  const stageRiseyTrack = document.getElementById('stage-risey-track');
  const stageRiseyShadow = document.getElementById('stage-risey-shadow');
  const stageRiseyActor = document.getElementById('stage-risey-actor');
  const stageRiseyModes = {
    center: document.getElementById('stage-risey-center-box'),
    walkR: document.getElementById('stage-risey-walk-r-box'),
    runR: document.getElementById('stage-risey-run-r-box'),
    turn: document.getElementById('stage-risey-turn-box'),
    throw: document.getElementById('stage-risey-throw-box'),
    surprise: document.getElementById('stage-risey-surprise-box'),
    guide: document.getElementById('stage-risey-guide-box'),
  };
  const stageRiseyWalkRSheet = document.getElementById('stage-risey-walk-r-sheet');
  const stageRiseyRunRSheet = document.getElementById('stage-risey-run-r-sheet');
  const stageRiseyTurnSheet = document.getElementById('stage-risey-turn-sheet');
  const stageRiseyThrowSheet = document.getElementById('stage-risey-throw-sheet');
  const stageRiseyGuideSheet = document.getElementById('stage-risey-guide-sheet');
  const stageHdEyelids = [
    document.getElementById('stage-hd-eyelid-l'),
    document.getElementById('stage-hd-eyelid-r'),
  ].filter(Boolean);

  // Calibrated Fingertip Anchor Offsets Inside risey-hd-guide.png Frames [1..3]
  const GUIDE_FINGERTIP_NORM = {
    1: { x: 0.1873, y: 0.4661 }, // Point Up-Left (Top Orb 01)
    2: { x: 0.1873, y: 0.5732 }, // Point Mid-Left (Lower-Left Orb 02)
    3: { x: 0.2190, y: 0.7195 }, // Point Down-Left (Lower-Right Orb 03)
  };

  // Build clean energy burst particles once
  if (stageBurstParticles && stageBurstParticles.childElementCount === 0) {
    const particleCount = 14;
    for (let i = 0; i < particleCount; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'stage-burst-particle';
      const angle = (i / particleCount) * Math.PI * 2;
      const dist = 86 + (i % 3) * 26;
      dot.style.setProperty('--px', `${(Math.cos(angle) * dist).toFixed(1)}px`);
      dot.style.setProperty('--py', `${(Math.sin(angle) * dist).toFixed(1)}px`);
      stageBurstParticles.appendChild(dot);
    }
  }

  const getShelfCapacity = () => window.innerWidth <= 1024 ? 3 : 4;
  const getShelfRanges = (total) => {
    const pages = Math.max(1, Math.ceil(total / getShelfCapacity()));
    return Array.from({length:pages}, (_,i) => ({start:Math.floor(i*total/pages),end:Math.floor((i+1)*total/pages)}));
  };
  const shelfLocation = (index, total) => {
    const ranges = getShelfRanges(total);
    const page = Math.max(0, ranges.findIndex(r => index >= r.start && index < r.end));
    return {page, slot:index-ranges[page].start};
  };
  let shelfWheelAt=0, shelfWheelSum=0, shelfWheelFired=false, shelfFlipUntil=0;
  function flipShelf(direction) {
    if (!stageState.open || stageState.fsm !== 'showroom' || stageState.detail.open || stageState.viewMode !== 'orbs') return;
    const cat=CATALOG_CATEGORIES[stageState.activeCategory]; if(!cat)return;
    const totalPages=getShelfRanges(cat.items.length).length;
    const next=clamp(stageState.pageIndex+direction,0,totalPages-1);
    if(next===stageState.pageIndex)return;
    stageState.pageIndex=next; stageState.turntable.autoResumeAt=performance.now()+4200;
    renderTurntablePage(false);
    stageRingItems.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:prefersReducedMotion.matches?0:320,easing:'ease-out'});
  }
  const AUTO_ROTATE_OMEGA = (Math.PI * 2) / 40; // ~40s calm full linear revolution

  const stageState = {
    open: false,
    // Strict linear FSM:
    // 'entering' -> 'frontFacingIdle' -> 'runningRight' -> 'throwing' -> 'categoriesReady'
    // -> 'pointingAndCharging' -> 'categoryOpening' -> 'showroom' -> 'productDetail'
    fsm: 'entering',
    activeMode: 'center',
    enterStartMs: 0,
    runStartMs: 0,
    throwStartMs: 0,
    chargeStartMs: 0,
    openingStartMs: 0,
    wheelGuardUntil: 0,
    burstPlayed: false,
    activeCategory: null, // null | 0 | 1 | 2
    pendingCategory: null,
    guidePointFrame: 0, // 0 = smile idle, 1 = up-left, 2 = mid-left, 3 = down-left
    guideAimTiltDeg: 0,
    beamHitTriggered: false,
    viewMode: 'orbs', // 'orbs' (turntable) | 'list' (grid)
    pageIndex: 0,
    selectionToken: 0,
    selectionTimerId: 0,
    savedScrollY: 0,
    lastTrigger: null,
    lastTickMs: 0,
    pointerX: window.innerWidth * 0.5,
    pointerY: window.innerHeight * 0.45,
    pointerActive: false,
    gazeX: 0,
    gazeY: 0,
    targetGazeX: 0,
    targetGazeY: 0,
    nextBlinkAt: performance.now() + 2400,
    blinkStart: 0,
    touchStartY: 0,
    touchSwipeHandled: false,
    touchInList: false,
    // Showroom turntable & split detail state
    turntable: {
      theta: 0,
      velocity: 0,
      targetTheta: null,
      selectedSlotIndex: 0,
      pageItems: [],
      slotNodes: [],
      isDragging: false,
      dragPointerId: null,
      dragStartX: 0,
      dragLastX: 0,
      dragLastMs: 0,
      dragMovedPx: 0,
      suppressClickUntil: 0,
      needsLayout: false,
      userPaused: false,
      isHoverPaused: false,
      isFocusPaused: false,
      autoBlend: 0,
      autoResumeAt: 0,
    },
    detail: {
      open: false,
      item: null,
      slotIndex: 0,
      token: 0,
      animTimerId: 0,
      closing: false,
      activeGalleryIdx: 0,
    },
  };

  function setStageFsm(nextFsm) {
    stageState.fsm = nextFsm;
    if (productsStage) {
      productsStage.setAttribute('data-stage-state', nextFsm);
    }
  }

  function setStageRiseyMode(mode) {
    stageState.activeMode = mode;
    Object.entries(stageRiseyModes).forEach(([key, el]) => {
      if (el) {
        el.hidden = key !== mode;
      }
    });
  }

  function setSheetFrame(sheetEl, frameIdx, totalFrames = 4) {
    if (!sheetEl) return;
    const clampedIdx = clamp(Math.round(frameIdx), 0, totalFrames - 1);
    sheetEl.style.transform = `translate3d(-${((clampedIdx * 100) / totalFrames).toFixed(4)}%, 0, 0)`;
  }

  function triggerStageBurst() {
    if (!stageBurstFx) return;
    stageBurstFx.hidden = false;
    stageBurstFx.classList.remove('is-blooming');
    void stageBurstFx.offsetWidth;
    stageBurstFx.classList.add('is-blooming');
  }

  function clearStageBurst() {
    if (!stageBurstFx) return;
    stageBurstFx.classList.remove('is-blooming');
    stageBurstFx.hidden = true;
  }

  function clearPointingBeam() {
    if (stageArcSvg) stageArcSvg.setAttribute('hidden', '');
    [stageArcAura, stageArcMain, stageArcCore, stageArcBranchA, stageArcBranchB].forEach((p) => {
      if (!p) return;
      p.setAttribute('d', '');
      p.style.strokeDasharray = '';
      p.style.strokeDashoffset = '';
      p.style.opacity = '0';
    });
    if (stageFingerGlow) stageFingerGlow.style.opacity = '0';
    if (stageTargetFlash) stageTargetFlash.style.opacity = '0';
    stageCatOrbs.forEach((orb) => orb.classList.remove('is-hit-bloom'));
  }

  function getStageGeometry() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isCompact = vw <= 960;
    const enterStartX = -Math.max(vw * 0.58, 420);
    const rightOffsetX = isCompact
      ? clamp(vw * 0.28, 72, 165)
      : clamp(vw * 0.285, 225, 420);
    const guideY = isCompact ? -clamp(vh * 0.22, 100, 185) : 0;
    const guideScale = isCompact ? 0.58 : 0.85;
    return { vw, vh, isCompact, enterStartX, rightOffsetX, guideY, guideScale };
  }

  function getArenaImpactPoint() {
    if (stageArena) {
      const ar = stageArena.getBoundingClientRect();
      if (ar.width > 0 && ar.height > 0) {
        return { x: ar.left + ar.width * 0.49, y: ar.top + ar.height * 0.46 };
      }
    }
    return { x: window.innerWidth * 0.34, y: window.innerHeight * 0.48 };
  }

  function getRiseyHandOrigin() {
    if (stageRiseyTrack) {
      const tr = stageRiseyTrack.getBoundingClientRect();
      if (tr.width > 0 && tr.height > 0) {
        return { x: tr.left + tr.width * 0.24, y: tr.top + tr.height * 0.56 };
      }
    }
    return { x: window.innerWidth * 0.72, y: window.innerHeight * 0.56 };
  }

  function getRiseyShoulderOrigin() {
    if (stageRiseyTrack) {
      const tr = stageRiseyTrack.getBoundingClientRect();
      if (tr.width > 0 && tr.height > 0) {
        return { x: tr.left + tr.width * 0.46, y: tr.top + tr.height * 0.54 };
      }
    }
    return { x: window.innerWidth * 0.78, y: window.innerHeight * 0.54 };
  }

  function getPointingFingertipInViewport() {
    if (!stageRiseyTrack || !stageViewport) return null;
    const tr = stageRiseyTrack.getBoundingClientRect();
    const vp = stageViewport.getBoundingClientRect();
    if (!tr.width || !vp.width) return null;

    const frame = clamp(stageState.guidePointFrame || 2, 1, 3);
    const norm = GUIDE_FINGERTIP_NORM[frame] || GUIDE_FINGERTIP_NORM[2];
    const rad = (stageState.guideAimTiltDeg * Math.PI) / 180;
    const lx = (norm.x - 0.5) * tr.width;
    const ly = (norm.y - 1.0) * tr.height;
    const rx = lx * Math.cos(rad) - ly * Math.sin(rad);
    const ry = lx * Math.sin(rad) + ly * Math.cos(rad);
    return {
      x: tr.left + tr.width * 0.5 + rx - vp.left,
      y: tr.top + tr.height + ry - vp.top,
    };
  }

  function getOrbSphereCenterInViewport(catIndex) {
    const orb = stageCatOrbs[catIndex];
    if (!orb || !stageViewport) return null;
    const sphere = orb.querySelector('.stage-orb-sphere') || orb;
    const sr = sphere.getBoundingClientRect();
    const vp = stageViewport.getBoundingClientRect();
    if (!sr.width || !vp.width) return null;
    return {
      x: sr.left + sr.width * 0.5 - vp.left,
      y: sr.top + sr.height * 0.5 - vp.top,
      r: sr.width * 0.5,
    };
  }

  function updateTriLinesGeometry() {
    if (!stageTriLines || !stageCategoryOrbsWrap || stageCategoryOrbsWrap.hidden) return;
    const ar = stageCategoryOrbsWrap.getBoundingClientRect();
    if (!ar.width || !ar.height) return;
    const pts = stageCatOrbs.map((orb) => {
      const sp = orb.querySelector('.stage-orb-sphere') || orb;
      const r = sp.getBoundingClientRect();
      return {
        x: r.left + r.width * 0.5 - ar.left,
        y: r.top + r.height * 0.5 - ar.top,
      };
    });
    if (pts.length < 3 || !pts[0].x || !pts[1].x || !pts[2].x) return;

    if (stageTriLegL) {
      stageTriLegL.setAttribute('x1', pts[0].x.toFixed(1));
      stageTriLegL.setAttribute('y1', pts[0].y.toFixed(1));
      stageTriLegL.setAttribute('x2', pts[1].x.toFixed(1));
      stageTriLegL.setAttribute('y2', pts[1].y.toFixed(1));
    }
    if (stageTriLegR) {
      stageTriLegR.setAttribute('x1', pts[0].x.toFixed(1));
      stageTriLegR.setAttribute('y1', pts[0].y.toFixed(1));
      stageTriLegR.setAttribute('x2', pts[2].x.toFixed(1));
      stageTriLegR.setAttribute('y2', pts[2].y.toFixed(1));
    }
    if (stageTriCross) {
      const lx = pts[0].x + (pts[1].x - pts[0].x) * 0.62;
      const ly = pts[0].y + (pts[1].y - pts[0].y) * 0.62;
      const rx = pts[0].x + (pts[2].x - pts[0].x) * 0.62;
      const ry = pts[0].y + (pts[2].y - pts[0].y) * 0.62;
      stageTriCross.setAttribute('x1', lx.toFixed(1));
      stageTriCross.setAttribute('y1', ly.toFixed(1));
      stageTriCross.setAttribute('x2', rx.toFixed(1));
      stageTriCross.setAttribute('y2', ry.toFixed(1));
    }
  }

  function updatePointingBeamGeometry(nowMs) {
    if (!stageArcSvg || stageState.pendingCategory === null) return;
    const start = getPointingFingertipInViewport();
    const end = getOrbSphereCenterInViewport(stageState.pendingCategory);
    if (!start || !end) return;

    const el = Math.max(0, nowMs - stageState.chargeStartMs);
    const drawStart = 40;
    const drawDur = 260;
    const hitAt = drawStart + drawDur;

    stageArcSvg.removeAttribute('hidden');

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dist = Math.hypot(dx, dy) || 1;
    const nx = -dy / dist;
    const ny = dx / dist;
    const archLift = clamp(dist * 0.085, 16, 44);
    const jitter = Math.sin(nowMs * 0.028) * 3.5;
    const cx = (start.x + end.x) * 0.5 + nx * (archLift + jitter);
    const cy = (start.y + end.y) * 0.5 + ny * (archLift + jitter);

    const pathD = `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
    const glowStrength = el < 50 ? 0.35 + (el / 50) * 0.65 : el < hitAt + 180 ? 1 : Math.max(0, 1 - (el - (hitAt + 180)) / 180);

    if (stageFingerGlow) {
      stageFingerGlow.setAttribute('cx', start.x.toFixed(1));
      stageFingerGlow.setAttribute('cy', start.y.toFixed(1));
      stageFingerGlow.setAttribute('r', (7.5 + glowStrength * 4.5 + Math.sin(nowMs * 0.024) * 1.4).toFixed(1));
      stageFingerGlow.style.opacity = clamp(glowStrength * 0.95, 0, 1).toFixed(2);
    }

    const travelT = clamp((el - drawStart) / drawDur, 0, 1);
    const beamFadeOut = el > hitAt + 180 ? Math.max(0, 1 - (el - (hitAt + 180)) / 180) : 1;

    [stageArcAura, stageArcMain, stageArcCore].forEach((pathEl) => {
      if (!pathEl) return;
      pathEl.setAttribute('d', pathD);
      const len = typeof pathEl.getTotalLength === 'function' ? pathEl.getTotalLength() : dist * 1.1;
      pathEl.style.strokeDasharray = `${len.toFixed(1)}`;
      pathEl.style.strokeDashoffset = `${(len * (1 - travelT)).toFixed(1)}`;
      pathEl.style.opacity = travelT > 0 ? beamFadeOut.toFixed(2) : '0';
    });

    // Subtle delicate energy branches along mid-span (no jagged lightning bolts)
    const branchVis = travelT > 0.35 ? Math.min(1, (travelT - 0.35) / 0.3) * beamFadeOut * 0.72 : 0;
    if (stageArcBranchA) {
      const m1x = 0.25 * start.x + 0.5 * cx + 0.25 * end.x;
      const m1y = 0.25 * start.y + 0.5 * cy + 0.25 * end.y;
      const b1x = m1x + (end.x - m1x) * 0.34 + nx * 16;
      const b1y = m1y + (end.y - m1y) * 0.34 + ny * 16;
      stageArcBranchA.setAttribute('d', `M ${m1x.toFixed(1)} ${m1y.toFixed(1)} Q ${(m1x + nx * 10).toFixed(1)} ${(m1y + ny * 10).toFixed(1)} ${b1x.toFixed(1)} ${b1y.toFixed(1)}`);
      stageArcBranchA.style.opacity = branchVis.toFixed(2);
    }
    if (stageArcBranchB) {
      const tB = 0.68;
      const invB = 1 - tB;
      const m2x = invB * invB * start.x + 2 * invB * tB * cx + tB * tB * end.x;
      const m2y = invB * invB * start.y + 2 * invB * tB * cy + tB * tB * end.y;
      const b2x = m2x + (end.x - m2x) * 0.45 - nx * 13;
      const b2y = m2y + (end.y - m2y) * 0.45 - ny * 13;
      stageArcBranchB.setAttribute('d', `M ${m2x.toFixed(1)} ${m2y.toFixed(1)} Q ${(m2x - nx * 8).toFixed(1)} ${(m2y - ny * 8).toFixed(1)} ${b2x.toFixed(1)} ${b2y.toFixed(1)}`);
      stageArcBranchB.style.opacity = (branchVis * 0.85).toFixed(2);
    }

    if (stageTargetFlash) {
      if (el >= hitAt) {
        if (!stageState.beamHitTriggered) {
          stageState.beamHitTriggered = true;
          const targetOrb = stageCatOrbs[stageState.pendingCategory];
          if (targetOrb) targetOrb.classList.add('is-hit-bloom');
        }
        const hitT = clamp((el - hitAt) / 280, 0, 1);
        stageTargetFlash.setAttribute('cx', end.x.toFixed(1));
        stageTargetFlash.setAttribute('cy', end.y.toFixed(1));
        stageTargetFlash.setAttribute('r', (end.r * (0.85 + hitT * 0.55)).toFixed(1));
        stageTargetFlash.style.opacity = ((1 - hitT) * 0.85).toFixed(2);
      } else {
        stageTargetFlash.style.opacity = '0';
      }
    }
  }

  function updateFlyingBackpackArc(tFrac) {
    if (!stageFlyingBackpack) return;
    const t = clamp(tFrac, 0, 1);
    const hand = getRiseyHandOrigin();
    const impact = getArenaImpactPoint();
    const apexX = (hand.x + impact.x) * 0.5;
    const apexY = Math.min(hand.y, impact.y) - clamp(window.innerHeight * 0.16, 70, 140);
    const inv = 1 - t;
    const x = inv * inv * hand.x + 2 * inv * t * apexX + t * t * impact.x;
    const y = inv * inv * hand.y + 2 * inv * t * apexY + t * t * impact.y;
    const rot = t * -32 + 12;
    const sc = 1 - Math.max(0, t - 0.72) * 2.1;
    const op = t > 0.85 ? (1 - t) / 0.15 : 1;

    stageFlyingBackpack.hidden = false;
    stageFlyingBackpack.style.opacity = clamp(op, 0, 1).toFixed(3);
    stageFlyingBackpack.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${clamp(sc, 0.3, 1.05).toFixed(3)})`;
  }

  function revealCategoryOrbs(bloomFromCore = false) {
    if (!stageCategoryOrbsWrap) return;
    stageCategoryOrbsWrap.hidden = false;
    if (stageTriLines) stageTriLines.classList.remove('is-active');
    stageCatOrbs.forEach((orb, i) => {
      orb.classList.remove('is-targeted', 'is-dimmed', 'is-hit-bloom');
      if (bloomFromCore && !prefersReducedMotion.matches) {
        orb.classList.add('is-prebloom');
        orb.classList.remove('is-visible');
        window.setTimeout(() => {
          if (!stageState.open) return;
          orb.classList.remove('is-prebloom');
          orb.classList.add('is-visible');
        }, 40 + i * 70);
      } else {
        orb.classList.remove('is-prebloom');
        orb.classList.add('is-visible');
      }
    });
    window.setTimeout(() => {
      if (!stageState.open || stageCategoryOrbsWrap.hidden) return;
      updateTriLinesGeometry();
      if (stageTriLines) stageTriLines.classList.add('is-active');
    }, bloomFromCore && !prefersReducedMotion.matches ? 260 : 20);
  }

  function hideCategoryOrbs() {
    if (!stageCategoryOrbsWrap) return;
    if (stageTriLines) stageTriLines.classList.remove('is-active');
    stageCatOrbs.forEach((orb) => {
      orb.classList.remove('is-visible', 'is-prebloom', 'is-targeted', 'is-dimmed', 'is-hit-bloom');
    });
    stageCategoryOrbsWrap.hidden = true;
  }

  function computeOrbAimPose(catIndex) {
    const orb = stageCatOrbs[catIndex];
    if (!orb) return { frame: 2, tiltDeg: 0 };
    const sp = orb.querySelector('.stage-orb-sphere') || orb;
    const r = sp.getBoundingClientRect();
    const sh = getRiseyShoulderOrigin();
    if (!r.width || !sh.x) {
      return {
        frame: catIndex === 0 ? 1 : catIndex === 1 ? 2 : 3,
        tiltDeg: catIndex === 0 ? 2.5 : catIndex === 2 ? -2.5 : 0,
      };
    }
    const cx = r.left + r.width * 0.5;
    const cy = r.top + r.height * 0.5;
    const dx = sh.x - cx;
    const dy = sh.y - cy;
    const angleDeg = (Math.atan2(dy, Math.max(dx, 80)) * 180) / Math.PI;
    let frame = 2; // straight mid-left
    if (angleDeg > 11) {
      frame = 1; // up-left
    } else if (angleDeg < -10) {
      frame = 3; // down-left
    }
    const tiltDeg = clamp((angleDeg - (frame === 1 ? 24 : frame === 3 ? -22 : 0)) * 0.14, -4.0, 4.0);
    return { frame, tiltDeg };
  }

  function normalizeAngle(rad) {
    return Math.atan2(Math.sin(rad), Math.cos(rad));
  }

  function updateFocalReadout() {
    const tt = stageState.turntable;
    const item = tt.pageItems[tt.selectedSlotIndex];
    if (!item) return;
    const isZh = currentLang === 'zh';
    const numStr = String(tt.selectedSlotIndex + 1).padStart(2, '0');
    const totStr = String(tt.pageItems.length).padStart(2, '0');
    if (stageFocalCounter) stageFocalCounter.textContent = `${numStr} / ${totStr}`;
    if (stageFocalTag) stageFocalTag.textContent = isZh ? item.tagZh : item.tagEn;
    if (stageFocalModel) stageFocalModel.textContent = item.modelCode || item.id.toUpperCase();
    if (stageFocalName) stageFocalName.textContent = isZh ? item.nameZh : item.nameEn;
  }

  function syncRotationToggleUI() {
    if (!stageRotToggleBtn || !stageRotToggleLabel) return;
    const paused = stageState.turntable.userPaused || prefersReducedMotion.matches;
    const isZh = currentLang === 'zh';
    stageRotToggleBtn.setAttribute('aria-pressed', String(paused));
    stageRotToggleBtn.disabled = prefersReducedMotion.matches;
    stageRotToggleLabel.textContent = paused
      ? (isZh ? '恢复旋转' : 'Resume rotation')
      : (isZh ? '暂停旋转' : 'Pause rotation');
  }

  function updateTurntableTransforms() {
    const tt = stageState.turntable;
    if (!stageRingField || !tt.slotNodes.length) return;

    const fieldRect = stageRingField.getBoundingClientRect();
    const plinthRect = stagePlinthStage ? stagePlinthStage.getBoundingClientRect() : null;
    const fw = Math.max(fieldRect.width || 720, 300);
    const fh = Math.max(fieldRect.height || 380, 260);

    let cx = fw * 0.5;
    let cy = fh * 0.56;
    let rx = Math.min(fw * 0.38, 390);
    let ry = Math.min(fh * 0.27, 108);

    if (plinthRect && plinthRect.width > 80 && fieldRect.width > 80) {
      cx = plinthRect.left - fieldRect.left + plinthRect.width * 0.5;
      cy = plinthRect.top - fieldRect.top + plinthRect.height * 0.45;
      rx = plinthRect.width * 0.435;
      ry = plinthRect.height * 0.41;
    }

    const baseH = window.innerWidth <= 640 ? 112 : window.innerWidth <= 1024 ? 142 : 186;
    const baseW = window.innerWidth <= 640 ? 98 : window.innerWidth <= 1024 ? 142 : 180;

    if (stagePlinthDial) {
      stagePlinthDial.style.setProperty('--plinth-deg', `${((tt.theta * 180) / Math.PI).toFixed(2)}deg`);
    }

    const count = tt.slotNodes.length;
    let bestFrontIdx = 0;
    let bestFrontCos = -2;

    tt.slotNodes.forEach((node, idx) => {
      const slotAngle = tt.theta + (idx / count) * Math.PI * 2;
      const sinA = Math.sin(slotAngle);
      const cosA = Math.cos(slotAngle); // +1 dead front focal, -1 dead back
      const depthT = (cosA + 1) * 0.5;

      if (cosA > bestFrontCos) {
        bestFrontCos = cosA;
        bestFrontIdx = idx;
      }

      // Two products share the front edge on narrow screens to keep both silhouettes visible.
      const pairedMobile = window.innerWidth <= 640 && count === 2;
      const x = pairedMobile ? cx + (idx === 0 ? -1 : 1) * rx * 0.62 : cx + sinA * rx;
      const y = pairedMobile ? cy + ry * 0.55 + cosA * 9 : cy + cosA * ry;
      const sc = 0.9 + depthT * 0.08;
      const op = 1;
      const zIdx = 12 + Math.round(depthT * 120);

      node.style.setProperty('--item-box-w', `${baseW.toFixed(0)}px`);
      node.style.setProperty('--item-box-h', `${baseH.toFixed(0)}px`);
      node.style.transform = `translate3d(${(x - baseW * 0.5).toFixed(1)}px, ${(y - baseH + 10).toFixed(1)}px, 0) scale(${sc.toFixed(3)})`;
      node.style.transformOrigin = '50% 82%';
      node.style.zIndex = String(zIdx);
      node.style.opacity = op.toFixed(3);
      node.classList.toggle('is-back', depthT < 0.34);
    });

    if (tt.selectedSlotIndex !== bestFrontIdx) {
      tt.selectedSlotIndex = bestFrontIdx;
    }

    tt.slotNodes.forEach((node, idx) => {
      const isFocal = idx === tt.selectedSlotIndex;
      node.classList.toggle('is-focal', isFocal);
      node.setAttribute('aria-current', isFocal ? 'true' : 'false');
    });

    updateFocalReadout();
    tt.needsLayout = false;
  }

  function rotateToSlotIndex(idx, animate = true) {
    const tt = stageState.turntable;
    const count = tt.pageItems.length;
    if (!count) return;
    const wrapped = ((idx % count) + count) % count;
    const stepAngle = (Math.PI * 2) / count;
    const desired = -(wrapped * stepAngle);
    const delta = normalizeAngle(desired - tt.theta);
    tt.velocity = 0;

    if (!animate || prefersReducedMotion.matches) {
      tt.theta = tt.theta + delta;
      tt.targetTheta = null;
      tt.selectedSlotIndex = wrapped;
      updateTurntableTransforms();
    } else {
      tt.targetTheta = tt.theta + delta;
      tt.autoResumeAt = performance.now() + 4200;
      tt.needsLayout = true;
    }
  }

  function stepTurntableByDelta(dir) {
    const tt = stageState.turntable;
    if (!tt.pageItems.length || stageState.detail.open) return;
    rotateToSlotIndex(tt.selectedSlotIndex + dir, true);
  }

  function isAutoRotatePermitted(nowMs) {
    const tt = stageState.turntable;
    if (
      !stageState.open ||
      stageState.fsm !== 'showroom' ||
      stageState.viewMode !== 'orbs' ||
      stageState.detail.open ||
      prefersReducedMotion.matches ||
      document.visibilityState === 'hidden' ||
      tt.userPaused ||
      tt.isDragging ||
      tt.isHoverPaused ||
      tt.isFocusPaused ||
      tt.targetTheta !== null ||
      Math.abs(tt.velocity) > 0.015 ||
      nowMs < tt.autoResumeAt
    ) {
      return false;
    }
    return true;
  }

  function stepTurntablePhysics(dtSec, nowMs) {
    const tt = stageState.turntable;
    if (!stageState.open || stageState.fsm !== 'showroom' || stageState.viewMode !== 'orbs' || stageState.detail.open) {
      return;
    }
    const count = tt.pageItems.length;
    if (!count) return;

    let changed = tt.needsLayout;

    if (!tt.isDragging) {
      if (tt.targetTheta !== null) {
        tt.autoBlend = 0;
        const diff = tt.targetTheta - tt.theta;
        if (Math.abs(diff) < 0.0012) {
          tt.theta = tt.targetTheta;
          tt.targetTheta = null;
          tt.velocity = 0;
        } else {
          const factor = 1 - Math.exp(-11.5 * dtSec);
          tt.theta += diff * factor;
        }
        changed = true;
      } else if (Math.abs(tt.velocity) > 0.015) {
        tt.autoBlend = 0;
        tt.theta += tt.velocity * dtSec;
        const decay = Math.exp(-5.4 * dtSec);
        tt.velocity *= decay;
        changed = true;
      } else if (tt.velocity !== 0) {
        tt.velocity = 0;
        const stepAngle = (Math.PI * 2) / count;
        const nearest = Math.round(-tt.theta / stepAngle);
        tt.targetTheta = -nearest * stepAngle;
        tt.autoResumeAt = nowMs + 3600;
        changed = true;
      } else if (isAutoRotatePermitted(nowMs)) {
        tt.autoBlend = Math.min(1, tt.autoBlend + dtSec / 0.55);
        tt.theta += AUTO_ROTATE_OMEGA * tt.autoBlend * dtSec;
        changed = true;
      } else if (!tt.userPaused && tt.autoBlend > 0.001) {
        tt.autoBlend = Math.max(0, tt.autoBlend - dtSec / 0.16);
        tt.theta += AUTO_ROTATE_OMEGA * tt.autoBlend * dtSec;
        changed = true;
      } else {
        tt.autoBlend = 0;
      }
    } else {
      tt.autoBlend = 0;
    }

    if (changed) {
      updateTurntableTransforms();
    }
  }

  function clearTurntableSlotsHiddenForDetail() {
    stageState.turntable.slotNodes.forEach((n) => n.classList.remove('is-hidden-for-detail'));
  }

  function renderTurntablePage(preserveTheta = false) {
    if (!stageRingItems || !stageRingField || stageState.activeCategory === null) return;
    const cat = CATALOG_CATEGORIES[stageState.activeCategory];
    if (!cat) return;

    const isZh = currentLang === 'zh';
    const items = cat.items;
    const total = items.length;
    const shelfRanges = getShelfRanges(total);
    const totalPages = shelfRanges.length;
    stageState.pageIndex = clamp(stageState.pageIndex, 0, totalPages - 1);

    const {start,end} = shelfRanges[stageState.pageIndex];
    const pageItems = items.slice(start,end);

    if (stageRingPager) {
      stageRingPager.hidden = totalPages <= 1;
    }
    if (stagePagePrev) stagePagePrev.disabled = stageState.pageIndex <= 0;
    if (stagePageNext) stagePageNext.disabled = stageState.pageIndex >= totalPages - 1;
    if (stagePageLabel) {
      stagePageLabel.textContent = isZh
        ? `第 ${stageState.pageIndex + 1} / ${totalPages} 页 · 共 ${total} 款`
        : `Shelf ${stageState.pageIndex + 1} / ${totalPages} · ${total} items`;
    }

    const tt = stageState.turntable;
    tt.pageItems = pageItems;
    tt.slotNodes = [];
    tt.isHoverPaused = false;
    tt.isFocusPaused = false;
    if (!preserveTheta) {
      tt.theta = 0;
      tt.velocity = 0;
      tt.targetTheta = null;
      tt.selectedSlotIndex = 0;
      tt.autoBlend = 0;
      tt.autoResumeAt = performance.now() + 900;
    }

    stageRingItems.innerHTML = '';

    pageItems.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'stage-turntable-item';
      btn.setAttribute('role', 'listitem');
      const fullName = isZh ? item.nameZh : item.nameEn;
      btn.title = fullName;
      btn.setAttribute('aria-label', `${fullName} · ${item.modelCode || item.id}`);

      const fig = document.createElement('span');
      fig.className = 'stage-turntable-figure';

      const img = document.createElement('img');
      img.src = item.img;
      img.alt = fullName;
      img.loading = 'eager';
      img.decoding = 'async';
      img.draggable = false;
      fig.appendChild(img);

      const shadow = document.createElement('span');
      shadow.className = 'stage-turntable-shadow';
      shadow.setAttribute('aria-hidden', 'true');

      const chip = document.createElement('span');
      chip.className = 'stage-turntable-chip';
      chip.textContent = fullName;

      btn.appendChild(fig);
      btn.appendChild(shadow);
      btn.appendChild(chip);

      btn.addEventListener('pointerenter', () => {
        tt.isHoverPaused = true;
      });
      btn.addEventListener('pointerleave', () => {
        tt.isHoverPaused = false;
        tt.autoResumeAt = performance.now() + 3600;
      });
      btn.addEventListener('focusin', () => {
        tt.isFocusPaused = true;
      });
      btn.addEventListener('focusout', () => {
        tt.isFocusPaused = false;
        tt.autoResumeAt = performance.now() + 3600;
      });

      btn.addEventListener('click', () => {
        if (performance.now() < tt.suppressClickUntil) return;
        if (tt.selectedSlotIndex !== idx) {
          rotateToSlotIndex(idx, true);
        } else {
          openProductDetail(item, idx, img);
        }
      });

      stageRingItems.appendChild(btn);
      tt.slotNodes.push(btn);
    });

    tt.needsLayout = true;
    updateTurntableTransforms();
    syncRotationToggleUI();
  }

  function renderCategoryListAndSwitcher(catIndex) {
    const cat = CATALOG_CATEGORIES[catIndex];
    if (!cat) return;
    const isZh = currentLang === 'zh';

    if (stageDetailNum) stageDetailNum.textContent = cat.num;
    if (stageDetailTitle) stageDetailTitle.textContent = isZh ? cat.titleZh : cat.titleEn;
    if (stageDetailCount) {
      stageDetailCount.textContent = isZh ? `${cat.items.length} 款实体产品` : `${cat.items.length} products`;
    }

    if (stageCatSwitcher) {
      stageCatSwitcher.innerHTML = '';
      CATALOG_CATEGORIES.forEach((other, idx) => {
        if (idx === catIndex) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stage-switcher-btn';
        btn.setAttribute('data-switch-cat', String(idx));

        const dot = document.createElement('span');
        dot.className = 'stage-switcher-dot';
        const dImg = document.createElement('img');
        dImg.src = other.thumb;
        dImg.alt = '';
        dot.appendChild(dImg);

        const txt = document.createElement('span');
        txt.textContent = `${other.num} ${isZh ? other.titleZh : other.titleEn}`;

        btn.appendChild(dot);
        btn.appendChild(txt);
        btn.addEventListener('click', () => handleSelectCategory(idx, true));
        stageCatSwitcher.appendChild(btn);
      });
    }

    if (stageListView) {
      stageListView.innerHTML = '';
      cat.items.forEach((item, globalIdx) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'stage-list-card';
        card.setAttribute('role', 'listitem');

        const thumb = document.createElement('span');
        thumb.className = 'stage-list-thumb';
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = isZh ? item.nameZh : item.nameEn;
        img.loading = 'lazy';
        img.decoding = 'async';
        thumb.appendChild(img);

        const meta = document.createElement('span');
        const tag = document.createElement('span');
        tag.className = 'stage-list-tag';
        tag.textContent = `${isZh ? item.tagZh : item.tagEn} · ${item.modelCode || item.id}`;

        const name = document.createElement('h3');
        name.className = 'stage-list-name';
        name.textContent = isZh ? item.nameZh : item.nameEn;

        const note = document.createElement('p');
        note.className = 'stage-list-note';
        note.textContent = isZh ? item.summaryZh : item.summaryEn;

        meta.appendChild(tag);
        meta.appendChild(name);
        meta.appendChild(note);
        card.appendChild(thumb);
        card.appendChild(meta);

        card.addEventListener('click', () => {
          const {page:targetPage,slot:targetSlot} = shelfLocation(globalIdx,cat.items.length);
          if (stageState.pageIndex !== targetPage) {
            stageState.pageIndex = targetPage;
            renderTurntablePage(false);
          }
          rotateToSlotIndex(targetSlot, false);
          openProductDetail(item, targetSlot, img);
        });

        stageListView.appendChild(card);
      });
    }

    renderTurntablePage(false);
  }

  function syncViewModeUI() {
    const isGrid = stageState.viewMode === 'list';
    const isZh = currentLang === 'zh';
    if (productsStage) productsStage.setAttribute('data-view-mode', stageState.viewMode);
    if (stageRingView) stageRingView.hidden = isGrid;
    if (stageListView) stageListView.hidden = !isGrid;
    if (stageViewToggleBtn) stageViewToggleBtn.setAttribute('aria-pressed', String(isGrid));
    if (stageViewToggleLabel) {
      stageViewToggleLabel.textContent = isGrid
        ? (isZh ? '展台视图' : 'Turntable')
        : (isZh ? '网格列表' : 'Grid view');
    }
    if (!isGrid && stageState.activeCategory !== null) {
      stageState.turntable.autoResumeAt = performance.now() + 900;
      updateTurntableTransforms();
    }
    syncRotationToggleUI();
  }

  function populateDetailPanel(item, slotIdx) {
    if (!item || stageState.activeCategory === null) return;
    const cat = CATALOG_CATEGORIES[stageState.activeCategory];
    const isZh = currentLang === 'zh';
    const totalOnPage = stageState.turntable.pageItems.length || (cat ? cat.items.length : 1);

    stageState.detail.activeGalleryIdx = 0;

    if (detailStageImg) {
      detailStageImg.src = item.img;
      detailStageImg.alt = isZh ? item.nameZh : item.nameEn;
    }
    if (detailParallaxWrap) {
      detailParallaxWrap.style.transform = 'translate3d(0, 0, 0)';
    }

    if (detailPanelIndex) {
      detailPanelIndex.textContent = `${String(slotIdx + 1).padStart(2, '0')} / ${String(totalOnPage).padStart(2, '0')}`;
    }
    if (detailCatKicker && cat) {
      detailCatKicker.textContent = `${cat.num} · ${isZh ? cat.titleZh : cat.titleEn}`;
    }
    if (detailModelCode) detailModelCode.textContent = item.modelCode || item.id.toUpperCase();
    if (detailTitle) detailTitle.textContent = isZh ? item.nameZh : item.nameEn;
    if (detailSummary) detailSummary.textContent = isZh ? item.summaryZh : item.summaryEn;
    if (detailSpecsHeading) detailSpecsHeading.textContent = isZh ? '核心规格参数' : 'Key specifications';
    if (detailHighlightsHeading) detailHighlightsHeading.textContent = isZh ? '系统特性与配置要点' : 'System highlights';
    if (detailBackCollectionLabel) detailBackCollectionLabel.textContent = isZh ? '返回产品列表' : 'Back to collection';
    if (detailDiscussLabel) detailDiscussLabel.textContent = isZh ? '咨询此产品' : 'Discuss this product';
    if (detailExtLabel) detailExtLabel.textContent = isZh ? '打开完整产品页' : 'Open full product page';
    if (detailExtLink) detailExtLink.href = isZh ? item.hrefZh : item.hrefEn;

    if (detailSpecsList) {
      detailSpecsList.innerHTML = '';
      const specs = Array.isArray(item.specs) && item.specs.length ? item.specs : [];
      if (specs.length === 0) {
        const row = document.createElement('div');
        row.className = 'stage-detail-spec-row';
        const dt = document.createElement('dt');
        dt.textContent = isZh ? '参数说明' : 'Specifications';
        const dd = document.createElement('dd');
        dd.textContent = isZh ? '参数待官方正式确认' : 'Subject to official confirmation';
        row.appendChild(dt);
        row.appendChild(dd);
        detailSpecsList.appendChild(row);
      } else {
        specs.forEach((sp) => {
          const row = document.createElement('div');
          row.className = 'stage-detail-spec-row';
          const dt = document.createElement('dt');
          dt.textContent = isZh ? sp.labelZh : sp.labelEn;
          const dd = document.createElement('dd');
          dd.textContent = isZh ? sp.valZh : sp.valEn;
          row.appendChild(dt);
          row.appendChild(dd);
          detailSpecsList.appendChild(row);
        });
      }
    }

    if (detailHighlightsList) {
      detailHighlightsList.innerHTML = '';
      const hl = isZh ? item.highlightsZh : item.highlightsEn;
      const list = Array.isArray(hl) && hl.length ? hl : [isZh ? '更多选型细节可进一步沟通确认' : 'Project configuration confirmed on consultation'];
      list.forEach((txt) => {
        const li = document.createElement('li');
        li.textContent = txt;
        detailHighlightsList.appendChild(li);
      });
    }

    if (detailThumbsRow) {
      detailThumbsRow.innerHTML = '';
      const gallery = Array.isArray(item.gallery) ? item.gallery : [];
      if (gallery.length > 1) {
        detailThumbsRow.hidden = false;
        gallery.forEach((g, idx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `stage-detail-thumb${idx === 0 ? ' is-active' : ''}`;

          const tImg = document.createElement('img');
          tImg.src = g.src;
          tImg.alt = isZh ? g.labelZh : g.labelEn;
          tImg.loading = 'lazy';
          tImg.decoding = 'async';

          const lbl = document.createElement('span');
          lbl.textContent = isZh ? g.labelZh : g.labelEn;

          btn.appendChild(tImg);
          btn.appendChild(lbl);
          btn.addEventListener('click', () => {
            if (!detailStageImg) return;
            stageState.detail.activeGalleryIdx = idx;
            detailStageImg.src = g.src;
            detailThumbsRow.querySelectorAll('.stage-detail-thumb').forEach((other, j) => {
              other.classList.toggle('is-active', j === idx);
            });
          });
          detailThumbsRow.appendChild(btn);
        });
      } else {
        detailThumbsRow.hidden = true;
      }
    }
  }

  function openProductDetail(item, slotIdx, sourceImgEl = null) {
    if (!stageProductDetail || !detailStageImg || !item) return;

    stageState.detail.token += 1;
    const token = stageState.detail.token;
    if (stageState.detail.animTimerId) {
      window.clearTimeout(stageState.detail.animTimerId);
      stageState.detail.animTimerId = 0;
    }

    stageState.detail.open = true;
    stageState.detail.closing = false;
    stageState.detail.item = item;
    stageState.detail.slotIndex = slotIdx;
    stageState.turntable.velocity = 0;
    stageState.turntable.targetTheta = null;
    stageState.turntable.autoBlend = 0;

    const slotNode = stageState.turntable.slotNodes[slotIdx];
    const resolvedSourceImg = sourceImgEl || (slotNode ? slotNode.querySelector('img') : null);
    const firstRect = resolvedSourceImg ? resolvedSourceImg.getBoundingClientRect() : null;

    populateDetailPanel(item, slotIdx);

    if (detailInfoPanel) detailInfoPanel.scrollTop = 0;
    stageProductDetail.hidden = false;
    stageProductDetail.classList.add('is-entering');
    if (productsStage) productsStage.setAttribute('data-detail-open', 'true');

    clearTurntableSlotsHiddenForDetail();
    if (slotNode) slotNode.classList.add('is-hidden-for-detail');

    const lastRect = detailStageImg.getBoundingClientRect();
    const canFlip =
      !prefersReducedMotion.matches &&
      firstRect &&
      firstRect.width > 16 &&
      firstRect.height > 16 &&
      lastRect.width > 16 &&
      lastRect.height > 16;

    if (canFlip) {
      const dx = firstRect.left + firstRect.width * 0.5 - (lastRect.left + lastRect.width * 0.5);
      const dy = firstRect.top + firstRect.height * 0.5 - (lastRect.top + lastRect.height * 0.5);
      const sc = clamp(Math.min(firstRect.width / lastRect.width, firstRect.height / lastRect.height), 0.18, 1.35);

      detailStageImg.style.transition = 'none';
      detailStageImg.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(${sc.toFixed(4)})`;
      void detailStageImg.offsetWidth;

      requestAnimationFrame(() => {
        if (!stageState.open || stageState.detail.token !== token) return;
        detailStageImg.style.transition = 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)';
        detailStageImg.style.transform = 'translate3d(0, 0, 0) scale(1)';
      });

      stageState.detail.animTimerId = window.setTimeout(() => {
        if (!stageState.open || stageState.detail.token !== token) return;
        stageProductDetail.classList.remove('is-entering');
        stageState.detail.animTimerId = 0;
      }, 110);
    } else {
      detailStageImg.style.transition = 'none';
      detailStageImg.style.transform = 'translate3d(0, 0, 0) scale(1)';
      stageProductDetail.classList.remove('is-entering');
    }

    if (detailBackCollectionBtn) {
      detailBackCollectionBtn.focus({ preventScroll: true });
    }
  }

  function closeProductDetail(animate = true, moveFocus = true) {
    if (!stageProductDetail || !stageState.detail.open) return;

    stageState.detail.token += 1;
    const token = stageState.detail.token;
    if (stageState.detail.animTimerId) {
      window.clearTimeout(stageState.detail.animTimerId);
      stageState.detail.animTimerId = 0;
    }

    const slotIdx = stageState.detail.slotIndex;
    const slotNode = stageState.turntable.slotNodes[slotIdx];
    const targetImg = slotNode ? slotNode.querySelector('img') : null;

    const finalizeClose = () => {
      stageState.detail.open = false;
      stageState.detail.closing = false;
      stageState.detail.item = null;
      stageProductDetail.hidden = true;
      stageProductDetail.classList.remove('is-entering');
      if (detailStageImg) {
        detailStageImg.style.transition = '';
        detailStageImg.style.transform = '';
      }
      if (productsStage) productsStage.setAttribute('data-detail-open', 'false');
      clearTurntableSlotsHiddenForDetail();
      stageState.turntable.isHoverPaused = false;
      stageState.turntable.isFocusPaused = false;
      stageState.turntable.autoResumeAt = performance.now() + 3200;
      updateTurntableTransforms();
      if (moveFocus) {
        if (slotNode && stageState.viewMode === 'orbs') {
          slotNode.focus({ preventScroll: true });
        } else if (stageFocalOpenBtn) {
          stageFocalOpenBtn.focus({ preventScroll: true });
        }
      }
    };

    const shouldAnimate =
      animate &&
      !prefersReducedMotion.matches &&
      stageState.viewMode === 'orbs' &&
      detailStageImg &&
      targetImg;

    if (shouldAnimate) {
      stageState.detail.closing = true;
      if (stageState.detail.item) {
        detailStageImg.src = stageState.detail.item.img;
      }
      stageProductDetail.classList.add('is-entering');
      if (productsStage) productsStage.setAttribute('data-detail-open', 'false');

      const fromRect = detailStageImg.getBoundingClientRect();
      const toRect = targetImg.getBoundingClientRect();

      if (fromRect.width > 16 && toRect.width > 16) {
        const dx = toRect.left + toRect.width * 0.5 - (fromRect.left + fromRect.width * 0.5);
        const dy = toRect.top + toRect.height * 0.5 - (fromRect.top + fromRect.height * 0.5);
        const sc = clamp(Math.min(toRect.width / fromRect.width, toRect.height / fromRect.height), 0.18, 1.25);

        detailStageImg.style.transition = 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)';
        detailStageImg.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(${sc.toFixed(4)})`;

        stageState.detail.animTimerId = window.setTimeout(() => {
          if (stageState.detail.token !== token) return;
          finalizeClose();
        }, 520);
        return;
      }
    }

    finalizeClose();
  }

  function discussDetailProduct() {
    const item = stageState.detail.item || stageState.turntable.pageItems[stageState.turntable.selectedSlotIndex];
    if (!item) return;
    const isZh = currentLang === 'zh';
    const prodName = isZh ? item.nameZh : item.nameEn;
    const model = item.modelCode || item.id;
    const tagLine = isZh
      ? `[产品询盘] ${prodName}（型号：${model} · ID: ${item.id}）\n请说明项目所在地、装机功率/电量需求或预期交期：`
      : `[Product Inquiry] ${prodName} (Model: ${model} · ID: ${item.id})\nProject location, capacity requirement, or timeline:`;

    closeProductsStage(false);

    const topicEl = document.getElementById('inq-topic');
    const msgEl = document.getElementById('inq-message');
    const nameEl = document.getElementById('inq-name');
    const inquirySec = document.getElementById('project-inquiry');

    if (topicEl instanceof HTMLSelectElement && item.topic) {
      topicEl.value = item.topic;
    }
    if (msgEl instanceof HTMLTextAreaElement) {
      const existing = msgEl.value.trim();
      if (!existing) {
        msgEl.value = `${tagLine}\n`;
      } else if (!existing.includes(model) && !existing.includes(item.id)) {
        msgEl.value = `${tagLine}\n\n${existing}`;
      }
    }
    if (inquirySec) {
      inquirySec.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      if (nameEl instanceof HTMLInputElement && !nameEl.value.trim()) {
        nameEl.focus({ preventScroll: true });
      } else if (msgEl instanceof HTMLTextAreaElement) {
        msgEl.focus({ preventScroll: true });
      }
    }, prefersReducedMotion.matches ? 40 : 420);
  }

  function openStageProductsView(catIndex, moveFocus = true) {
    closeProductDetail(false, false);
    clearPointingBeam();
    stageState.pendingCategory = null;
    stageState.activeCategory = catIndex;
    stageState.pageIndex = 0;
    if (productsStage) productsStage.setAttribute('data-category-open', 'true');
    hideCategoryOrbs();
    if (stageProductsView) stageProductsView.hidden = false;
    setStageFsm('showroom');

    renderCategoryListAndSwitcher(catIndex);
    syncViewModeUI();

    if (moveFocus && stageFocalOpenBtn && stageState.viewMode === 'orbs') {
      stageFocalOpenBtn.focus({ preventScroll: true });
    } else if (moveFocus && stageCatBackBtn) {
      stageCatBackBtn.focus({ preventScroll: true });
    }
  }

  function backToCategoryOrbs(moveFocus = true) {
    closeProductDetail(false, false);
    clearPointingBeam();
    stageState.selectionToken += 1;
    if (stageState.selectionTimerId) {
      window.clearTimeout(stageState.selectionTimerId);
      stageState.selectionTimerId = 0;
    }
    const prevIdx = stageState.activeCategory;
    stageState.activeCategory = null;
    stageState.pendingCategory = null;
    stageState.guidePointFrame = 0;
    stageState.guideAimTiltDeg = 0;
    if (productsStage) productsStage.setAttribute('data-category-open', 'false');
    if (stageProductsView) stageProductsView.hidden = true;
    setStageFsm('categoriesReady');
    revealCategoryOrbs(false);

    if (moveFocus && prevIdx !== null && stageCatOrbs[prevIdx]) {
      stageCatOrbs[prevIdx].focus({ preventScroll: true });
    }
  }

  function handleSelectCategory(catIndex, immediateFromSwitcher = false) {
    if (!stageState.open) return;
    if (!CATALOG_CATEGORIES[catIndex]) return;

    if (immediateFromSwitcher || prefersReducedMotion.matches) {
      stageState.selectionToken += 1;
      if (stageState.selectionTimerId) {
        window.clearTimeout(stageState.selectionTimerId);
        stageState.selectionTimerId = 0;
      }
      openStageProductsView(catIndex, true);
      return;
    }

    if (stageState.fsm !== 'categoriesReady') return;

    stageState.selectionToken += 1;
    stageState.pendingCategory = catIndex;
    stageState.chargeStartMs = performance.now();
    stageState.beamHitTriggered = false;

    const aim = computeOrbAimPose(catIndex);
    stageState.guidePointFrame = aim.frame;
    stageState.guideAimTiltDeg = aim.tiltDeg;

    setStageFsm('pointingAndCharging');
    stageCatOrbs.forEach((orb, i) => {
      orb.classList.toggle('is-targeted', i === catIndex);
      orb.classList.toggle('is-dimmed', i !== catIndex);
      orb.classList.remove('is-hit-bloom');
    });
    updatePointingBeamGeometry(stageState.chargeStartMs);
  }

  function startRunAndThrowSequence() {
    if (!stageState.open || stageState.fsm !== 'frontFacingIdle') return;
    const nowMs = performance.now();
    stageState.runStartMs = nowMs;
    stageState.wheelGuardUntil = nowMs + 2800;
    stageState.burstPlayed = false;
    setStageFsm('runningRight');
    hideCategoryOrbs();
    clearStageBurst();
    clearPointingBeam();
    if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
  }

  function skipToCategoryOrbs() {
    if (!stageState.open) return;
    closeProductDetail(false, false);
    clearPointingBeam();
    stageState.selectionToken += 1;
    if (stageState.selectionTimerId) {
      window.clearTimeout(stageState.selectionTimerId);
      stageState.selectionTimerId = 0;
    }
    stageState.activeCategory = null;
    stageState.pendingCategory = null;
    stageState.guidePointFrame = 0;
    stageState.guideAimTiltDeg = 0;
    if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
    clearStageBurst();
    if (stageProductsView) stageProductsView.hidden = true;
    if (productsStage) productsStage.setAttribute('data-category-open', 'false');
    setStageFsm('categoriesReady');
    revealCategoryOrbs(false);
    renderStageTimeline(performance.now());
  }

  function replayIntroduction() {
    if (!stageState.open) return;
    closeProductDetail(false, false);
    clearPointingBeam();
    stageState.selectionToken += 1;
    if (stageState.selectionTimerId) {
      window.clearTimeout(stageState.selectionTimerId);
      stageState.selectionTimerId = 0;
    }
    stageState.activeCategory = null;
    stageState.pendingCategory = null;
    stageState.guidePointFrame = 0;
    stageState.guideAimTiltDeg = 0;
    stageState.burstPlayed = false;
    if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
    clearStageBurst();
    hideCategoryOrbs();
    if (stageProductsView) stageProductsView.hidden = true;
    if (productsStage) productsStage.setAttribute('data-category-open', 'false');

    if (prefersReducedMotion.matches) {
      skipToCategoryOrbs();
      return;
    }

    stageState.enterStartMs = performance.now();
    stageState.wheelGuardUntil = stageState.enterStartMs + 1400;
    setStageFsm('entering');
  }

  function syncStageLocaleUI() {
    const isZh = currentLang === 'zh';
    if (stageSkipBtn) stageSkipBtn.textContent = isZh ? '跳过引导' : 'Skip intro';
    if (stageReplayBtn) stageReplayBtn.textContent = isZh ? '重播引导' : 'Replay intro';
    if (stageCloseLabel) stageCloseLabel.textContent = isZh ? '关闭' : 'Close';
    if (stageBackLabel) stageBackLabel.textContent = isZh ? '返回产品分类' : 'Back to categories';
    if (stageStepPrevLabel) stageStepPrevLabel.textContent = isZh ? '返回上一幕' : 'Back';
    if (stageStepNextLabel) stageStepNextLabel.textContent = isZh ? '开始探索' : 'Continue';
    if (stageHallSub) {
      stageHallSub.textContent = isZh ? '昂旭清洁能源展厅' : 'CLEAN ENERGY SHOWROOM';
    }
    if (stageTurntableHint) {
      stageTurntableHint.textContent = isZh
        ? '上下滚动翻页 · 拖动选择 · 点击查看详情'
        : 'Scroll for shelves · Drag to rotate · Click to inspect';
    }
    if (stageFocalOpenLabel) {
      stageFocalOpenLabel.textContent = isZh ? '查看产品详情' : 'View product';
    }

    stageCatOrbs.forEach((orb) => {
      const idx = Number(orb.getAttribute('data-cat-index'));
      const cat = CATALOG_CATEGORIES[idx];
      if (!cat) return;
      const tEl = orb.querySelector('[data-cat-title]');
      const dEl = orb.querySelector('[data-cat-desc]');
      const cEl = orb.querySelector(`[data-orb-count="${idx}"]`);
      if (tEl) tEl.textContent = isZh ? cat.titleZh : cat.titleEn;
      if (dEl) dEl.textContent = isZh ? cat.descZh : cat.descEn;
      if (cEl) cEl.textContent = isZh ? `${cat.items.length} 款` : `${cat.items.length} products`;
    });

    if (stageState.activeCategory !== null) {
      renderCategoryListAndSwitcher(stageState.activeCategory);
    }
    if (stageState.detail.open && stageState.detail.item) {
      populateDetailPanel(stageState.detail.item, stageState.detail.slotIndex);
    }
    syncViewModeUI();
  }

  function renderStageTimeline(nowMs) {
    if (!productsStage || !stageState.open) return;

    const dtMs = stageState.lastTickMs > 0 ? clamp(nowMs - stageState.lastTickMs, 0, 50) : 16.6;
    stageState.lastTickMs = nowMs;

    const geom = getStageGeometry();
    const fsm = stageState.fsm;

    let trackX = 0;
    let trackY = 0;
    let trackScale = 1;
    let bounceY = 0;
    let shadowScale = 1;
    const shadowOpacity = 0.88;
    let progressFrac = 0;
    let floorOpacity = 0.96;
    let floorShiftY = 0;

    if (stageState.pointerActive && !prefersReducedMotion.matches && stageViewport) {
      const tr = stageRiseyTrack ? stageRiseyTrack.getBoundingClientRect() : null;
      const actorCx = tr && tr.width ? tr.left + tr.width * 0.5 : window.innerWidth * 0.5;
      const actorCy = tr && tr.height ? tr.top + tr.height * 0.42 : window.innerHeight * 0.45;
      stageState.targetGazeX = clamp((stageState.pointerX - actorCx) / 460, -1, 1);
      stageState.targetGazeY = clamp((stageState.pointerY - actorCy) / 360, -1, 1);
    } else {
      stageState.targetGazeX = 0;
      stageState.targetGazeY = 0;
    }
    stageState.gazeX += (stageState.targetGazeX - stageState.gazeX) * 0.14;
    stageState.gazeY += (stageState.targetGazeY - stageState.gazeY) * 0.14;

    if (fsm === 'entering') {
      const enterDur = 1260;
      const t = clamp((nowMs - stageState.enterStartMs) / enterDur, 0, 1);
      const easeOut = 1 - Math.pow(1 - t, 2.3);
      trackX = geom.enterStartX * (1 - easeOut);
      progressFrac = 0;
      floorOpacity = 0.45 + easeOut * 0.51;

      if (t >= 1) {
        trackX = 0;
        stageState.wheelGuardUntil = nowMs + 180;
        setStageFsm('frontFacingIdle');
        setStageRiseyMode('center');
      } else {
        setStageRiseyMode('walkR');
        const stepPhase = t * 9.5;
        const walkFrame = Math.floor(stepPhase) % 4;
        const stepSin = Math.sin((stepPhase % 1) * Math.PI);
        bounceY = -stepSin * 4.2;
        shadowScale = 1 - stepSin * 0.08;
        setSheetFrame(stageRiseyWalkRSheet, walkFrame, 4);
      }
    } else if (fsm === 'frontFacingIdle') {
      trackX = 0;
      progressFrac = 0;
      floorOpacity = 0.96;
      setStageRiseyMode('center');

      // Calm front-facing breathing, natural blink & subtle welcoming warmth (no exaggerated turn)
      const breath = prefersReducedMotion.matches ? 0 : Math.sin(nowMs * 0.0021);
      const tilt = prefersReducedMotion.matches ? 0 : stageState.gazeX * 1.8;
      const shiftX = prefersReducedMotion.matches ? 0 : stageState.gazeX * 2.0;
      const shiftY = prefersReducedMotion.matches ? 0 : stageState.gazeY * 1.2 - breath * 1.5;
      if (stageRiseyActor) {
        stageRiseyActor.style.transform = `translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0) scaleY(${(1 + breath * 0.008).toFixed(4)}) rotateY(${tilt.toFixed(2)}deg)`;
      }

      let blinkScale = 0;
      if (!prefersReducedMotion.matches) {
        if (stageState.blinkStart === 0 && nowMs >= stageState.nextBlinkAt) {
          stageState.blinkStart = nowMs;
        }
        if (stageState.blinkStart > 0) {
          const be = nowMs - stageState.blinkStart;
          if (be < 145) {
            blinkScale = Math.sin((be / 145) * Math.PI);
          } else {
            stageState.blinkStart = 0;
            stageState.nextBlinkAt = nowMs + 2700 + Math.random() * 2400;
          }
        }
      }
      stageHdEyelids.forEach((lid) => {
        lid.style.transform = `scaleY(${blinkScale.toFixed(3)})`;
      });
    } else if (fsm === 'runningRight') {
      const el = nowMs - stageState.runStartMs;
      const tTotal = 880;

      if (el < 110) {
        // Notice & crisp turn front -> right (frames 1 -> 0 of turnaround strip)
        setStageRiseyMode('turn');
        setSheetFrame(stageRiseyTurnSheet, el < 55 ? 1 : 0, 4);
        trackX = 0;
        progressFrac = 0.04;
      } else if (el < 185) {
        // Dynamic forward crouch / push-off (frame 0 of 8-frame running sheet)
        setStageRiseyMode('runR');
        setSheetFrame(stageRiseyRunRSheet, 0, 8);
        trackX = geom.rightOffsetX * 0.02;
        progressFrac = 0.08;
      } else if (el < 775) {
        // Athletic dynamic running strides (frames 1..6 across floor)
        const runT = clamp((el - 185) / 590, 0, 1);
        const ease = 1 - Math.pow(1 - runT, 1.55);
        trackX = geom.rightOffsetX * (0.02 + ease * 0.94);
        floorOpacity = 0.96 - ease * 0.72;
        floorShiftY = ease * 20;
        progressFrac = 0.08 + ease * 0.44;
        setStageRiseyMode('runR');
        const strideIdx = 1 + (Math.floor(runT * 13) % 6);
        const air = strideIdx === 2 || strideIdx === 6 ? 10 : strideIdx === 1 || strideIdx === 5 ? 4 : 0;
        bounceY = -air;
        shadowScale = 1 - air * 0.012;
        setSheetFrame(stageRiseyRunRSheet, strideIdx, 8);
      } else if (el < tTotal) {
        // Crisp decelerate brake at right anchor (frame 7)
        const brT = clamp((el - 775) / (tTotal - 775), 0, 1);
        trackX = geom.rightOffsetX * (0.96 + brT * 0.04);
        floorOpacity = 0.24;
        floorShiftY = 20;
        progressFrac = 0.52 + brT * 0.08;
        setStageRiseyMode('runR');
        setSheetFrame(stageRiseyRunRSheet, 7, 8);
      } else {
        trackX = geom.rightOffsetX;
        stageState.throwStartMs = nowMs;
        setStageFsm('throwing');
      }
    } else if (fsm === 'throwing') {
      const el = nowMs - stageState.throwStartMs;
      trackX = geom.rightOffsetX;
      trackY = geom.guideY * clamp(el / 1350, 0, 1);
      trackScale = 1 - (1 - geom.guideScale) * clamp(el / 1350, 0, 1);
      floorOpacity = Math.max(0.12, 0.24 - (el / 1500) * 0.14);
      floorShiftY = 20 + clamp(el / 1350, 0, 1) * 10;
      progressFrac = 0.6 + clamp(el / 1720, 0, 1) * 0.4;

      if (el < 190) {
        setStageRiseyMode('turn');
        setSheetFrame(stageRiseyTurnSheet, Math.floor((el / 190) * 4), 4);
      } else if (el < 430) {
        setStageRiseyMode('throw');
        setSheetFrame(stageRiseyThrowSheet, 0, 4);
      } else if (el < 650) {
        setStageRiseyMode('throw');
        setSheetFrame(stageRiseyThrowSheet, 1, 4);
      } else if (el < 830) {
        setStageRiseyMode('throw');
        setSheetFrame(stageRiseyThrowSheet, 2, 4);
      } else if (el < 1280) {
        setStageRiseyMode('throw');
        setSheetFrame(stageRiseyThrowSheet, 3, 4);
        updateFlyingBackpackArc((el - 830) / 450);
      } else if (el < 1740) {
        if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
        if (!stageState.burstPlayed) {
          stageState.burstPlayed = true;
          triggerStageBurst();
          revealCategoryOrbs(true);
        }
        setStageRiseyMode('surprise');
        const sFrac = clamp((el - 1280) / 460, 0, 1);
        const recoil = Math.sin(sFrac * Math.PI) * 7;
        if (stageRiseyActor) {
          stageRiseyActor.style.transform = `translate3d(${recoil.toFixed(1)}px, 0, 0)`;
        }
      } else {
        setStageFsm('categoriesReady');
        setStageRiseyMode('guide');
        setSheetFrame(stageRiseyGuideSheet, 0, 4);
      }
    } else if (fsm === 'categoriesReady') {
      trackX = geom.rightOffsetX;
      trackY = geom.guideY;
      trackScale = geom.guideScale;
      progressFrac = 1;
      floorOpacity = 0.12;
      floorShiftY = 30;
      if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
      setStageRiseyMode('guide');
      setSheetFrame(stageRiseyGuideSheet, 0, 4);

      const breathe = prefersReducedMotion.matches ? 0 : Math.sin(nowMs * 0.002) * 0.007;
      const gazeTurn = prefersReducedMotion.matches ? 0 : stageState.gazeX * 1.4;
      if (stageRiseyActor) {
        stageRiseyActor.style.transform = `translate3d(0, 0, 0) scaleY(${(1 + breathe).toFixed(4)}) rotate(${(gazeTurn * 0.25).toFixed(2)}deg)`;
      }
    } else if (fsm === 'pointingAndCharging') {
      const el = nowMs - stageState.chargeStartMs;
      trackX = geom.rightOffsetX;
      trackY = geom.guideY;
      trackScale = geom.guideScale;
      progressFrac = 1;
      floorOpacity = 0.12;
      floorShiftY = 30;
      setStageRiseyMode('guide');
      setSheetFrame(stageRiseyGuideSheet, stageState.guidePointFrame, 4);
      if (stageRiseyActor) {
        stageRiseyActor.style.transform = `translate3d(0, 0, 0) rotate(${stageState.guideAimTiltDeg.toFixed(2)}deg)`;
      }
      updatePointingBeamGeometry(nowMs);

      if (el >= 680) {
        stageState.openingStartMs = nowMs;
        clearPointingBeam();
        setStageFsm('categoryOpening');
      }
    } else if (fsm === 'categoryOpening') {
      const el = nowMs - stageState.openingStartMs;
      trackX = geom.isCompact ? geom.vw * 0.34 : geom.vw * 0.41;
      trackY = geom.isCompact ? 18 : 26;
      trackScale = geom.isCompact ? 0.28 : 0.34;
      progressFrac = 1;
      floorOpacity = 0;
      floorShiftY = 30;
      setStageRiseyMode('guide');
      setSheetFrame(stageRiseyGuideSheet, 0, 4);
      if (stageRiseyActor) stageRiseyActor.style.transform = 'translate3d(0, 0, 0)';

      if (el >= 220 && stageState.pendingCategory !== null) {
        openStageProductsView(stageState.pendingCategory, true);
      }
    } else if (fsm === 'showroom') {
      trackX = geom.isCompact ? geom.vw * 0.34 : geom.vw * 0.41;
      trackY = geom.isCompact ? 18 : 26;
      trackScale = stageState.detail.open ? 0.22 : (geom.isCompact ? 0.28 : 0.34);
      progressFrac = 1;
      floorOpacity = 0;
      floorShiftY = 30;
      setStageRiseyMode('guide');
      setSheetFrame(stageRiseyGuideSheet, 0, 4);
      if (stageRiseyActor) {
        stageRiseyActor.style.transform = 'translate3d(0, 0, 0)';
      }
      stepTurntablePhysics(dtMs / 1000, nowMs);
      if (stageState.detail.open && detailParallaxWrap && stageState.pointerActive && !prefersReducedMotion.matches) {
        detailParallaxWrap.style.transform = `translate3d(${(stageState.gazeX * -5.5).toFixed(2)}px, ${(stageState.gazeY * -4).toFixed(2)}px, 0)`;
      }
    }

    if (
      stageRiseyActor &&
      fsm !== 'frontFacingIdle' &&
      fsm !== 'throwing' &&
      fsm !== 'categoriesReady' &&
      fsm !== 'pointingAndCharging' &&
      fsm !== 'categoryOpening' &&
      fsm !== 'showroom'
    ) {
      stageRiseyActor.style.transform = `translate3d(0, ${bounceY.toFixed(2)}px, 0)`;
    }

    if (stageRiseyTrack) {
      stageRiseyTrack.style.transform = `translate3d(calc(-50% + ${trackX.toFixed(2)}px), ${trackY.toFixed(2)}px, 0) scale(${trackScale.toFixed(4)})`;
    }
    if (stageRiseyShadow) {
      stageRiseyShadow.style.transform = `scaleX(${shadowScale.toFixed(3)})`;
      stageRiseyShadow.style.opacity = String(shadowOpacity.toFixed(2));
    }

    if (stageBrandFloor) {
      stageBrandFloor.style.opacity = floorOpacity.toFixed(3);
      stageBrandFloor.style.transform = `translate3d(0, ${floorShiftY.toFixed(2)}px, 0)`;
    }

    if (stageProgressFill) {
      stageProgressFill.style.transform = `scaleX(${clamp(progressFrac, 0, 1).toFixed(4)})`;
    }

    const showReplay = fsm === 'categoriesReady' || fsm === 'pointingAndCharging' || fsm === 'categoryOpening' || fsm === 'showroom';
    if (stageReplayBtn) stageReplayBtn.hidden = !showReplay;
    if (stageSkipBtn) stageSkipBtn.hidden = showReplay;

    const isZh = currentLang === 'zh';
    if (stageScrollCue) {
      if (fsm === 'entering') {
        stageScrollCue.textContent = isZh ? 'Risey 正在入场...' : 'Risey entering stage...';
      } else if (fsm === 'frontFacingIdle') {
        stageScrollCue.textContent = isZh ? '向下轻滑一次，开始能量展示' : 'Scroll down once to launch series orbs';
      } else if (fsm === 'runningRight' || fsm === 'throwing') {
        stageScrollCue.textContent = isZh ? 'Risey 正在开启产品宇宙...' : 'Unleashing Anthrise energy orbs...';
      } else if (fsm === 'categoriesReady') {
        stageScrollCue.textContent = isZh ? '点击任意分类能量球进入展厅' : 'Select a category orb to enter showroom';
      } else if (fsm === 'pointingAndCharging' || fsm === 'categoryOpening') {
        stageScrollCue.textContent = isZh ? '正在连线进入产品展厅...' : 'Charging category beam...';
      } else {
        stageScrollCue.textContent = isZh ? '转动展台浏览系列，点击展开规格参数' : 'Explore showroom turntable or inspect specs';
      }
    }

    if (stageStepControls) {
      stageStepControls.hidden = fsm !== 'frontFacingIdle';
    }
    if (stageStepPrevBtn) {
      stageStepPrevBtn.disabled = fsm !== 'categoriesReady';
    }
    if (stageStepNextBtn) {
      stageStepNextBtn.disabled = fsm !== 'frontFacingIdle';
    }
  }

  function stepStageByDirection(dir) {
    if (!stageState.open) return;
    if (dir > 0 && stageState.fsm === 'frontFacingIdle') {
      startRunAndThrowSequence();
    } else if (dir < 0 && stageState.fsm === 'showroom') {
      if (stageState.detail.open) {
        closeProductDetail(true, true);
      } else {
        backToCategoryOrbs(true);
      }
    }
  }

  function openProductsStage(triggerEl = null) {
    if (!productsStage) return;
    closeAllDropdowns();
    closeAllHotspots();
    closeMobileDrawer();
    closeAssistantMenu(false);
    cancelActiveRun(false);

    if (!stageState.open) {
      stageState.savedScrollY = window.scrollY || window.pageYOffset || 0;
      stageState.lastTrigger = triggerEl || document.activeElement;
    }

    stageState.selectionToken += 1;
    if (stageState.selectionTimerId) {
      window.clearTimeout(stageState.selectionTimerId);
      stageState.selectionTimerId = 0;
    }
    stageState.activeCategory = null;
    stageState.pendingCategory = null;
    stageState.viewMode = 'orbs';
    stageState.pageIndex = 0;
    stageState.guidePointFrame = 0;
    stageState.guideAimTiltDeg = 0;
    stageState.beamHitTriggered = false;
    stageState.burstPlayed = false;
    stageState.gazeX = 0;
    stageState.gazeY = 0;
    stageState.blinkStart = 0;
    stageState.nextBlinkAt = performance.now() + 2400;
    stageState.lastTickMs = performance.now();

    if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
    clearStageBurst();
    clearPointingBeam();
    hideCategoryOrbs();
    closeProductDetail(false, false);
    if (stageProductsView) stageProductsView.hidden = true;
    productsStage.setAttribute('data-category-open', 'false');
    productsStage.setAttribute('data-detail-open', 'false');
    syncStageLocaleUI();

    stageState.open = true;
    productsStage.hidden = false;
    document.body.classList.add('stage-open');
    if (navProductsTrigger) navProductsTrigger.setAttribute('aria-expanded', 'true');
    syncRiseyYield();

    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setSuspended === 'function') {
      window.ANTHRISE_CAMPUS.setSuspended(true);
    }

    if (prefersReducedMotion.matches) {
      skipToCategoryOrbs();
    } else {
      stageState.enterStartMs = performance.now();
      stageState.wheelGuardUntil = stageState.enterStartMs + 1400;
      setStageFsm('entering');
      setStageRiseyMode('walkR');
    }

    renderStageTimeline(performance.now());

    requestAnimationFrame(() => {
      productsStage.classList.add('is-open');
      if (stageCloseBtn) {
        stageCloseBtn.focus({ preventScroll: true });
      }
    });
  }

  function closeProductsStage(restoreScrollAndFocus = true) {
    if (!productsStage || !stageState.open) return;
    stageState.selectionToken += 1;
    if (stageState.selectionTimerId) {
      window.clearTimeout(stageState.selectionTimerId);
      stageState.selectionTimerId = 0;
    }
    closeProductDetail(false, false);
    clearPointingBeam();
    stageState.open = false;
    stageState.activeCategory = null;
    stageState.pendingCategory = null;
    if (stageFlyingBackpack) stageFlyingBackpack.hidden = true;
    clearStageBurst();
    hideCategoryOrbs();
    if (stageProductsView) stageProductsView.hidden = true;
    productsStage.setAttribute('data-category-open', 'false');
    productsStage.setAttribute('data-detail-open', 'false');

    productsStage.classList.remove('is-open');
    productsStage.hidden = true;
    document.body.classList.remove('stage-open');
    if (navProductsTrigger) navProductsTrigger.setAttribute('aria-expanded', 'false');
    syncRiseyYield();

    if (window.ANTHRISE_CAMPUS && typeof window.ANTHRISE_CAMPUS.setSuspended === 'function') {
      window.ANTHRISE_CAMPUS.setSuspended(false);
    }

    if (restoreScrollAndFocus) {
      window.scrollTo({ top: stageState.savedScrollY, behavior: 'auto' });
      const backFocus = stageState.lastTrigger;
      if (backFocus && typeof backFocus.focus === 'function' && document.contains(backFocus)) {
        backFocus.focus({ preventScroll: true });
      }
    }

    computeRestAnchor();
    scheduleIdleDance();
  }

  // Deep-link bridge for 3D Campus equipment hotspots -> directly open exact SKU inside #products-stage
  window.__anthriseOpenStageProduct = (skuId) => {
    if (!skuId || !CATALOG_CATEGORIES.length) return;
    for (let catIndex = 0; catIndex < CATALOG_CATEGORIES.length; catIndex++) {
      const cat = CATALOG_CATEGORIES[catIndex];
      const globalIdx = cat.items.findIndex((it) => it.id === skuId);
      if (globalIdx !== -1) {
        const item = cat.items[globalIdx];
        openProductsStage();
        const {page:targetPage,slot:targetSlot} = shelfLocation(globalIdx,cat.items.length);
        openStageProductsView(catIndex, false);
        if (stageState.pageIndex !== targetPage) {
          stageState.pageIndex = targetPage;
          renderTurntablePage(false);
        }
        rotateToSlotIndex(targetSlot, true);
        openProductDetail(item, targetSlot, null);
        return;
      }
    }
    openProductsStage();
  };

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

  stageOpenTriggers.forEach((btn) => {
    btn.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (stageState.open && btn === navProductsTrigger) {
          closeProductsStage(true);
        } else {
          openProductsStage(btn);
        }
      },
      { signal }
    );
  });

  if (stageCloseBtn) {
    stageCloseBtn.addEventListener('click', () => closeProductsStage(true), { signal });
  }
  if (stageSkipBtn) {
    stageSkipBtn.addEventListener('click', () => skipToCategoryOrbs(), { signal });
  }
  if (stageReplayBtn) {
    stageReplayBtn.addEventListener('click', () => replayIntroduction(), { signal });
  }
  if (stageCatBackBtn) {
    stageCatBackBtn.addEventListener('click', () => backToCategoryOrbs(true), { signal });
  }
  if (stageViewToggleBtn) {
    stageViewToggleBtn.addEventListener(
      'click',
      () => {
        stageState.viewMode = stageState.viewMode === 'list' ? 'orbs' : 'list';
        syncViewModeUI();
      },
      { signal }
    );
  }
  if (stageRotToggleBtn) {
    stageRotToggleBtn.addEventListener(
      'click',
      () => {
        const tt = stageState.turntable;
        tt.userPaused = !tt.userPaused;
        if (!tt.userPaused) {
          tt.autoResumeAt = 0;
        }
        syncRotationToggleUI();
      },
      { signal }
    );
  }
  if (stagePagePrev) {
    stagePagePrev.addEventListener(
      'click',
      () => {
        if (stageState.pageIndex > 0) {
          stageState.pageIndex -= 1;
          renderTurntablePage(false);
        }
      },
      { signal }
    );
  }
  if (stagePageNext) {
    stagePageNext.addEventListener(
      'click',
      () => {
        stageState.pageIndex += 1;
        renderTurntablePage(false);
      },
      { signal }
    );
  }
  if (stageTurnPrev) {
    stageTurnPrev.addEventListener('click', () => stepTurntableByDelta(-1), { signal });
  }
  if (stageTurnNext) {
    stageTurnNext.addEventListener('click', () => stepTurntableByDelta(1), { signal });
  }
  if (stageFocalOpenBtn) {
    stageFocalOpenBtn.addEventListener(
      'click',
      () => {
        const tt = stageState.turntable;
        const item = tt.pageItems[tt.selectedSlotIndex];
        const node = tt.slotNodes[tt.selectedSlotIndex];
        const img = node ? node.querySelector('img') : null;
        if (item) openProductDetail(item, tt.selectedSlotIndex, img);
      },
      { signal }
    );
  }
  if (detailBackCollectionBtn) {
    detailBackCollectionBtn.addEventListener('click', () => closeProductDetail(true, true), { signal });
  }
  if (detailDiscussBtn) {
    detailDiscussBtn.addEventListener('click', () => discussDetailProduct(), { signal });
  }

  // Turntable pointer drag-to-rotate with inertial coasting & delayed auto-resume
  if (stageRingField) {
    stageRingField.addEventListener(
      'pointerdown',
      (event) => {
        if (
          !stageState.open ||
          stageState.fsm !== 'showroom' ||
          stageState.viewMode !== 'orbs' ||
          stageState.detail.open ||
          event.button > 0
        ) {
          return;
        }
        const tt = stageState.turntable;
        tt.isDragging = true;
        tt.dragPointerId = event.pointerId;
        tt.dragStartX = event.clientX;
        tt.dragLastX = event.clientX;
        tt.dragLastMs = performance.now();
        tt.dragMovedPx = 0;
        tt.velocity = 0;
        tt.targetTheta = null;
        tt.autoBlend = 0;
      },
      { signal }
    );

    stageRingField.addEventListener(
      'pointermove',
      (event) => {
        const tt = stageState.turntable;
        if (!tt.isDragging || event.pointerId !== tt.dragPointerId) return;
        const dx = event.clientX - tt.dragLastX;
        const now = performance.now();
        const dtSec = Math.max((now - tt.dragLastMs) / 1000, 0.008);
        const prevMoved = tt.dragMovedPx;
        tt.dragMovedPx += Math.abs(dx);
        tt.dragLastX = event.clientX;
        tt.dragLastMs = now;

        if (prevMoved < 6 && tt.dragMovedPx >= 6) {
          stageRingField.classList.add('is-dragging');
          if (typeof stageRingField.setPointerCapture === 'function') {
            try {
              stageRingField.setPointerCapture(event.pointerId);
            } catch (_err) {
              // Ignore capture errors
            }
          }
        }
        if (tt.dragMovedPx < 6) return;

        const fieldW = Math.max(stageRingField.clientWidth || 640, 280);
        const dTheta = (dx / (fieldW * 0.46)) * Math.PI * 0.85;
        tt.theta += dTheta;
        tt.velocity = clamp(dTheta / dtSec, -10, 10);
        updateTurntableTransforms();
      },
      { signal }
    );

    const endTurntableDrag = (event) => {
      const tt = stageState.turntable;
      if (!tt.isDragging || event.pointerId !== tt.dragPointerId) return;
      tt.isDragging = false;
      tt.dragPointerId = null;
      stageRingField.classList.remove('is-dragging');
      if (typeof stageRingField.releasePointerCapture === 'function') {
        try {
          if (stageRingField.hasPointerCapture?.(event.pointerId)) {
            stageRingField.releasePointerCapture(event.pointerId);
          }
        } catch (_err) {
          // Ignore release errors
        }
      }

      if (tt.dragMovedPx >= 8) {
        tt.suppressClickUntil = performance.now() + 260;
        tt.autoResumeAt = performance.now() + 3600;
        if (Math.abs(tt.velocity) < 0.25) {
          const count = tt.pageItems.length;
          if (count) {
            const stepAngle = (Math.PI * 2) / count;
            const nearest = Math.round(-tt.theta / stepAngle);
            tt.velocity = 0;
            tt.targetTheta = -nearest * stepAngle;
          }
        }
      } else {
        tt.velocity = 0;
      }
    };

    stageRingField.addEventListener('pointerup', endTurntableDrag, { signal });
    stageRingField.addEventListener('pointercancel', endTurntableDrag, { signal });

    stageRingField.addEventListener(
      'keydown',
      (event) => {
        if (!stageState.open || stageState.fsm !== 'showroom' || stageState.detail.open) return;
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          stepTurntableByDelta(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          stepTurntableByDelta(1);
        } else if (event.key === 'Enter' && event.target === stageRingField) {
          event.preventDefault();
          const tt = stageState.turntable;
          const item = tt.pageItems[tt.selectedSlotIndex];
          const node = tt.slotNodes[tt.selectedSlotIndex];
          const img = node ? node.querySelector('img') : null;
          if (item) openProductDetail(item, tt.selectedSlotIndex, img);
        }
      },
      { signal }
    );
  }

  if (stageStepPrevBtn) {
    stageStepPrevBtn.addEventListener('click', () => stepStageByDirection(-1), { signal });
  }
  if (stageStepNextBtn) {
    stageStepNextBtn.addEventListener('click', () => stepStageByDirection(1), { signal });
  }

  stageCatOrbs.forEach((orb) => {
    orb.addEventListener(
      'click',
      () => {
        const idx = Number(orb.getAttribute('data-cat-index'));
        if (!Number.isFinite(idx)) return;
        handleSelectCategory(idx, false);
      },
      { signal }
    );
  });

  if (productsStage) {
    productsStage.addEventListener(
      'wheel',
      (event) => {
        if (!stageState.open) return;
        const target = event.target;
        if (
          target instanceof Element &&
          (target.closest('.stage-list-view') || target.closest('.stage-detail-panel'))
        ) {
          return;
        }
        event.preventDefault();

        const nowMs = performance.now();
        if(stageState.fsm === 'showroom') {
          if(stageState.detail.open || stageState.viewMode !== 'orbs')return;
          const quiet=nowMs-shelfWheelAt>190;
          if(quiet){shelfWheelSum=0;shelfWheelFired=false;}
          shelfWheelAt=nowMs;
          if(nowMs<shelfFlipUntil || shelfWheelFired)return;
          const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
          if(Math.sign(delta)!==Math.sign(shelfWheelSum))shelfWheelSum=0;
          shelfWheelSum+=delta;
          if(Math.abs(shelfWheelSum)>=48){flipShelf(Math.sign(shelfWheelSum));shelfWheelSum=0;shelfWheelFired=true;shelfFlipUntil=nowMs+620;}
          return;
        }
        if (nowMs < stageState.wheelGuardUntil || stageState.fsm !== 'frontFacingIdle') {
          return;
        }

        // One clear downward scroll triggers full run + backpack throw sequence once
        if (event.deltaY > 12) {
          startRunAndThrowSequence();
        }
      },
      { passive: false, signal }
    );

    productsStage.addEventListener(
      'pointermove',
      (event) => {
        if (!stageState.open || (event.pointerType !== 'mouse' && event.pointerType !== 'pen')) return;
        stageState.pointerX = event.clientX;
        stageState.pointerY = event.clientY;
        stageState.pointerActive = true;
      },
      { passive: true, signal }
    );

    productsStage.addEventListener(
      'mouseleave',
      () => {
        stageState.pointerActive = false;
      },
      { signal }
    );

    productsStage.addEventListener(
      'touchstart',
      (event) => {
        if (!stageState.open || !event.touches || !event.touches[0]) return;
        const t = event.target;
        stageState.touchInList = Boolean(
          t instanceof Element && (t.closest('.stage-list-view') || t.closest('.stage-detail-panel'))
        );
        stageState.touchStartY = event.touches[0].clientY;
        stageState.touchSwipeHandled = false;
      },
      { passive: true, signal }
    );

    productsStage.addEventListener(
      'touchmove',
      (event) => {
        if (!stageState.open || !event.touches || !event.touches[0]) return;
        if (stageState.touchInList || stageState.fsm === 'showroom' || stageState.detail.open) return;
        event.preventDefault();
        if (stageState.fsm !== 'frontFacingIdle' || stageState.touchSwipeHandled) {
          return;
        }
        const currY = event.touches[0].clientY;
        const dy = stageState.touchStartY - currY; // swipe up -> dy > 0
        if (dy > 26) {
          stageState.touchSwipeHandled = true;
          startRunAndThrowSequence();
        }
      },
      { passive: false, signal }
    );
  }

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
      !stageState.open &&
      state.mode !== 'dancing' &&
      document.visibilityState !== 'hidden'
    );
  }

  function isRunInteractive() {
    return (
      !followDisabled &&
      finePointerQuery.matches &&
      !prefersReducedMotion.matches &&
      !stageState.open
    );
  }

  function isIdleBreathAllowed() {
    return !prefersReducedMotion.matches && !userPaused && !stageState.open && document.visibilityState !== 'hidden';
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
      !stageState.open &&
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
    const rightReserve = vw <= 768 ? 64 : 84;
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

    const targetW = isMobile ? clamp(vw * 0.28, 108, 128) : clamp(vw * 0.125, 148, BASE_HERO_WIDTH);
    const targetH = targetW * ASPECT_RATIO;
    const rightGap = isMobile ? 64 : 84;
    const bottomGap = isMobile ? 14 : 90;

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
        riseyBody.style.transform = `perspective(720px) rotateY(${(state.bodyX * 2.8).toFixed(2)}deg) translate3d(${(state.bodyX * 1.6 * scaleFactor).toFixed(2)}px, 0, 0)`;
      } else {
        riseyBody.style.transform = 'none';
      }
    }

    if (riseyHeadGroup) {
      if (gazeOk || state.phase === 'notice' || state.phase === 'turn' || state.phase === 'settle') {
        const yaw = state.headX * 7.8;
        const pitch = -state.headY * 5.0;
        const roll = state.headX * 2.2;
        riseyHeadGroup.style.transform = `perspective(680px) rotateY(${yaw.toFixed(2)}deg) rotateX(${pitch.toFixed(2)}deg) rotate(${roll.toFixed(2)}deg)`;
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

    if (riseyMover) riseyMover.classList.add('is-running');

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
          'input, textarea, select, option, label, form, #inquiry-form, #inquiry-social-list, #hero-section, #campus-canvas-host, .campus-hotspot, .campus-popover, .campus-zone-bar, .campus-zone-btn, #hero-control-bar, .hero-motion-toggles, #risey-actor-btn, #risey-assistant-menu, #motion-toggle, #risey-follow-toggle, #back-to-top, .mobile-menu-toggle, .lang-btn, .floating-controls, .nav-trigger, [data-open-products-stage], #products-stage'
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

  // Unified rAF Loop (Stage Scroll Timeline OR Floating Risey State Machine & Gaze)
  function tick(nowMs) {
    // 1) Update Stage Continuous Timeline & Risey Guide Pose when open
    if (stageState.open && productsStage && document.visibilityState !== 'hidden') {
      renderStageTimeline(nowMs);
    }

    // 2) Update Risey State Machine & Gaze when visible
    if (document.visibilityState !== 'hidden' && !stageState.open) {
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
    if (stageState.open) return;

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
    if (stageState.open) {
      if (stageState.activeCategory !== null && stageState.viewMode === 'orbs') {
        updateTurntableTransforms();
      } else if (stageCategoryOrbsWrap && !stageCategoryOrbsWrap.hidden) {
        updateTriLinesGeometry();
      }
      renderStageTimeline(performance.now());
    }
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
        stageState.pointerActive = false;
        stageState.lastTickMs = 0;
        stageState.turntable.autoBlend = 0;
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
        stageState.lastTickMs = performance.now();
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
        if (stageState.open && stageState.activeCategory === null) {
          skipToCategoryOrbs();
        }
      } else {
        scheduleIdleDance();
      }
      syncRotationToggleUI();
    },
    { signal }
  );

  syncMotionState();

  window.__anthriseRiseyCleanup = () => {
    lifecycleAbort.abort();
    if (mainRafId) window.cancelAnimationFrame(mainRafId);
    if (revealRafId) window.cancelAnimationFrame(revealRafId);
    if (state.activeFailSafeId) window.clearTimeout(state.activeFailSafeId);
    if (state.danceTimerId) window.clearTimeout(state.danceTimerId);
    if (state.danceEndTimerId) window.clearTimeout(state.danceEndTimerId);
    if (stageState.selectionTimerId) window.clearTimeout(stageState.selectionTimerId);
    if (stageState.detail.animTimerId) window.clearTimeout(stageState.detail.animTimerId);
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
        if (stageState.open) {
          event.preventDefault();
          if (stageState.detail.open) {
            closeProductDetail(true, true);
          } else {
            closeProductsStage(true);
          }
          return;
        }
      }

      if (stageState.open && stageState.activeCategory === null) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'PageDown') {
          event.preventDefault();
          stepStageByDirection(1);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'PageUp') {
          event.preventDefault();
          stepStageByDirection(-1);
        } else if (event.key === 'Home') {
          event.preventDefault();
          replayIntroduction();
        } else if (event.key === 'End') {
          event.preventDefault();
          skipToCategoryOrbs();
        }
      } else if (
        stageState.open &&
        stageState.fsm === 'showroom' &&
        stageState.viewMode === 'orbs' &&
        !stageState.detail.open
      ) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          stepTurntableByDelta(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          stepTurntableByDelta(1);
        }
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
        if (stageState.open) {
          closeProductsStage(false);
        }
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
        syncStageLocaleUI();
      },
      { signal }
    );
  });


  if(stageRingField){
    let touchOrigin=null;
    stageRingField.addEventListener('touchstart',e=>{const t=e.touches[0];touchOrigin=t?{x:t.clientX,y:t.clientY}:null;},{passive:true,signal});
    stageRingField.addEventListener('touchend',e=>{const t=e.changedTouches[0];if(!t||!touchOrigin)return;const dx=t.clientX-touchOrigin.x,dy=t.clientY-touchOrigin.y;if(Math.abs(dy)>48&&Math.abs(dy)>Math.abs(dx)*1.5){stageState.turntable.suppressClickUntil=performance.now()+400;flipShelf(dy<0?1:-1);}touchOrigin=null;},{passive:true,signal});
    stageRingField.addEventListener('keydown',e=>{if(e.key==='PageDown'||e.key==='PageUp'){e.preventDefault();flipShelf(e.key==='PageDown'?1:-1);}},{signal});
  }
  let resizeShelfTimer=0;
  window.addEventListener('resize',()=>{clearTimeout(resizeShelfTimer);resizeShelfTimer=setTimeout(()=>{if(stageState.fsm==='showroom'&&!stageState.detail.open)renderTurntablePage(false);},160);},{signal});

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

  // Old homepage catalogue anchors now open the interactive product stage.
  document.querySelectorAll('a[href="#products"]').forEach(anchor=>{
    if(anchor.hasAttribute('data-open-products-stage'))return;
    anchor.addEventListener('click',event=>{event.preventDefault();openProductsStage(anchor);},{signal});
  });
  if(location.hash==='#products')requestAnimationFrame(()=>openProductsStage());
  window.addEventListener('hashchange',()=>{if(location.hash==='#products')openProductsStage();},{signal});
})();
