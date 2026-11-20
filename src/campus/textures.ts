import * as THREE from 'three';

export interface PbrTextureSet {
  color: THREE.Texture;
  normal: THREE.Texture;
  roughness: THREE.Texture;
  ao?: THREE.Texture;
}

export interface TextureBundle {
  solarPanel: THREE.CanvasTexture;
  limestoneWall: THREE.CanvasTexture;
  roadAsphalt: THREE.CanvasTexture;
  grassGround: THREE.CanvasTexture;
  timberDeck: THREE.CanvasTexture;
  homePbr?: { plaster: PbrTextureSet; timber: PbrTextureSet; paving: PbrTextureSet };
  homePbrReady?: Promise<void>;
  productTextures: Map<string, THREE.Texture>;
  dispose: () => void;
}

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  return [canvas, ctx];
}

function configureColorTexture(tex: THREE.CanvasTexture, maxAniso: number, repeatX = 1, repeatY = 1): THREE.CanvasTexture {
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = maxAniso;
  tex.needsUpdate = true;
  return tex;
}

function createSolarPanelTexture(maxAniso: number): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(512, 512);
  ctx.fillStyle = '#0e1b2d';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle dark navy gradient across crystalline cells
  const grad = ctx.createLinearGradient(0, 0, 512, 512);
  grad.addColorStop(0, '#13243b');
  grad.addColorStop(0.5, '#0d192b');
  grad.addColorStop(1, '#152a44');
  ctx.fillStyle = grad;
  ctx.fillRect(10, 10, 492, 492);

  // Aluminum outer perimeter
  ctx.strokeStyle = '#cbd5dc';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, 502, 502);

  // Cell grid (6 x 10 half-cut cells look)
  const cols = 6;
  const rows = 10;
  const pad = 12;
  const cellW = (512 - pad * 2) / cols;
  const cellH = (512 - pad * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = pad + c * cellW;
      const y = pad + r * cellH;
      ctx.fillStyle = (r + c) % 2 === 0 ? '#112238' : '#142740';
      ctx.fillRect(x + 2, y + 2, cellW - 4, cellH - 4);

      // Fine silver busbars
      ctx.fillStyle = 'rgba(205, 222, 236, 0.22)';
      ctx.fillRect(x + cellW * 0.25, y + 2, 1.2, cellH - 4);
      ctx.fillRect(x + cellW * 0.5, y + 2, 1.2, cellH - 4);
      ctx.fillRect(x + cellW * 0.75, y + 2, 1.2, cellH - 4);
    }
  }

  // Central divider bar
  ctx.fillStyle = 'rgba(215, 226, 234, 0.42)';
  ctx.fillRect(10, 254, 492, 4);

  const tex = new THREE.CanvasTexture(canvas);
  return configureColorTexture(tex, maxAniso, 1, 1);
}

function createLimestoneTexture(maxAniso: number): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(256, 256);
  ctx.fillStyle = '#f2eee6';
  ctx.fillRect(0, 0, 256, 256);

  // Architectural limestone mineral grain & subtle panel joints
  for (let i = 0; i < 1800; i++) {
    const x = (i * 73) % 256;
    const y = (i * 137) % 256;
    ctx.fillStyle = i % 3 === 0 ? 'rgba(198, 190, 176, 0.18)' : 'rgba(255, 255, 255, 0.22)';
    ctx.fillRect(x, y, 2, 2);
  }
  ctx.strokeStyle = 'rgba(176, 168, 154, 0.24)';
  ctx.lineWidth = 1;
  for (let y = 64; y < 256; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  return configureColorTexture(tex, maxAniso, 2, 2);
}

function createRoadAsphaltTexture(maxAniso: number): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(256, 256);
  ctx.fillStyle = '#6c777a';
  ctx.fillRect(0, 0, 256, 256);

  for (let i = 0; i < 2600; i++) {
    const x = (i * 97) % 256;
    const y = (i * 53) % 256;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.055)' : 'rgba(18, 28, 30, 0.08)';
    ctx.fillRect(x, y, 2, 2);
  }

  const tex = new THREE.CanvasTexture(canvas);
  return configureColorTexture(tex, maxAniso, 6, 1);
}

