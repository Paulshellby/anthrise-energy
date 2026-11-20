import * as THREE from 'three';
import { CAMPUS_HOTSPOTS, CAMPUS_UI_COPY, CampusZoneId, HotspotDef, LangCode } from './types';

export interface HotspotController {
  updateProjection: (camera: THREE.PerspectiveCamera, width: number, height: number, activeZone: CampusZoneId) => void;
  setLanguage: (lang: LangCode) => void;
  closeAll: () => void;
  getOpenId: () => string | null;
  dispose: () => void;
}

interface HotspotEntry {
  def: HotspotDef;
  worldVec: THREE.Vector3;
  rootEl: HTMLDivElement;
  pinBtn: HTMLButtonElement;
  tagEl: HTMLSpanElement;
  popEl: HTMLDivElement;
  kickerEl: HTMLParagraphElement;
  titleEl: HTMLParagraphElement;
  usageEl: HTMLParagraphElement;
  specsBtn?: HTMLButtonElement;
  linkEl?: HTMLAnchorElement;
  inquireBtn?: HTMLButtonElement;
  visitBtn?: HTMLButtonElement;
  lastPx: number;
  lastPy: number;
}

export interface HotspotCallbacks {
  onSelectZone: (zone: CampusZoneId) => void;
  onInspectProduct: (skuId: string) => void;
  onInquireProduct: (hotspot: HotspotDef) => void;
}

