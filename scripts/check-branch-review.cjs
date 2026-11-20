const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const baseline = process.env.ANTHRISE_BASELINE;
const baseCommit = '476132c45a6c5262715efe096c9282c0f8412871';
const expected = JSON.parse(fs.readFileSync(path.join(root, 'docs/preserved-baseline-hashes.json')));
const failures = [];
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
for (const [file, value] of Object.entries(expected)) {
  if (hash(path.join(root, file)) !== value) failures.push('Preserved file changed: ' + file);
}
const ids = ['ess16', 'hybrid6', 'series_horizon', 'origAEV2500', 'jcLight28'];
const seoPattern = /<link\b[^>]*\b(?:canonical|alternate)[^>]*>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi;
for (const id of ids) for (const lang of ['en', 'zh', 'es', 'ru']) {
  const relative = 'products/' + id + '-' + lang + '.html';
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const old = baseline
    ? fs.readFileSync(path.join(baseline, relative), 'utf8')
    : execFileSync('git', ['show', baseCommit + ':' + relative], { cwd: root, encoding: 'utf8' });
  if (JSON.stringify(current.match(seoPattern)) !== JSON.stringify(old.match(seoPattern))) failures.push('SEO metadata changed: ' + relative);
  if (!current.includes('product-atlas.js')) failures.push('Atlas not integrated: ' + relative);
  if (!fs.existsSync(path.join(root, 'downloads/products/' + id + '-brief-en-zh.pdf'))) failures.push('Product brief missing: ' + id);
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/product-model-manifest.json')));
const atlasSource = fs.readFileSync(path.join(root, 'assets/product-atlas.js'), 'utf8');
if (/root\.dataset\.productId\s*=/.test(atlasSource)) failures.push('Atlas root uses a reserved site-polish product-id marker');
if (!atlasSource.includes('header [data-lang], .site-language-picker [data-language]')) failures.push('Language capture lacks scoped original / global controls');
if (manifest.products.length !== 76) failures.push('Unexpected product count');
for (const product of manifest.products) {
  if (product.modelUrl !== null || product.turntableFrames !== null || product.displayMode !== 'gallery') failures.push('Unsupported 360 model assertion: ' + product.productId);
  for (const image of product.imageUrls) if (!fs.existsSync(path.join(root, image))) failures.push('Gallery file missing: ' + image);
  for (const url of Object.values(product.localizedUrls)) if (!fs.existsSync(path.join(root, url))) failures.push('Localized URL missing: ' + url);
}
const routeDoc = JSON.parse(fs.readFileSync(path.join(root, 'manus-routes.json')));
for (const entry of routeDoc.routes) {
  const file = entry.path === '/' ? 'index.html' : entry.path.slice(1);
  if (!fs.existsSync(path.join(root, file))) failures.push('Route missing: ' + entry.path);
}
const result = {
  checkedAt: new Date().toISOString(),
  preservedFiles: Object.keys(expected).length,
  productPages: ids.length * 4,
  catalogueProducts: manifest.products.length,
  routeCount: routeDoc.routes.length,
  failures,
  passed: failures.length === 0
};
fs.writeFileSync(path.join(root, 'docs/static-checks.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
