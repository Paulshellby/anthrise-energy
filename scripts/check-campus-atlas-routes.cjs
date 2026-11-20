const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
let assigned = null;
const document = {
  documentElement: { lang: 'zh' },
  readyState: 'loading',
  addEventListener() {},
};
const context = {
  window: {}, document,
  location: { assign(url) { assigned = url; } },
  URL, URLSearchParams,
};
vm.createContext(context);
// Match the campus HTML's data script, not the independent detail-page data shape.
vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/showroom-catalog.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/branch-preview.js'), 'utf8'), context);
const products = context.window.ANTHRISE_SHOWROOM_CATALOG.flatMap(category => category.items || []);
let tested = 0;
for (const language of ['en', 'zh', 'es', 'ru']) {
  document.documentElement.lang = language;
  for (const product of products) {
    assigned = null;
    assert.equal(context.window.__anthriseOpenAtlasProduct(product.id), true);
    const expected = `/products/${encodeURIComponent(product.id)}-${language}.html`;
    assert.equal(assigned, expected);
    assert.ok(fs.existsSync(path.join(root, expected.slice(1))), expected);
    tested++;
  }
}
assigned = null;
assert.equal(context.window.__anthriseOpenAtlasProduct('unknown-missing-sku'), false);
assert.equal(assigned, null);
const evidence = {
  catalogueProducts: products.length,
  validatedLanguageRoutes: tested,
  unknownSkuFallsBack: true,
  passed: true,
};
fs.writeFileSync(path.join(root, 'docs/campus-atlas-route-check.json'), JSON.stringify(evidence, null, 2) + '\n');
console.log(evidence);
