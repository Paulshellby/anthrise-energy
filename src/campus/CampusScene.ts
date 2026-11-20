import { createDetailLayer } from './detailLayer';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createCampusWorld } from './campusWorld';
import { createCameraRig } from './cameraRig';
import { createEnergyFlowSystem } from './energyFlow';
import { createHotspotController } from './hotspots';
import { createCampusTextures } from './textures';
import { CampusZoneId, HotspotDef, LangCode, SceneTime, ZONE_META } from './types';

export interface CampusBridge {
  setTime: (time: SceneTime, instant?: boolean) => void;
  setFlowVisible: (visible: boolean) => void;
  setMotionPaused: (paused: boolean) => void;
  setZone: (zone: CampusZoneId, instant?: boolean) => void;
  setLanguage: (lang: LangCode) => void;
  setSuspended: (suspended: boolean) => void;
  closeHotspots: () => void;
  getState: () => {
    ready: boolean;
    time: SceneTime;
    flowVisible: boolean;
    activeZone: CampusZoneId;
  };
}

export interface CampusMountOptions {
  heroSection: HTMLElement;
  stickyViewport: HTMLElement;
  canvasHost: HTMLElement;
  hotspotsHost: HTMLElement;
  fallbackView: HTMLElement;
  onZoneChange?: (zone: CampusZoneId) => void;
  onInspectProduct?: (skuId: string) => void;
  onInquireProduct?: (hotspot: HotspotDef) => void;
}

const DAY_BG = new THREE.Color(0xdde8eb);
const NIGHT_BG = new THREE.Color(0x06152f);
const DAY_SUN = new THREE.Color(0xfff5e4);
const NIGHT_MOON = new THREE.Color(0x729ce6);
const DAY_HEMI_SKY = new THREE.Color(0xe6f3ff);
const NIGHT_HEMI_SKY = new THREE.Color(0x224a88);
const DAY_HEMI_GND = new THREE.Color(0xb6c5bc);
const NIGHT_HEMI_GND = new THREE.Color(0x080f27);

