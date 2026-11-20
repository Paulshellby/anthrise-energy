import { mountCampusScene, type CampusBridge } from './CampusScene';
import { CAMPUS_UI_COPY, CampusZoneId, HotspotDef, LangCode, SceneTime, ZONE_META } from './types';

declare global {
  interface Window {
    ANTHRISE_CAMPUS?: CampusBridge;
    __anthriseGetLang?: () => LangCode;
    __anthriseOpenStageProduct?: (skuId: string) => void;
    __anthrisePrefillInquiry?: (topic: string, modelCode: string, label: string) => void;
  }
}

function initCampusHero(): void {
  const heroSection = document.getElementById('hero-section');
  const stickyViewport = document.getElementById('hero-scene-viewport');
  const canvasHost = document.getElementById('campus-canvas-host');
  const hotspotsHost = document.getElementById('campus-hotspots');
  const fallbackView = document.getElementById('campus-fallback-view');

  if (!heroSection || !stickyViewport || !canvasHost || !hotspotsHost || !fallbackView) {
    return;
  }

  const zoneNumEl = document.getElementById('campus-zone-num');
  const zoneTitleEl = document.getElementById('campus-zone-title');
  const zoneSubtitleEl = document.getElementById('campus-zone-subtitle');
  const zoneNoteEl = document.getElementById('campus-zone-note');
  const dragHintEl = document.getElementById('campus-drag-hint');
  const zoneBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-campus-zone]'));

  let activeZone: CampusZoneId = 'overview';
  let activeTime: SceneTime = (heroSection.dataset.sceneTime === 'night' ? 'night' : 'day');
  let activeLang: LangCode = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';

  const syncZoneHud = () => {
    const meta = ZONE_META[activeZone];
    const ui = CAMPUS_UI_COPY[activeLang];

    if (zoneNumEl) zoneNumEl.textContent = meta.num;
    if (zoneTitleEl) zoneTitleEl.textContent = meta.title[activeLang];
    if (zoneSubtitleEl) zoneSubtitleEl.textContent = meta.subtitle[activeLang];
    if (zoneNoteEl) {
      zoneNoteEl.textContent = activeTime === 'night' ? meta.noteNight[activeLang] : meta.noteDay[activeLang];
    }
    if (dragHintEl) {
      dragHintEl.textContent = ui.dragHint;
    }

    zoneBtns.forEach((btn) => {
      const zId = btn.dataset.campusZone as CampusZoneId | undefined;
      if (!zId) return;
      const isSelected = zId === activeZone;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
      const labelEl = btn.querySelector('.campus-zone-label');
      if (labelEl) {
        labelEl.textContent = ui.zones[zId];
      }
    });

    heroSection.dataset.activeZone = activeZone;
  };

  const handleInspectProduct = (skuId: string) => {
    if (typeof window.__anthriseOpenStageProduct === 'function') {
      window.__anthriseOpenStageProduct(skuId);
      return;
    }
    const productsEl = document.getElementById('products');
    productsEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleInquireProduct = (h: HotspotDef) => {
    const label = h.title[activeLang];
    const model = h.modelCode || '';
    const topic = h.topic || 'home';
    if (typeof window.__anthrisePrefillInquiry === 'function') {
      window.__anthrisePrefillInquiry(topic, model, label);
      return;
    }
    const inquirySec = document.getElementById('project-inquiry');
    const topicEl = document.getElementById('inq-topic');
    const msgEl = document.getElementById('inq-message');
    if (topicEl instanceof HTMLSelectElement) {
      topicEl.value = topic;
    }
    if (msgEl instanceof HTMLTextAreaElement) {
      const prefix =
        activeLang === 'zh'
          ? `[园区场景咨询] ${label}${model ? `（${model}）` : ''}\n`
          : `[Campus Inquiry] ${label}${model ? ` (${model})` : ''}\n`;
      if (!msgEl.value.includes(label)) {
        msgEl.value = msgEl.value.trim() ? `${prefix}${msgEl.value}` : prefix;
      }
    }
    inquirySec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const mounted = mountCampusScene({
    heroSection,
    stickyViewport,
    canvasHost,
    hotspotsHost,
    fallbackView,
    onZoneChange: (nextZone) => {
      activeZone = nextZone;
      syncZoneHud();
    },
    onInspectProduct: handleInspectProduct,
    onInquireProduct: handleInquireProduct,
  });

  const wrappedBridge: CampusBridge = {
    ...mounted.bridge,
    setTime: (time, instant) => {
      activeTime = time;
      mounted.bridge.setTime(time, instant);
      syncZoneHud();
    },
    setZone: (zone, instant) => {
      activeZone = zone;
      mounted.bridge.setZone(zone, instant);
      syncZoneHud();
    },
    setLanguage: (lang) => {
      activeLang = lang;
      mounted.bridge.setLanguage(lang);
      syncZoneHud();
    },
  };

  window.ANTHRISE_CAMPUS = wrappedBridge;

  zoneBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const z = btn.dataset.campusZone as CampusZoneId | undefined;
      if (z) wrappedBridge.setZone(z, false);
    });
  });

  // Initial sync
  wrappedBridge.setTime(activeTime, true);
  wrappedBridge.setLanguage(activeLang);
  const reviewParams = new URLSearchParams(window.location.search);
  const reviewTime = reviewParams.get('campus-time');
  if (reviewTime === 'day' || reviewTime === 'night') wrappedBridge.setTime(reviewTime, true);
  const reviewZone = reviewParams.get('campus-zone');
  if (['overview','home','commercial','offgrid'].includes(reviewZone || '')) {
    wrappedBridge.setZone(reviewZone as CampusZoneId, true);
  }
  syncZoneHud();
  // Energy flow starts hidden. Only the existing button / public bridge may enable it.

  window.addEventListener('beforeunload', () => {
    mounted.dispose();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCampusHero, { once: true });
} else {
  initCampusHero();
}
