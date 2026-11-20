const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/product-catalog.js'), 'utf8'), context);
const products = context.window.ANTHRISE_PRODUCTS;
function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'node_modules', 'tmp'].includes(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? files(full) : [full];
  });
}
const tree = files(root);
const modelAssets = tree.filter(p => /\.(glb|gltf|fbx|obj)$/i.test(p));
const counts = products.reduce((acc, product) => {
  const category = ['storage', 'portable'].includes(product.category) ? 'storage' : product.category === 'lighting' ? 'lighting' : 'solar';
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});
const missingImages = [];
const manifest = {
  schemaVersion: 1,
  auditedAt: new Date().toISOString(),
  sourceRepository: 'Paulshellby/anthrise-energy',
  baseCommit: '476132c45a6c5262715efe096c9282c0f8412871',
  productDataSource: 'assets/product-catalog.js',
  categoryCounts: counts,
  modelAssets: modelAssets.map(p => path.relative(root, p)),
  auditNote: 'Gallery labels follow the active catalogue. Existing pictures, including design illustrations and detail crops, are not a complete ordered turntable sequence. No model has been accepted as a geometrically accurate product model.',
  products: products.map(product => {
    const imageUrls = [...new Set(product.gallery?.length ? product.gallery : [product.image])].filter(Boolean);
    for (const url of imageUrls) if (!fs.existsSync(path.join(root, url))) missingImages.push({ productId: product.id, url });
    return {
      productId: product.id,
      modelCode: product.modelCode || null,
      imageUrls,
      modelUrl: null,
      turntableFrames: null,
      modelSource: 'No identified local GLB/GLTF/FBX/OBJ product file. src/campus/productHardware.ts provides unverified illustrative exterior meshes only.',
      verifiedViews: imageUrls.map((url, index) => ({ url, fileExists: fs.existsSync(path.join(root, url)), catalogueLabel: product.galleryLabels?.[index] || null, verification: 'Local file existence and catalogue association only; angle/geometry not manufacturer-verified.' })),
      knownMissingGeometry: ['No verified full 360-degree geometry or complete ordered turntable sequence', 'Rear connections, terminal locations and mounting hardware require manufacturer drawings', 'No accepted calibrated material/textures or dimensional model'],
      visualStatus: product.visualStatus || 'catalogue-gallery-unverified-geometry',
      displayMode: 'gallery',
      localizedUrls: Object.fromEntries(['en', 'zh', 'es', 'ru'].map(lang => [lang, '/products/' + product.id + '-' + lang + '.html']))
    };
  })
};
fs.writeFileSync(path.join(root, 'assets/product-model-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
const routes = tree.filter(p => p.endsWith('.html') && !p.includes(path.sep + '.github' + path.sep)).map(p => {
  const relative = path.relative(root, p).split(path.sep).join('/');
  const source = fs.readFileSync(p, 'utf8');
  const title = (source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || relative).replace(/&amp;/g, '&').trim();
  return { path: relative === 'index.html' ? '/' : '/' + relative, title: title.slice(0, 256) };
});
fs.writeFileSync(path.join(root, 'manus-routes.json'), JSON.stringify({ routes }, null, 2) + '\n');
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(path.join(root, 'docs/model-audit.json'), JSON.stringify({ productCount: products.length, counts, modelAssets: manifest.modelAssets, missingImages, routeCount: routes.length }, null, 2) + '\n');
console.log(JSON.stringify({ productCount: products.length, counts, modelCount: modelAssets.length, missingImages, routeCount: routes.length }, null, 2));
if (missingImages.length) process.exitCode = 1;