export function mountCampusScene(opts: CampusMountOptions): { bridge: CampusBridge; dispose: () => void } {
  const { heroSection, stickyViewport, canvasHost, hotspotsHost, fallbackView } = opts;

  let disposed = false;
  let ready = false;
  let offscreen = false;
  let suspended = false;
  let motionPaused = false;
  let flowVisible = false;
  let targetTime: SceneTime = 'day';
  let currentZone: CampusZoneId = 'overview';
  let lang: LangCode = 'en';

  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reducedQuery.matches;

  let nightBlend = 0;
  let targetNight = 0;

  let renderer: THREE.WebGLRenderer | null = null;
  let envRT: THREE.WebGLRenderTarget | null = null;
  let rafId = 0;
  let resizeObserver: ResizeObserver | null = null;
  let intersectionObserver: IntersectionObserver | null = null;

  const activateFallback = (reason: string) => {
    console.warn('[Anthrise Campus 3D]', reason);
    heroSection.dataset.webglState = 'fallback';
    fallbackView.hidden = false;
  };

  // Fallback timer: ensure no blank screen even if GPU init stalls
  const initWatchdog = window.setTimeout(() => {
    if (!ready && !disposed) {
      activateFallback('WebGL initialization timed out');
    }
  }, 3000);

  let canvas: HTMLCanvasElement;
  try {
    canvas = document.createElement('canvas');
    canvas.className = 'campus-webgl-canvas';
    canvas.setAttribute('aria-label', 'Interactive 3D Clean Energy Campus');
    canvasHost.appendChild(canvas);

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
  } catch (err) {
    window.clearTimeout(initWatchdog);
    activateFallback(String(err));
    const noopBridge: CampusBridge = {
      setTime: () => {},
      setFlowVisible: () => {},
      setMotionPaused: () => {},
      setZone: () => {},
      setLanguage: () => {},
      setSuspended: () => {},
      closeHotspots: () => {},
      getState: () => ({ ready: false, time: targetTime, flowVisible, activeZone: currentZone }),
    };
    return { bridge: noopBridge, dispose: () => {} };
  }

  // Software GPU detection guard (SwiftShader / llvmpipe / softpipe)
  const gl = renderer.getContext();
  const debugExt = gl.getExtension('WEBGL_debug_renderer_info');
  const gpuRenderer = debugExt ? String(gl.getParameter(debugExt.UNMASKED_RENDERER_WEBGL)) : '';
  const isSoftwareGl = /SwiftShader|llvmpipe|softpipe/i.test(gpuRenderer);
  const isMobile = window.innerWidth <= 768;

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const bgColor = DAY_BG.clone();
  const fog = new THREE.FogExp2(bgColor.getHex(), 0.0068);
  scene.background = bgColor;
  scene.fog = fog;

  // Mandatory Studio IBL via RoomEnvironment PMREM so metallic enclosures & glass never crush black
  const pmrem = new THREE.PMREMGenerator(renderer);
  const roomEnv = new RoomEnvironment();
  envRT = pmrem.fromScene(roomEnv, 0.04);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.5;
  roomEnv.dispose();
  pmrem.dispose();

  // Calibrated Three-Point Architectural Lighting
  const hemiLight = new THREE.HemisphereLight(DAY_HEMI_SKY.getHex(), DAY_HEMI_GND.getHex(), 0.92);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(DAY_SUN.getHex(), 2.1);
  keyLight.position.set(28, 36, 22);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(isSoftwareGl || isMobile ? 1024 : 2048, isSoftwareGl || isMobile ? 1024 : 2048);
  keyLight.shadow.camera.near = 6;
  keyLight.shadow.camera.far = 96;
  keyLight.shadow.camera.left = -36;
  keyLight.shadow.camera.right = 36;
  keyLight.shadow.camera.top = 34;
  keyLight.shadow.camera.bottom = -34;
  keyLight.shadow.bias = -0.0004;
  keyLight.shadow.normalBias = 0.025;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xcbe3ee, 0.45);
  rimLight.position.set(-28, 16, -24);
  scene.add(rimLight);

  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.4, 220);

  let needsRender = true;
  const onAssetReady = () => { if (!disposed) needsRender = true; };
  const textures = createCampusTextures(renderer);
  const world = createCampusWorld(textures, onAssetReady);
  scene.add(world.root);
  const detailLayer = createDetailLayer(world.root,textures,onAssetReady);

  const flowSystem = createEnergyFlowSystem();
  scene.add(flowSystem.group);

  // Physical lights are expensive on software GPUs. Keep accurate range/decay,
  // but allocate a bounded set nearest the inspected zone; hardware desktop keeps all.
  const localLights: (THREE.PointLight | THREE.SpotLight)[] = [];
  scene.traverse((object: THREE.Object3D) => {
    if (object instanceof THREE.PointLight || object instanceof THREE.SpotLight) localLights.push(object);
  });
  const lightBudget = isSoftwareGl ? 4 : isMobile ? 6 : localLights.length;
  heroSection.dataset.lightingQuality = lightBudget < localLights.length ? 'balanced' : 'full';
  const zoneLightCenters: Record<CampusZoneId, THREE.Vector3> = {
    overview: new THREE.Vector3(-2, 1, 4),
    home: new THREE.Vector3(-11.5, 1, 2),
    commercial: new THREE.Vector3(18.5, 1, -7.8),
    offgrid: new THREE.Vector3(18, 1, 19.2),
  };
  const lampPosition = new THREE.Vector3();
  const applyLightBudget = () => {
    const center = zoneLightCenters[currentZone];
    const ranked = localLights.map((light) => ({light, distance: light.getWorldPosition(lampPosition).distanceToSquared(center)}));
    ranked.sort((a, b) => a.distance - b.distance);
    ranked.forEach(({light}, index) => { light.visible = index < lightBudget; });
  };

  const cameraRig = createCameraRig(camera);

  let viewWidth = Math.max(1, canvasHost.clientWidth);
  let viewHeight = Math.max(1, canvasHost.clientHeight);

  const hotspots = createHotspotController(hotspotsHost, {
    onSelectZone: (zone) => setZone(zone, false),
    onInspectProduct: (skuId) => opts.onInspectProduct?.(skuId),
    onInquireProduct: (h) => opts.onInquireProduct?.(h),
  });

  const syncRendererSize = () => {
    if (!renderer) return;
    viewWidth = Math.max(1, canvasHost.clientWidth);
    viewHeight = Math.max(1, canvasHost.clientHeight);
    renderer.setSize(viewWidth, viewHeight, false);
    camera.aspect = viewWidth / viewHeight;
    camera.updateProjectionMatrix();
    needsRender = true;
  };

  syncRendererSize();

  // Scroll Progress Binding (Continuous scroll drive without trapping wheel events)
  let manualOverrideZone: CampusZoneId | null = null;
  let lastScrollProgress = 0;

  const computeScrollProgress = (): number => {
    const rect = heroSection.getBoundingClientRect();
    const viewH = Math.max(1, stickyViewport.clientHeight || window.innerHeight - 70);
    const totalScrollable = rect.height - viewH;
    if (totalScrollable <= 40) {
      return manualOverrideZone ? ZONE_META[manualOverrideZone].progress : lastScrollProgress;
    }
    const u = THREE.MathUtils.clamp(-rect.top / totalScrollable, 0, 1);
    lastScrollProgress = u;
    return u;
  };

  const applyAtmosphere = (n: number) => {
    bgColor.copy(DAY_BG).lerp(NIGHT_BG, n);
    fog.color.copy(bgColor);
    fog.density = THREE.MathUtils.lerp(0.0068, 0.0076, n);
    scene.environmentIntensity = THREE.MathUtils.lerp(0.5, 0.065, n);
    renderer!.toneMappingExposure = THREE.MathUtils.lerp(1.02, 0.9, n);

    keyLight.color.copy(DAY_SUN).lerp(NIGHT_MOON, n);
    keyLight.intensity = THREE.MathUtils.lerp(2.1, 0.26, n);

    hemiLight.color.copy(DAY_HEMI_SKY).lerp(NIGHT_HEMI_SKY, n);
    hemiLight.groundColor.copy(DAY_HEMI_GND).lerp(NIGHT_HEMI_GND, n);
    hemiLight.intensity = THREE.MathUtils.lerp(0.92, 0.18, n);

    rimLight.intensity = THREE.MathUtils.lerp(0.45, 0.1, n);
    const lampNight = targetTime === 'night' ? n : 0;
    world.setNightFactor(lampNight);
    detailLayer.setNightFactor(lampNight);
    applyLightBudget();
    // Operating mode is discrete: a requested night scene immediately disables PV packets,
    // even while architectural lighting is still cross-fading.
    flowSystem.setState(targetNight, isReducedMotion, motionPaused);
  };

  const setZone = (zone: CampusZoneId, instant = false) => {
    const meta = ZONE_META[zone];
    if (!meta) return;

    const rect = heroSection.getBoundingClientRect();
    const viewH = Math.max(1, stickyViewport.clientHeight || window.innerHeight - 70);
    const totalScrollable = rect.height - viewH;

    cameraRig.resetOrbit();
    hotspots.closeAll();

    if (totalScrollable > 40) {
      const heroTopDoc = window.scrollY + rect.top - 70;
      const targetScrollY = Math.max(0, heroTopDoc + meta.progress * totalScrollable);
      if (instant || isReducedMotion) {
        window.scrollTo({ top: targetScrollY, behavior: 'auto' });
        cameraRig.snapToProgress(meta.progress, viewWidth / viewHeight);
      } else {
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      }
    } else {
      manualOverrideZone = zone;
      lastScrollProgress = meta.progress;
      if (instant || isReducedMotion) {
        cameraRig.snapToProgress(meta.progress, viewWidth / viewHeight);
      } else {
        cameraRig.setScrollProgress(meta.progress);
      }
    }

    if (currentZone !== zone) {
      currentZone = zone;
      opts.onZoneChange?.(zone);
    }
    applyLightBudget();
    needsRender = true;
  };

  // Drag-to-orbit pointer controls with 6px click-vs-drag guard & zero wheel capture
  let isDragging = false;
  let lastPtrX = 0;
  let lastPtrY = 0;
  let dragDistance = 0;
  let activePointer: number | null = null;
  const originalTabIndex = canvasHost.getAttribute('tabindex');
  canvasHost.tabIndex = 0;
  canvasHost.setAttribute('aria-keyshortcuts', 'ArrowLeft ArrowRight ArrowUp ArrowDown Home Escape');

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (activePointer !== null || (e.target as Element)?.closest('.campus-hotspot, .campus-hud, button, a')) return;
    isDragging = true;
    activePointer = e.pointerId;
    canvasHost.setPointerCapture(e.pointerId);
    canvasHost.focus({ preventScroll: true });
    dragDistance = 0;
    lastPtrX = e.clientX;
    lastPtrY = e.clientY;
    canvasHost.classList.add('is-dragging');
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!isDragging || e.pointerId !== activePointer) return;
    const dx = e.clientX - lastPtrX;
    const dy = e.clientY - lastPtrY;
    lastPtrX = e.clientX;
    lastPtrY = e.clientY;
    dragDistance += Math.hypot(dx, dy);
    cameraRig.setOrbitOffset(-dx * 0.0042, -dy * 0.0024);
    needsRender = true;
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!isDragging || e.pointerId !== activePointer) return;
    isDragging = false;
    activePointer = null;
    if (canvasHost.hasPointerCapture(e.pointerId)) canvasHost.releasePointerCapture(e.pointerId);
    canvasHost.classList.remove('is-dragging');
    if (dragDistance > 6) {
      // Suppress accidental clicks right after orbiting
      canvasHost.dataset.recentDrag = '1';
      window.setTimeout(() => {
        delete canvasHost.dataset.recentDrag;
      }, 90);
    }
  };

  const onStageKeyDown = (e: KeyboardEvent) => {
    // Never intercept page-level keys or inputs / buttons / links.
    if (e.target !== canvasHost || e.altKey || e.ctrlKey || e.metaKey) return;
    const offsets: Record<string, [number, number]> = {
      ArrowLeft: [-0.045, 0], ArrowRight: [0.045, 0],
      ArrowUp: [0, -0.025], ArrowDown: [0, 0.025],
    };
    if (offsets[e.key]) cameraRig.setOrbitOffset(...offsets[e.key]);
    else if (e.key === 'Home') cameraRig.resetOrbit();
    else if (e.key === 'Escape') hotspots.closeAll();
    else return;
    e.preventDefault();
    needsRender = true;
  };

  canvasHost.addEventListener('pointerdown', onPointerDown);
  canvasHost.addEventListener('pointercancel', onPointerUp);
  canvasHost.addEventListener('lostpointercapture', onPointerUp);
  canvasHost.addEventListener('keydown', onStageKeyDown);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });

  // Scroll listener only marks dirty; cameraRig interpolates cleanly inside rAF
  const onScroll = () => {
    manualOverrideZone = null;
    const u = computeScrollProgress();
    cameraRig.setScrollProgress(u);
    const nextZone = cameraRig.getZoneForProgress(u);
    if (nextZone !== currentZone) {
      currentZone = nextZone;
      opts.onZoneChange?.(nextZone);
    }
    needsRender = true;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  const onContextLost = (e: Event) => {
    e.preventDefault();
    suspended = true;
    activateFallback('WebGL context lost');
  };
  const onContextRestored = () => {
    suspended = false;
    needsRender = true;
    heroSection.dataset.webglState = 'active';
    fallbackView.hidden = true;
  };
  canvas.addEventListener('webglcontextlost', onContextLost);
  canvas.addEventListener('webglcontextrestored', onContextRestored);

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => syncRendererSize());
    resizeObserver.observe(canvasHost);
  }

  if ('IntersectionObserver' in window) {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          offscreen = !entry.isIntersecting;
        });
      },
      { threshold: 0.02 }
    );
    intersectionObserver.observe(heroSection);
  }

  const onVisibility = () => {
    if (document.visibilityState === 'visible') {
      lastTickMs = performance.now();
    }
  };
  document.addEventListener('visibilitychange', onVisibility);

  const onReducedMotionChange = (ev: MediaQueryListEvent) => {
    isReducedMotion = ev.matches;
    flowSystem.setState(targetNight, isReducedMotion, motionPaused);
    needsRender = true;
  };
  reducedQuery.addEventListener('change', onReducedMotionChange);

  let lastTickMs = performance.now();
  let lastRenderMs = 0;
  let frameCount = 0;

  const tick = (now: number) => {
    if (disposed) return;
    rafId = window.requestAnimationFrame(tick);

    if (offscreen || suspended || document.visibilityState === 'hidden') {
      lastTickMs = now;
      return;
    }

    if (isSoftwareGl && now - lastRenderMs < 45) {
      return;
    }

    const dt = Math.max(0, Math.min((now - lastTickMs) / 1000, 0.08));
    lastTickMs = now;

    // Smooth Day / Night lighting cross-transition (~0.95s)
    let nightMoving = false;
    if (Math.abs(nightBlend - targetNight) > 0.002) {
      if (isReducedMotion || motionPaused || isSoftwareGl) {
        nightBlend = targetNight;
      } else {
        const lambda = 1 - Math.exp(-3.6 * dt);
        nightBlend = Math.abs(targetNight - nightBlend) < 0.008 ? targetNight : THREE.MathUtils.lerp(nightBlend, targetNight, lambda);
      }
      applyAtmosphere(nightBlend);
      nightMoving = true;
    }

    const u = computeScrollProgress();
    cameraRig.setScrollProgress(u);
    const cameraMoved = cameraRig.update(dt, viewWidth / Math.max(1, viewHeight), isReducedMotion);
    const flowAnimating = flowVisible && !isReducedMotion && !motionPaused;
    if (flowAnimating) {
      flowSystem.update(dt);
    } else if ((needsRender || nightMoving) && flowVisible) {
      flowSystem.update(0);
    }

    if (needsRender || nightMoving || cameraMoved || flowAnimating || frameCount < 2) {
      lastRenderMs = now;
      needsRender = false;
      renderer!.render(scene, camera);
      hotspots.updateProjection(camera, viewWidth, viewHeight, currentZone);
      frameCount++;
      if (!ready && frameCount >= 2) {
        ready = true;
        window.clearTimeout(initWatchdog);
        heroSection.dataset.webglState = 'active';
        fallbackView.hidden = true;
      }
    }
  };

  // Initial synchronous frame render
  applyAtmosphere(0);
  cameraRig.snapToProgress(computeScrollProgress(), viewWidth / Math.max(1, viewHeight));
  renderer.render(scene, camera);
  hotspots.updateProjection(camera, viewWidth, viewHeight, currentZone);
  ready = true;
  window.clearTimeout(initWatchdog);
  heroSection.dataset.webglState = 'active';
  fallbackView.hidden = true;

  rafId = window.requestAnimationFrame(tick);

  const bridge: CampusBridge = {
    setTime: (time: SceneTime, instant = false) => {
      targetTime = time;
      targetNight = time === 'night' ? 1 : 0;
      flowSystem.setState(targetNight, isReducedMotion, motionPaused);
      if (time === 'day') {
        world.setNightFactor(0);
        detailLayer.setNightFactor(0);
      }
      if (instant || isReducedMotion) {
        nightBlend = targetNight;
        applyAtmosphere(nightBlend);
      }
      needsRender = true;
    },
    setFlowVisible: (visible: boolean) => {
      flowVisible = visible;
      flowSystem.setVisible(visible);
      needsRender = true;
    },
    setMotionPaused: (paused: boolean) => {
      motionPaused = paused;
      flowSystem.setState(targetNight, isReducedMotion, motionPaused);
      needsRender = true;
    },
    setZone,
    setLanguage: (nextLang: LangCode) => {
      lang = nextLang;
      hotspots.setLanguage(lang);
      needsRender = true;
    },
    setSuspended: (nextSuspended: boolean) => {
      suspended = nextSuspended;
      if (!nextSuspended) needsRender = true;
    },
    closeHotspots: () => {
      hotspots.closeAll();
    },
    getState: () => ({
      ready,
      time: targetTime,
      flowVisible,
      activeZone: currentZone,
    }),
  };

  return {
    bridge,
    dispose: () => {
      disposed = true;
      window.clearTimeout(initWatchdog);
      if (rafId) window.cancelAnimationFrame(rafId);
      canvasHost.removeEventListener('pointerdown', onPointerDown);
      canvasHost.removeEventListener('pointercancel', onPointerUp);
      canvasHost.removeEventListener('lostpointercapture', onPointerUp);
      canvasHost.removeEventListener('keydown', onStageKeyDown);
      if (activePointer !== null && canvasHost.hasPointerCapture(activePointer)) canvasHost.releasePointerCapture(activePointer);
      canvasHost.removeAttribute('aria-keyshortcuts');
      if (originalTabIndex === null) canvasHost.removeAttribute('tabindex');
      else canvasHost.setAttribute('tabindex', originalTabIndex);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
      reducedQuery.removeEventListener('change', onReducedMotionChange);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      hotspots.dispose();
      flowSystem.dispose();
      detailLayer.dispose();
      world.dispose();
      textures.dispose();
      envRT?.dispose();
      renderer?.dispose();
      canvas.remove();
    },
  };
}