export function createHotspotController(
  container: HTMLElement,
  callbacks: HotspotCallbacks
): HotspotController {
  let lang: LangCode = 'en';
  let openId: string | null = null;
  let lastZone: CampusZoneId | null = null;

  const scratch = new THREE.Vector3();
  const entries: HotspotEntry[] = [];

  const closeAll = () => {
    openId = null;
    entries.forEach((e) => {
      e.pinBtn.setAttribute('aria-expanded', 'false');
      e.popEl.hidden = true;
      e.rootEl.classList.remove('is-open');
    });
  };

  const clampPopover = (entry: HotspotEntry) => {
    const pop = entry.popEl;
    if (pop.hidden) return;
    pop.style.setProperty('--pop-shift-x', '0px');
    pop.classList.remove('hotspot-popover-below');

    const cRect = container.getBoundingClientRect();
    if (!cRect.width) return;

    const pad = 12;
    const anchorY = entry.rootEl.getBoundingClientRect().top;
    const above = anchorY - 22 - cRect.top - pad;
    const below = cRect.bottom - pad - anchorY - 22;
    const useBelow = above < Math.min(280, pop.scrollHeight) && below > above;
    pop.classList.toggle('hotspot-popover-below', useBelow);
    pop.style.setProperty('--pop-max-height', `${Math.max(80, Math.min(420, useBelow ? below : above))}px`);
    const pRect = pop.getBoundingClientRect();
    if (!pRect.width) return;
    let dx = 0;
    if (pRect.left < cRect.left + pad) {
      dx = cRect.left + pad - pRect.left;
    } else if (pRect.right > cRect.right - pad) {
      dx = cRect.right - pad - pRect.right;
    }
    if (Math.abs(dx) > 0.5) {
      pop.style.setProperty('--pop-shift-x', `${dx.toFixed(1)}px`);
    }
  };

  const openEntry = (target: HotspotEntry) => {
    const wasSame = openId === target.def.id;
    closeAll();
    if (wasSame) return;
    openId = target.def.id;
    target.pinBtn.setAttribute('aria-expanded', 'true');
    target.popEl.hidden = false;
    target.rootEl.classList.add('is-open');
    clampPopover(target);
  };

  container.innerHTML = '';

  CAMPUS_HOTSPOTS.forEach((def) => {
    const rootEl = document.createElement('div');
    rootEl.className = `campus-hotspot campus-hotspot-${def.kind}`;
    rootEl.dataset.hotspotId = def.id;
    rootEl.dataset.zone = def.zone;

    const pinBtn = document.createElement('button');
    pinBtn.type = 'button';
    pinBtn.className = `campus-pin campus-pin-${def.kind}`;
    pinBtn.setAttribute('aria-expanded', 'false');

    const dotEl = document.createElement('span');
    dotEl.className = 'campus-pin-dot';
    dotEl.setAttribute('aria-hidden', 'true');

    const tagEl = document.createElement('span');
    tagEl.className = 'campus-pin-label';
    tagEl.textContent = def.title.en;

    pinBtn.appendChild(dotEl);
    pinBtn.appendChild(tagEl);

    const popEl = document.createElement('div');
    popEl.className = 'campus-popover';
    popEl.hidden = true;
    popEl.id = `campus-popover-${def.id}`;
    popEl.setAttribute('role', 'region');
    pinBtn.setAttribute('aria-controls', popEl.id);

    const headerRow = document.createElement('div');
    headerRow.className = 'campus-pop-head';

    if (def.img) {
      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'campus-pop-thumb';
      const thumbImg = document.createElement('img');
      thumbImg.src = def.img;
      thumbImg.alt = def.title.en;
      thumbImg.loading = 'eager';
      thumbImg.decoding = 'async';
      thumbWrap.appendChild(thumbImg);
      headerRow.appendChild(thumbWrap);
    }

    const headText = document.createElement('div');
    headText.className = 'campus-pop-titles';

    const kickerEl = document.createElement('p');
    kickerEl.className = 'campus-pop-kicker';
    const titleEl = document.createElement('p');
    titleEl.className = 'campus-pop-title';
    headText.append(kickerEl, titleEl);
    headerRow.appendChild(headText);

    const usageEl = document.createElement('p');
    usageEl.className = 'campus-pop-usage';

    const actionsRow = document.createElement('div');
    actionsRow.className = 'campus-pop-actions';

    const entry: HotspotEntry = {
      def,
      worldVec: new THREE.Vector3(def.worldPos[0], def.worldPos[1], def.worldPos[2]),
      rootEl,
      pinBtn,
      tagEl,
      popEl,
      kickerEl,
      titleEl,
      usageEl,
      lastPx: -9999,
      lastPy: -9999,
    };

    if (def.targetZone) {
      const visitBtn = document.createElement('button');
      visitBtn.type = 'button';
      visitBtn.className = 'campus-pop-cta';
      visitBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAll();
        callbacks.onSelectZone(def.targetZone!);
      });
      actionsRow.appendChild(visitBtn);
      entry.visitBtn = visitBtn;
    } else {
      if (def.skuId) {
        const specsBtn = document.createElement('button');
        specsBtn.type = 'button';
        specsBtn.className = 'campus-pop-cta';
        specsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAll();
          callbacks.onInspectProduct(def.skuId!);
        });
        actionsRow.appendChild(specsBtn);
        entry.specsBtn = specsBtn;
      }

      if (def.hrefEn) {
        const linkEl = document.createElement('a');
        linkEl.className = 'campus-pop-link';
        linkEl.href = def.hrefEn;
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
        actionsRow.appendChild(linkEl);
        entry.linkEl = linkEl;
      }

      const inquireBtn = document.createElement('button');
      inquireBtn.type = 'button';
      inquireBtn.className = def.skuId ? 'campus-pop-link' : 'campus-pop-cta';
      inquireBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAll();
        callbacks.onInquireProduct(def);
      });
      actionsRow.appendChild(inquireBtn);
      entry.inquireBtn = inquireBtn;
    }

    popEl.append(headerRow, usageEl, actionsRow);
    rootEl.append(pinBtn, popEl);
    container.appendChild(rootEl);

    pinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (def.targetZone) {
        closeAll();
        callbacks.onSelectZone(def.targetZone);
        return;
      }
      openEntry(entry);
    });

    entries.push(entry);
  });

  const applyLocale = (nextLang: LangCode) => {
    lang = nextLang;
    const ui = CAMPUS_UI_COPY[lang];
    entries.forEach((e) => {
      const { def } = e;
      e.tagEl.textContent = def.title[lang];
      e.pinBtn.setAttribute('aria-label', def.title[lang]);
      e.popEl.setAttribute('aria-label', def.title[lang]);
      e.kickerEl.textContent = def.kicker[lang];
      e.titleEl.textContent = def.title[lang];
      e.usageEl.textContent = def.usage[lang];
      if (e.visitBtn) e.visitBtn.textContent = ui.visitZone;
      if (e.specsBtn) e.specsBtn.textContent = ui.viewSpecs;
      if (e.linkEl && def.hrefEn && def.hrefZh) {
        e.linkEl.href = lang === 'zh' ? def.hrefZh : def.hrefEn;
        e.linkEl.textContent = lang === 'zh' ? '产品页 ↗' : 'Page ↗';
      }
      if (e.inquireBtn) e.inquireBtn.textContent = ui.inquireSetup;
    });
  };

  applyLocale('en');

  const onOutsideClick = (ev: MouseEvent) => {
    const t = ev.target;
    if (!(t instanceof Element) || !t.closest('.campus-hotspot')) {
      closeAll();
    }
  };
  document.addEventListener('click', onOutsideClick);
  const onHotspotKeyDown = (ev: KeyboardEvent) => {
    if (ev.key !== 'Escape' || !openId) return;
    const entry = entries.find(e => e.def.id === openId);
    closeAll();
    entry?.pinBtn.focus({ preventScroll: true });
    ev.preventDefault();
    ev.stopPropagation();
  };
  container.addEventListener('keydown', onHotspotKeyDown);

  const updateProjection = (
    camera: THREE.PerspectiveCamera,
    width: number,
    height: number,
    activeZone: CampusZoneId
  ) => {
    if (lastZone !== activeZone) {
      closeAll();
      lastZone = activeZone;
    }

    if (width < 10 || height < 10) return;

    for (let i = 0; i < entries.length; i++) {
      const e = entries[i];
      const matchesZone = e.def.zone === activeZone;
      if (!matchesZone) {
        e.rootEl.style.display = 'none';
        continue;
      }

      scratch.copy(e.worldVec).project(camera);
      // Skip points behind camera or clipped past bounds
      if (scratch.z > 1 || scratch.z < -1 || scratch.x < -1.04 || scratch.x > 1.04 || scratch.y < -1.04 || scratch.y > 1.04) {
        e.rootEl.style.display = 'none';
        continue;
      }

      const px = (scratch.x * 0.5 + 0.5) * width;
      const py = (-scratch.y * 0.5 + 0.5) * height;
      e.rootEl.style.display = '';
      if (Math.abs(px - e.lastPx) >= 0.35 || Math.abs(py - e.lastPy) >= 0.35) {
        e.lastPx = px;
        e.lastPy = py;
        e.rootEl.style.left = `${px.toFixed(1)}px`;
        e.rootEl.style.top = `${py.toFixed(1)}px`;
      }

      if (openId === e.def.id) {
        clampPopover(e);
      }
    }
  };

  return {
    updateProjection,
    setLanguage: applyLocale,
    closeAll,
    getOpenId: () => openId,
    dispose: () => {
      document.removeEventListener('click', onOutsideClick);
      container.removeEventListener('keydown', onHotspotKeyDown);
      container.innerHTML = '';
    },
  };
}