function createGrassTexture(maxAniso: number): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(512, 512);
  ctx.fillStyle = '#c5d3c6';
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 4200; i++) {
    const x = ((Math.sin(i * 127.1 + 17) * 43758.5453) % 1 + 1) % 1 * 512;
    const y = ((Math.sin(i * 311.7 + 83) * 29743.2347) % 1 + 1) % 1 * 512;
    const shade = i % 3;
    ctx.fillStyle =
      shade === 0
        ? 'rgba(164, 188, 166, 0.24)'
        : shade === 1
          ? 'rgba(218, 226, 210, 0.22)'
          : 'rgba(128, 158, 134, 0.16)';
    ctx.fillRect(x, y, 3, 3);
  }

  const tex = new THREE.CanvasTexture(canvas);
  return configureColorTexture(tex, maxAniso, 16, 16);
}

function createTimberTexture(maxAniso: number): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(256, 256);
  ctx.fillStyle = '#b98f63';
  ctx.fillRect(0, 0, 256, 256);

  for (let y = 0; y < 256; y += 28) {
    ctx.fillStyle = y % 56 === 0 ? 'rgba(155, 112, 70, 0.25)' : 'rgba(210, 174, 132, 0.15)';
    ctx.fillRect(0, y, 256, 25);
    ctx.fillStyle = 'rgba(72, 48, 28, 0.32)';
    ctx.fillRect(0, y + 25, 256, 3);
  }

  const tex = new THREE.CanvasTexture(canvas);
  return configureColorTexture(tex, maxAniso, 2, 2);
}

export function createCampusTextures(renderer: THREE.WebGLRenderer, onAssetReady?: () => void, anisotropyLimit = 4): TextureBundle {
  const maxAniso = Math.min(renderer.capabilities.getMaxAnisotropy(), 4, anisotropyLimit);
  const solarPanel = createSolarPanelTexture(maxAniso);
  const limestoneWall = createLimestoneTexture(maxAniso);
  const roadAsphalt = createRoadAsphaltTexture(maxAniso);
  const grassGround = createGrassTexture(maxAniso);
  const timberDeck = createTimberTexture(maxAniso);

  const productPaths = [
    '/assets/images/stage-battery.png',
    '/assets/images/stage-inverter.png',
    '/assets/images/products/series_horizon.png',
    '/assets/images/products/hybrid50.png',
    '/assets/images/products/series_seed24.png',
    '/assets/images/products/origAEV1000.png',
    '/assets/images/stage-solar.png',
    '/assets/images/stage-light.png',
    '/assets/images/products/jcLight28.png',
    '/assets/images/products/jcLight09.png',
  ];

  const loader = new THREE.TextureLoader();
  const productTextures = new Map<string, THREE.Texture>();

  productPaths.forEach((src) => {
    const tex = loader.load(src, (loaded) => {
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.anisotropy = maxAniso;
      loaded.needsUpdate = true;
    });
    tex.colorSpace = THREE.SRGBColorSpace;
    productTextures.set(src, tex);
  });

  const pbrTextures: THREE.Texture[] = [];
  const pbrReady: Promise<void>[] = [];
  const loadPbrMap = (kind: string, channel: string, color = false) => {
    let markReady: () => void = () => {};
    pbrReady.push(new Promise<void>(resolve => { markReady = resolve; }));
    const texture = loader.load('/assets/materials/home/' + kind + '-' + channel + '.jpg', () => {
      markReady(); onAssetReady?.();
    });
    texture.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.anisotropy = maxAniso;
    pbrTextures.push(texture);
    return texture;
  };
  const loadPbrSet = (kind: string, withAo = false): PbrTextureSet => ({
    color: loadPbrMap(kind, 'color', true), normal: loadPbrMap(kind, 'normalgl'),
    roughness: loadPbrMap(kind, 'roughness'),
    ...(withAo ? { ao: loadPbrMap(kind, 'ambientocclusion') } : {})
  });
  const homePbr = { plaster: loadPbrSet('plaster'), timber: loadPbrSet('timber', true), paving: loadPbrSet('paving', true) };
  const homePbrReady = Promise.all(pbrReady).then(() => { onAssetReady?.(); });

  return {
    solarPanel,
    limestoneWall,
    roadAsphalt,
    grassGround,
    timberDeck,
    homePbr,
    homePbrReady,
    productTextures,
    dispose: () => {
      solarPanel.dispose();
      limestoneWall.dispose();
      roadAsphalt.dispose();
      grassGround.dispose();
      timberDeck.dispose();
      productTextures.forEach((t) => t.dispose());
      productTextures.clear();
      pbrTextures.forEach(t => t.dispose());
    },
  };
}
