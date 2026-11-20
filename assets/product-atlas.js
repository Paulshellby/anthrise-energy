/* ANTHRISE Product Atlas. Progressive enhancement; catalogue remains the source of truth.
 * Gallery inspection only: no simulated 3D, mirrored views or automatic rotation.
 */
(function () {
  'use strict';

  const locales = ['en', 'zh', 'es', 'ru'];
  const languageIndex = { en: 0, zh: 1, es: 2, ru: 3 };
  const strings = {
    atlas: ['Product Atlas', '产品图鉴', 'Atlas de productos', 'Атлас продукции'],
    home: ['Home', '首页', 'Inicio', 'Главная'],
    all: ['All products', '全部产品', 'Todos los productos', 'Вся продукция'],
    categories: ['Product categories', '产品分类', 'Categorías de productos', 'Категории продукции'],
    storage: ['Energy storage', '储能', 'Almacenamiento', 'Накопители энергии'],
    solar: ['Solar & inverters', '光伏与逆变器', 'Solar e inversores', 'Солнечные панели и инверторы'],
    lighting: ['Lighting', '照明', 'Iluminación', 'Освещение'],
    portable: ['Portable power', '便携电源', 'Energía portátil', 'Портативное питание'],
    inverter: ['Inverters', '逆变器', 'Inversores', 'Инверторы'],
    panels: ['Solar products', '光伏产品', 'Productos solares', 'Солнечная продукция'],
    records: ['catalogue records', '条目录记录', 'registros del catálogo', 'позиций каталога'],
    search: ['Search products or model codes', '搜索产品或型号', 'Buscar producto o modelo', 'Поиск изделия или модели'],
    searchCategory: ['Search this category', '搜索此分类', 'Buscar en esta categoría', 'Поиск в категории'],
    clear: ['Clear search', '清除搜索', 'Borrar búsqueda', 'Очистить поиск'],
    empty: ['No matching products. Try another model or clear the search.', '没有匹配产品，请尝试其他型号或清除搜索。', 'Sin resultados. Pruebe otro modelo o borre la búsqueda.', 'Нет результатов. Попробуйте другую модель или очистите поиск.'],
    results: ['matching products', '个匹配产品', 'productos encontrados', 'найденных изделий'],
    current: ['CURRENT SELECTION', '当前产品', 'SELECCIÓN ACTUAL', 'ТЕКУЩИЙ ВЫБОР'],
    featured: ['Selected products', '精选产品', 'Productos seleccionados', 'Избранная продукция'],
    views: ['Product views', '产品视图', 'Vistas del producto', 'Виды изделия'],
    view: ['View', '视图', 'Vista', 'Вид'],
    previous: ['Previous image', '上一张图片', 'Imagen anterior', 'Предыдущее изображение'],
    next: ['Next image', '下一张图片', 'Imagen siguiente', 'Следующее изображение'],
    zoomIn: ['Zoom in', '放大', 'Acercar', 'Увеличить'],
    zoomOut: ['Zoom out', '缩小', 'Alejar', 'Уменьшить'],
    reset: ['Reset view (0)', '复位视图（0）', 'Restablecer vista (0)', 'Сбросить вид (0)'],
    focus: ['Focus mode', '专注模式', 'Modo de enfoque', 'Режим просмотра'],
    exitFocus: ['Exit focus (Escape)', '退出专注（Escape）', 'Salir del enfoque (Escape)', 'Выйти из просмотра (Escape)'],
    dark: ['Dark studio background', '深色展台背景', 'Fondo de estudio oscuro', 'Тёмный фон студии'],
    light: ['Light studio background', '浅色展台背景', 'Fondo de estudio claro', 'Светлый фон студии'],
    studio: ['Background only; product colours stay unchanged.', '仅改变展台背景，不改变产品颜色。', 'Solo cambia el fondo; se conservan los colores del producto.', 'Меняется только фон; цвета изделия сохраняются.'],
    no360: ['360° unavailable', '360° 暂不可用', '360° no disponible', '360° недоступно'],
    geometry: ['No verified 3D model or complete turntable sequence. These are catalogue images, not a 360° model.', '没有已核验的三维模型或完整转台序列。当前为目录产品图片，不是 360° 模型。', 'Sin modelo 3D verificado ni secuencia completa de giro. Son imágenes del catálogo, no un modelo de 360°.', 'Нет проверенной 3D-модели или полной серии поворота. Это изображения каталога, а не модель 360°.'],
    instructions: ['Use image tabs or ← / → to change views. + / − to zoom; 0 or double-click to reset.', '点击图片标签或按 ← / → 切换。+ / − 缩放；0 或双击复位。', 'Use las pestañas o ← / → para cambiar. + / − para zoom; 0 o doble clic para restablecer.', 'Вкладки или ← / → меняют вид. + / − — масштаб; 0 или двойной щелчок — сброс.'],
    loading: ['Loading product image…', '正在加载产品图片…', 'Cargando imagen…', 'Загрузка изображения…'],
    error: ['This image could not load. Choose another view or retry.', '此图片无法加载，请选择其他视图或重试。', 'No se pudo cargar. Elija otra vista o reintente.', 'Изображение не загрузилось. Выберите другой вид или повторите.'],
    retry: ['Retry image', '重试图片', 'Reintentar imagen', 'Повторить загрузку'],
    specs: ['Key specifications', '主要规格', 'Especificaciones', 'Основные характеристики'],
    model: ['Model', '型号', 'Modelo', 'Модель'],
    technical: ['System considerations', '应用与系统核对', 'Consideraciones del sistema', 'Условия применения и системы'],
    variants: ['Catalogue model options', '目录型号选项', 'Modelos del catálogo', 'Варианты моделей каталога'],
    documents: ['Documents & selection', '资料与选型', 'Documentos y selección', 'Документы и подбор'],
    brief: ['Catalogue product brief · EN / 中文', '目录产品资料 · EN / 中文', 'Resumen del producto · EN / 中文', 'Обзор изделия · EN / 中文'],
    catalogue: ['Full catalogue', '完整产品目录', 'Catálogo completo', 'Полный каталог'],
    checklist: ['Selection checklist · EN / 中文', '选型核对表 · EN / 中文', 'Lista de selección · EN / 中文', 'Список проверки · EN / 中文'],
    documentNote: ['Catalogue references, not final manufacturer datasheets. Manuals, certificates and warranty terms require model-specific confirmation.', '目录参考资料并非最终厂家规格书。正式手册、证书与质保条款需按具体型号确认。', 'Referencias del catálogo, no fichas finales del fabricante. Confirme manuales, certificados y garantía para el modelo.', 'Справочные материалы, не окончательные паспорта производителя. Инструкции, сертификаты и гарантия подтверждаются для модели.'],
    select: ['System selection tool', '系统选型工具', 'Herramienta de selección', 'Инструмент подбора'],
    inquire: ['Discuss this product', '咨询此产品', 'Consultar este producto', 'Обсудить это изделие'],
    compare: ['Compare products', '对比产品', 'Comparar productos', 'Сравнить изделия'],
    compareNote: ['Compare catalogue specifications within the same category. This does not establish electrical or system compatibility.', '仅对比同类产品的目录规格，不代表电气或系统兼容性判断。', 'Compare datos de la misma categoría. No confirma compatibilidad eléctrica ni del sistema.', 'Сравниваются данные одной категории. Это не подтверждение электрической или системной совместимости.'],
    first: ['First product', '产品一', 'Primer producto', 'Первое изделие'],
    second: ['Second product', '产品二', 'Segundo producto', 'Второе изделие'],
    different: ['Select two different products.', '请选择两个不同产品。', 'Seleccione dos productos diferentes.', 'Выберите два разных изделия.'],
    notListed: ['Not listed', '目录未列出', 'No indicado', 'Не указано'],
    close: ['Close', '关闭', 'Cerrar', 'Закрыть'],
    fullImage: ['Full-resolution image', '完整高分辨率图片', 'Imagen en alta resolución', 'Изображение полного разрешения'],
    fullImageNote: ['Enlarged complete catalogue image — not a new angle or 3D detail.', '放大完整目录图片；不是新增角度或三维细节。', 'Imagen completa ampliada; no es un nuevo ángulo ni un detalle 3D.', 'Увеличенное полное изображение; это не новый ракурс и не 3D-деталь.'],
    openImage: ['Open complete image', '查看完整图片', 'Abrir imagen completa', 'Открыть полное изображение'],
    illustration: ['Catalogue design illustration; verify the final configuration.', '目录设计示意，请核对最终配置。', 'Ilustración de diseño del catálogo; confirme la configuración final.', 'Иллюстрация дизайна из каталога; уточните окончательную комплектацию.'],
    source: ['Specifications from the active product catalogue. Values and units are preserved.', '规格来源于当前产品目录，保留原始数值与单位。', 'Datos del catálogo vigente; se conservan valores y unidades.', 'Данные текущего каталога; значения и единицы сохранены.']
  };

  // Accurate translations of existing catalogue cautions where the legacy copy map is generic.
  // This is a text-localization layer, not a second product or specification dataset.
  const cautionCopy = {
    'Website selection code. Factory model pending confirmation.': ['Código de selección del sitio. Modelo de fábrica pendiente de confirmación.', 'Код подбора на сайте. Заводская модель требует подтверждения.'],
    'Open the full product catalogue for each AE-E or AE-I model code.': ['Abra el catálogo completo para cada código de modelo AE-E o AE-I.', 'Откройте полный каталог для каждого кода модели AE-E или AE-I.'],
    'Model codes and nominal ranges are proposed concepts, not production claims.': ['Los códigos y rangos nominales son conceptos propuestos, no afirmaciones de producción.', 'Коды моделей и номинальные диапазоны — предлагаемые концепции, а не заявления о серийной продукции.'],
    'Confirm voltage, BMS, phases, AC outputs, ports and certifications in supplier documentation.': ['Confirme tensión, BMS, fases, salidas CA, puertos y certificaciones en la documentación del proveedor.', 'Подтвердите напряжение, BMS, фазы, выходы AC, порты и сертификацию по документации поставщика.'],
    'Confirm battery voltage and inverter compatibility': ['Confirme la tensión de batería y la compatibilidad del inversor', 'Подтвердите напряжение батареи и совместимость инвертора'],
    'Validate continuous/peak loads and usable capacity': ['Verifique cargas continuas y de pico y capacidad útil', 'Проверьте длительные и пиковые нагрузки и полезную ёмкость'],
    'Check installation, communication and local compliance': ['Compruebe montaje, comunicación y conformidad local', 'Проверьте монтаж, связь и местные требования'],
    'Confirm final datasheet for selected model': ['Confirme la ficha final del modelo seleccionado', 'Подтвердите окончательный паспорт выбранной модели'],
    'Check application, compatibility and compliance': ['Compruebe aplicación, compatibilidad y conformidad', 'Проверьте применение, совместимость и соответствие требованиям'],
    'Confirm prices and availability at quotation': ['Confirme precios y disponibilidad al solicitar la oferta', 'Уточните цены и доступность при получении предложения'],
    'Match the model to installation, lighting objectives and site conditions.': ['Seleccione el modelo según montaje, objetivos de iluminación y condiciones del lugar.', 'Подберите модель по монтажу, задачам освещения и условиям объекта.'],
    'Check measured output, power supply, protection requirements and controls.': ['Compruebe la salida medida, alimentación, requisitos de protección y controles.', 'Проверьте измеренные характеристики, питание, требования к защите и управление.'],
    'Confirm final specifications and applicable compliance documents for the selected model.': ['Confirme las especificaciones finales y los documentos de conformidad del modelo elegido.', 'Подтвердите окончательные характеристики и документы соответствия выбранной модели.']
  };

  const iconPaths = {
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    plus: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M7 10.5h7M10.5 7v7"/>',
    minus: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M7 10.5h7"/>',
    focus: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"/>',
    reset: '<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    left: '<path d="m14 6-6 6 6 6"/>',
    right: '<path d="m10 6 6 6-6 6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
    compare: '<path d="M4 5h6v14H4zM14 5h6v14h-6z"/>',
    storage: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 1h6M9 9h6m-6 5h6"/>',
    solar: '<path d="M5 7h14l3 12H2L5 7Zm7 0v12M4 13h16M9 22h6M12 19v3M12 1v2M4 2l2 2m14-2-2 2"/>',
    lighting: '<path d="M8 15a6 6 0 1 1 8 0l-1 3H9l-1-3ZM9 21h6M12 1v1"/>'
  };
  const icon = name => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (iconPaths[name] || iconPaths.arrow) + '</svg>';
  const escapeHTML = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function mount() {
    if (document.getElementById('product-atlas')) return;
    const all = window.ANTHRISE_PRODUCTS || [];
    const page = window.ANTHRISE_PAGE || {};
    const params = new URLSearchParams(location.search);
    const requested = params.get('id') || params.get('model') || page.id;
    const product = all.find(p => p.id === requested || p.modelCode === requested || (p.modelCodes || []).includes(requested));
    const content = document.getElementById('content');
    if (!product || !content || content.hidden) return; // Leave the original not-found/fallback intact.
    const langCandidate = params.get('lang') || page.lang || document.documentElement.lang.split('-')[0];
    const lang = locales.includes(langCandidate) ? langCandidate : 'en';
    const idx = languageIndex[lang];
    const copy = window.ANTHRISE_DETAIL_COPY || {};
    const text = key => (strings[key] || [key, key, key, key])[idx];
    const translate = (en, zh) => lang === 'zh' ? (zh || en) : lang === 'en' ? en : (cautionCopy[en] || copy[en] || [])[lang === 'es' ? 0 : 1] || en;
    const localized = values => Array.isArray(values) ? values[idx] || values[0] || '' : values || '';
    const name = p => translate(p.en || p.id, p.zh);
    const model = p => p.modelCode || p.id;
    const group = p => ['storage', 'portable'].includes(p.category) ? 'storage' : p.category === 'lighting' ? 'lighting' : 'solar';
    const description = p => p['description' + { en: 'En', zh: 'Zh', es: 'Es', ru: 'Ru' }[lang]] || translate(p.descriptionEn || '', p.descriptionZh);
    const urlFor = (p, locale = lang) => new URL('products/' + encodeURIComponent(p.id) + '-' + locale + '.html', document.baseURI).href;
    const homeURL = (query = '', hash = '') => new URL((lang === 'en' ? 'index.html' : 'home-' + lang + '.html') + query + hash, document.baseURI).href;
    const inquiryURL = p => homeURL('?inquire=' + encodeURIComponent(p.id), '#project-inquiry');
    const rows = p => p.specs && p.specs.length ? p.specs : p.displaySpecs || [];
    const images = (product.gallery && product.gallery.length ? product.gallery : [product.image]).filter(Boolean);
    if (!images.length) return;
    const counts = all.reduce((result, p) => { result[group(p)] += 1; return result; }, { storage: 0, solar: 0, lighting: 0 });
    const featured = ['ess16', 'hybrid6', 'series_horizon', 'origAEV2500', 'jcLight28'].map(id => all.find(p => p.id === id)).filter(Boolean);
    let selectedCategory = group(product);
    let subcategory = 'all';
    let imageIndex = 0;
    let zoom = 1;
    let isFocus = false;
    let isDark = false;
    let drawerOpen = false;
    let savedBodyOverflow = '';
    let imageRequest = 0;
    let query = '';
    let searchAll = false;
    let returnFocus = null;

    const button = (action, glyph, label, extra = '') => '<button type="button" class="atlas-icon-button" data-atlas-action="' + action + '" aria-label="' + escapeHTML(label) + '" title="' + escapeHTML(label) + '" ' + extra + '>' + icon(glyph) + '</button>';
    const viewLabel = i => localized(product.galleryLabels && product.galleryLabels[i]) || text('view') + ' ' + (i + 1);
    const technical = (product.technicalFeaturesEn || []).map((en, i) => translate(en, (product.technicalFeaturesZh || [])[i]));
    const tagLabels = {
      Residential: ['Residential', '家用', 'Residencial', 'Для дома'],
      Hybrid: ['Hybrid', '混合型', 'Híbrido', 'Гибридный'],
      'Garden & Landscape': ['Garden & Landscape', '庭院与景观', 'Jardín y paisaje', 'Сад и ландшафт'],
      Capacity: ['Capacity', '容量', 'Capacidad', 'Ёмкость'],
      Chemistry: ['Chemistry', '电池体系', 'Química', 'Химический состав']
    };
    const tagText = tag => {
      if (tagLabels[tag]) return localized(tagLabels[tag]);
      const prefix = /^(Capacity|Chemistry)(.+)$/.exec(tag);
      return prefix ? localized(tagLabels[prefix[1]]) + ' · ' + prefix[2] : translate(tag, tag);
    };
    const resources = window.ANTHRISE_RESOURCES;
    const application = resources && resources.applicationKeys(product).map(key => localized(resources.scenes[key])).join(' · ');
    const primaryApplication = resources && localized(resources.scenes[resources.applicationKeys(product)[0]]);
    const guide = resources ? resources.guide(product) : product.category;
    const download = (file, title) => '<a class="atlas-download" href="' + escapeHTML(new URL('downloads/' + file, document.baseURI).href) + '" download target="_blank" rel="noopener">' + icon('download') + '<span>' + escapeHTML(title) + '</span></a>';
    const root = document.createElement('section');
    root.id = 'product-atlas';
    root.className = 'product-atlas';
    root.dataset.atlasProductId = product.id;
    root.dataset.lang = lang;
    root.lang = lang;
    root.setAttribute('aria-label', text('atlas'));
    root.innerHTML = `
      <button type="button" class="atlas-drawer-backdrop" data-atlas-action="closeDrawer" tabindex="-1" aria-label="${escapeHTML(text('close'))}" hidden></button>
      <aside class="atlas-sidebar" id="atlas-categories" aria-label="${escapeHTML(text('categories'))}">
        <div class="atlas-sidebar-heading"><div><span class="atlas-eyebrow">ANTHRISE</span><h2>${escapeHTML(text('atlas'))}</h2></div>${button('closeDrawer', 'close', text('close'))}</div>
        <nav class="atlas-context-links"><a href="${homeURL()}">${escapeHTML(text('home'))}</a><span>/</span><a href="${homeURL('', '#products')}">${escapeHTML(text('all'))}</a></nav>
        <p class="atlas-record-count">${all.length} ${escapeHTML(text('records'))}</p>
        <div class="atlas-category-buttons">${['storage', 'solar', 'lighting'].map(cat => `<button type="button" data-atlas-category="${cat}" aria-pressed="${cat === selectedCategory}">${icon(cat)}<span>${escapeHTML(text(cat))}</span><b>${counts[cat]}</b></button>`).join('')}</div>
        <label class="atlas-search atlas-sidebar-search">${icon('search')}<input id="atlas-category-search" type="search" placeholder="${escapeHTML(text('searchCategory'))}" aria-label="${escapeHTML(text('searchCategory'))}" autocomplete="off"></label>
        <label class="atlas-subcategory-label" for="atlas-subcategory">${escapeHTML(text('categories'))}</label>
        <select id="atlas-subcategory" class="atlas-select"></select>
        <p id="atlas-list-status" class="atlas-list-status" aria-live="polite"></p>
        <nav id="atlas-product-list" class="atlas-product-list" aria-label="${escapeHTML(text('all'))}"></nav>
        <div class="atlas-pinned"><span class="atlas-eyebrow">${escapeHTML(text('current'))}</span><div><img src="${escapeHTML(images[0])}" alt="" width="52" height="64"><strong>${escapeHTML(model(product))}</strong></div><p>${escapeHTML(primaryApplication || description(product))}</p><button type="button" class="atlas-text-button" data-atlas-action="compare">${escapeHTML(text('compare'))}${icon('arrow')}</button></div>
      </aside>
      <div class="atlas-center">
        <div class="atlas-center-top"><button type="button" class="atlas-category-trigger atlas-text-button" data-atlas-action="openDrawer" aria-controls="atlas-categories" aria-expanded="false">${icon('menu')}${escapeHTML(text('categories'))}</button><span class="atlas-eyebrow">${escapeHTML(text('featured'))}</span><a class="atlas-index-link" href="${homeURL('', '#products')}">${escapeHTML(text('all'))}${icon('arrow')}</a></div>
        <nav class="atlas-featured" role="tablist" aria-label="${escapeHTML(text('featured'))}">${featured.map(p => `<a role="tab" href="${escapeHTML(urlFor(p))}" aria-selected="${p.id === product.id}" aria-controls="product-stage" tabindex="${p.id === product.id ? 0 : -1}" class="atlas-featured-tab"><img src="${escapeHTML(p.image)}" alt="" width="38" height="50" loading="lazy"><span><strong>${escapeHTML(name(p))}</strong><small>${escapeHTML(model(p))}</small></span></a>`).join('')}</nav>
        <div class="atlas-stage" data-studio="light">
          <div class="atlas-stage-title"><span class="atlas-eyebrow">${escapeHTML(text('views'))}</span><span id="atlas-view-count"></span></div>
          <div class="atlas-image-viewport" id="product-stage" tabindex="0" role="group" aria-label="${escapeHTML(name(product) + ' · ' + text('views'))}" aria-describedby="atlas-instructions atlas-geometry"><div class="atlas-image-frame"><img id="atlas-main-image" alt="" draggable="false" decoding="async"></div></div>
          <div class="atlas-image-status" id="atlas-image-status" role="status" aria-live="polite"></div>
          <button type="button" class="atlas-retry atlas-text-button" data-atlas-action="retry" hidden>${escapeHTML(text('retry'))}</button>
          <div class="atlas-tools" role="toolbar" aria-label="${escapeHTML(text('views'))}">${button('zoomIn', 'plus', text('zoomIn'))}${button('zoomOut', 'minus', text('zoomOut'))}${button('focus', 'focus', text('focus'), 'aria-pressed="false"')}${button('lighting', 'sun', text('dark'), 'aria-pressed="false"')}${button('reset', 'reset', text('reset'))}</div>
          <div class="atlas-stage-footer"><span id="atlas-zoom-level" aria-live="polite">100%</span><button class="atlas-unavailable" type="button" disabled aria-describedby="atlas-geometry">${escapeHTML(text('no360'))}</button><span class="atlas-studio-note">${escapeHTML(text('studio'))}</span></div>
        </div>
        <div class="atlas-gallery"><button type="button" class="atlas-icon-button" data-atlas-action="previous" aria-label="${escapeHTML(text('previous'))}">${icon('left')}</button><div class="atlas-view-tabs" role="tablist" aria-label="${escapeHTML(text('views'))}">${images.map((path, i) => `<button type="button" id="atlas-view-${i}" role="tab" data-atlas-view="${i}" aria-selected="${i === 0}" aria-controls="product-stage" tabindex="${i === 0 ? 0 : -1}"><img src="${escapeHTML(path)}" alt="" loading="lazy"><span>${i + 1}. ${escapeHTML(viewLabel(i))}</span></button>`).join('')}</div><button type="button" class="atlas-icon-button" data-atlas-action="next" aria-label="${escapeHTML(text('next'))}">${icon('right')}</button></div>
        <p class="atlas-instructions" id="atlas-instructions">${escapeHTML(text('instructions'))}</p>
        <p class="atlas-geometry" id="atlas-geometry">${escapeHTML(text('geometry'))}</p>
      </div>
      <aside class="atlas-details" aria-label="${escapeHTML(text('specs'))}">
        <div class="atlas-detail-search"><label class="atlas-search">${icon('search')}<input id="atlas-global-search" type="search" placeholder="${escapeHTML(text('search'))}" aria-label="${escapeHTML(text('search'))}" autocomplete="off" aria-controls="atlas-search-results" aria-expanded="false"></label><div id="atlas-search-results" class="atlas-search-results" hidden></div></div>
        <div class="atlas-detail-scroll" tabindex="0" aria-label="${escapeHTML(text('specs'))}">
          <span class="atlas-eyebrow">${escapeHTML(text(group(product)))}</span><h1>${escapeHTML(name(product))}</h1><div class="atlas-model"><span>${escapeHTML(text('model'))}</span><strong>${escapeHTML(model(product))}</strong></div>
          <div class="atlas-tags">${(product.tags || []).map(tag => '<span>' + escapeHTML(tagText(tag)) + '</span>').join('')}</div>
          <p class="atlas-description">${escapeHTML(description(product))}</p>
          ${product.visualStatus === 'design-illustration' ? '<p class="atlas-caution">' + escapeHTML(text('illustration')) + '</p>' : ''}
          <section class="atlas-section"><h2>${escapeHTML(text('specs'))}</h2><dl class="atlas-specs">${rows(product).map(row => '<div><dt>' + escapeHTML(localized(row.label)) + '</dt><dd>' + escapeHTML(localized(row.value)) + '</dd></div>').join('')}</dl><p class="atlas-source">${escapeHTML(text('source'))}</p></section>
          <section class="atlas-section"><h2>${escapeHTML(text('technical'))}</h2>${application ? '<p class="atlas-application">' + escapeHTML(application) + '</p>' : ''}<ul class="atlas-technical">${technical.map(item => '<li>' + escapeHTML(item) + '</li>').join('')}</ul></section>
          ${(product.modelCodes || []).length ? '<section class="atlas-section"><h2>' + escapeHTML(text('variants')) + '</h2><div class="atlas-tags">' + product.modelCodes.map(code => '<span>' + escapeHTML(code) + '</span>').join('') + '</div></section>' : ''}
          <button type="button" class="atlas-closeup" data-atlas-action="closeup" aria-pressed="false"><img src="${escapeHTML(images[0])}" alt="" loading="lazy"><span><strong>${escapeHTML(text('fullImage'))}</strong><small>${escapeHTML(text('fullImageNote'))}</small></span>${icon('right')}</button>
          <section class="atlas-section"><h2>${escapeHTML(text('documents'))}</h2>${download('products/' + product.id + '-brief-en-zh.pdf', text('brief'))}${download('catalogues/ANTHRISE-' + (product.category === 'lighting' ? 'LIGHTING' : 'ENERGY') + '-Catalogue-' + lang.toUpperCase() + '.pdf', text('catalogue') + ' · ' + lang.toUpperCase())}${download('guides/' + guide + '-selection-en-zh.pdf', text('checklist'))}<p class="atlas-source">${escapeHTML(text('documentNote'))}</p><a class="atlas-text-button" href="${escapeHTML(new URL('official-site.html?lang=' + lang + '#quickmatch', document.baseURI).href)}">${escapeHTML(text('select'))}${icon('arrow')}</a></section>
        </div>
        <div class="atlas-detail-actions"><a class="atlas-primary" href="${escapeHTML(inquiryURL(product))}">${escapeHTML(text('inquire'))}${icon('arrow')}</a><button type="button" class="atlas-secondary" data-atlas-action="compare">${icon('compare')}${escapeHTML(text('compare'))}</button></div>
      </aside>
      <dialog class="atlas-dialog atlas-image-dialog" id="atlas-image-dialog" aria-labelledby="atlas-image-heading"><div class="atlas-dialog-heading"><h2 id="atlas-image-heading">${escapeHTML(text('fullImage'))}</h2>${button('closeImage', 'close', text('close'))}</div><p>${escapeHTML(text('fullImageNote'))}</p><img id="atlas-full-image" alt=""><a class="atlas-text-button" id="atlas-original-image" target="_blank" rel="noopener">${escapeHTML(text('openImage'))}${icon('arrow')}</a></dialog>
      <dialog class="atlas-dialog atlas-compare-dialog" id="atlas-compare-dialog" aria-labelledby="atlas-compare-heading"><div class="atlas-dialog-heading"><h2 id="atlas-compare-heading">${escapeHTML(text('compare'))}</h2>${button('closeCompare', 'close', text('close'))}</div><p class="atlas-compare-note">${escapeHTML(text('compareNote'))}</p><div class="atlas-compare-selectors"><label>${escapeHTML(text('first'))}<select id="atlas-compare-first" class="atlas-select"></select></label><label>${escapeHTML(text('second'))}<select id="atlas-compare-second" class="atlas-select"></select></label></div><div id="atlas-compare-table" class="atlas-compare-table" tabindex="0" aria-live="polite"></div></dialog>
    `;
    content.before(root);
    document.body.classList.add('anthrise-atlas-page');
    const $ = selector => root.querySelector(selector);
    const stage = $('#product-stage');
    const frame = $('.atlas-image-frame');
    const mainImage = $('#atlas-main-image');
    const sidebar = $('.atlas-sidebar');
    const detail = $('.atlas-details');
    const featuredTabs = $('.atlas-featured');
    const narrow = window.matchMedia('(max-width: 1100px)');

    function measureHeader() {
      const header = document.querySelector('body > header');
      root.style.setProperty('--atlas-header-height', (header ? Math.ceil(header.getBoundingClientRect().height) : 0) + 'px');
    }
    measureHeader();
    if (window.ResizeObserver) {
      const header = document.querySelector('body > header');
      if (header) new ResizeObserver(measureHeader).observe(header);
    }
    window.addEventListener('resize', measureHeader, { passive: true });

    function searchMatches(p, term) {
      return [p.id, p.en, p.zh, name(p), p.modelCode, ...(p.modelCodes || []), ...(p.tags || [])].join(' ').toLocaleLowerCase().includes(term.toLocaleLowerCase());
    }
    function updateSubcategories() {
      const categories = selectedCategory === 'storage' ? ['storage', 'portable'] : selectedCategory === 'solar' ? ['solar', 'inverter'] : ['lighting'];
      $('#atlas-subcategory').innerHTML = '<option value="all">' + escapeHTML(text('all')) + ' · ' + counts[selectedCategory] + '</option>' + categories.map(cat => '<option value="' + cat + '">' + escapeHTML(text(cat === 'solar' ? 'panels' : cat)) + ' · ' + all.filter(p => p.category === cat).length + '</option>').join('');
      $('#atlas-subcategory').value = subcategory;
    }
    function renderList() {
      const matched = all.filter(p => (searchAll || group(p) === selectedCategory) && (searchAll || subcategory === 'all' || p.category === subcategory) && searchMatches(p, query));
      $('#atlas-list-status').textContent = matched.length + ' ' + text('results');
      $('#atlas-product-list').innerHTML = matched.length ? matched.map(p => '<a href="' + escapeHTML(urlFor(p)) + '"' + (p.id === product.id ? ' aria-current="page"' : '') + '><span>' + escapeHTML(name(p)) + '</span><small>' + escapeHTML(model(p)) + '</small></a>').join('') : '<p class="atlas-empty">' + escapeHTML(text('empty')) + '</p><button type="button" class="atlas-text-button" data-atlas-action="clearSearch">' + escapeHTML(text('clear')) + '</button>';
      const results = $('#atlas-search-results');
      const showResults = searchAll && query.length > 0;
      results.hidden = !showResults;
      $('#atlas-global-search').setAttribute('aria-expanded', String(showResults));
      results.innerHTML = showResults ? '<p class="atlas-list-status" role="status">' + matched.length + ' ' + escapeHTML(text('results')) + '</p>' + (matched.length ? matched.map(p => '<a href="' + escapeHTML(urlFor(p)) + '"><strong>' + escapeHTML(name(p)) + '</strong><small>' + escapeHTML(model(p)) + '</small></a>').join('') : '<p class="atlas-empty">' + escapeHTML(text('empty')) + '</p>') : '';
    }
    function setSearch(value, fromGlobal) {
      query = value.trim();
      searchAll = fromGlobal && query.length > 0;
      $('#atlas-category-search').value = value;
      $('#atlas-global-search').value = value;
      renderList();
    }
    $('#atlas-category-search').addEventListener('input', event => setSearch(event.target.value, false));
    $('#atlas-global-search').addEventListener('input', event => setSearch(event.target.value, true));
    $('#atlas-global-search').addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') { const first = $('#atlas-search-results a'); if (first) { event.preventDefault(); first.focus(); } }
      if (event.key === 'Enter') { const first = $('#atlas-search-results a'); if (first) first.click(); }
    });
    $('#atlas-subcategory').addEventListener('change', event => { subcategory = event.target.value; searchAll = false; renderList(); });
    updateSubcategories();
    renderList();

    function setZoom(value, center = true) {
      zoom = Math.max(0.65, Math.min(3, value));
      frame.style.width = zoom * 100 + '%';
      frame.style.height = zoom * 100 + '%';
      frame.style.minWidth = zoom * 100 + '%';
      frame.style.minHeight = zoom * 100 + '%';
      $('#atlas-zoom-level').textContent = Math.round(zoom * 100) + '%';
      $('[data-atlas-action="zoomIn"]').disabled = zoom >= 3;
      $('[data-atlas-action="zoomOut"]').disabled = zoom <= 0.65;
      if (center) requestAnimationFrame(() => {
        stage.scrollLeft = Math.max(0, (stage.scrollWidth - stage.clientWidth) / 2);
        stage.scrollTop = Math.max(0, (stage.scrollHeight - stage.clientHeight) / 2);
      });
    }
    function reset() { setZoom(1); }
    function showImage(index) {
      imageIndex = (index + images.length) % images.length;
      const request = ++imageRequest;
      const status = $('#atlas-image-status');
      status.textContent = text('loading');
      status.hidden = false;
      $('[data-atlas-action="retry"]').hidden = true;
      mainImage.style.visibility = 'hidden';
      mainImage.onload = function () { if (request !== imageRequest) return; status.hidden = true; mainImage.style.visibility = 'visible'; };
      mainImage.onerror = function () { if (request !== imageRequest) return; status.textContent = text('error'); $('[data-atlas-action="retry"]').hidden = false; };
      mainImage.alt = name(product) + ' · ' + viewLabel(imageIndex);
      mainImage.src = images[imageIndex];
      if (mainImage.complete && mainImage.naturalWidth) mainImage.onload();
      $('#atlas-view-count').textContent = (imageIndex + 1).toString().padStart(2, '0') + ' / ' + images.length.toString().padStart(2, '0');
      root.querySelectorAll('[data-atlas-view]').forEach(tab => { const active = Number(tab.dataset.atlasView) === imageIndex; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
      reset();
    }
    function syncSidebar() {
      const hidden = isFocus || (narrow.matches && !drawerOpen);
      sidebar.inert = hidden;
      sidebar.setAttribute('aria-hidden', String(hidden));
      sidebar.classList.toggle('is-open', drawerOpen);
      sidebar.setAttribute('role', narrow.matches && drawerOpen ? 'dialog' : 'complementary');
      if (narrow.matches && drawerOpen) sidebar.setAttribute('aria-modal', 'true'); else sidebar.removeAttribute('aria-modal');
      $('.atlas-drawer-backdrop').hidden = !drawerOpen || !narrow.matches;
      $('[data-atlas-action="openDrawer"]').setAttribute('aria-expanded', String(drawerOpen));
    }
    function setDrawer(open) {
      drawerOpen = open && narrow.matches && !isFocus;
      syncSidebar();
      if (drawerOpen) sidebar.querySelector('[data-atlas-action="closeDrawer"]').focus();
      else if (narrow.matches && !isFocus) $('[data-atlas-action="openDrawer"]').focus();
    }
    function setFocus(value) {
      if (value === isFocus) return;
      isFocus = value;
      drawerOpen = false;
      root.classList.toggle('is-focus', value);
      detail.inert = value;
      featuredTabs.inert = value;
      detail.setAttribute('aria-hidden', String(value));
      featuredTabs.setAttribute('aria-hidden', String(value));
      const control = $('[data-atlas-action="focus"]');
      control.setAttribute('aria-pressed', String(value));
      control.setAttribute('aria-label', text(value ? 'exitFocus' : 'focus'));
      control.title = text(value ? 'exitFocus' : 'focus');
      if (value) { returnFocus = document.activeElement; savedBodyOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
      else { document.body.style.overflow = savedBodyOverflow; if (returnFocus && returnFocus.isConnected) returnFocus.focus(); }
      syncSidebar();
      setZoom(zoom);
      if (value) control.focus();
    }
    if (narrow.addEventListener) narrow.addEventListener('change', () => { drawerOpen = false; syncSidebar(); });
    else narrow.addListener(() => { drawerOpen = false; syncSidebar(); });
    syncSidebar();

    function openImage() {
      const dialog = $('#atlas-image-dialog');
      // The catalogue may also include detail shots. Close-up deliberately opens
      // the complete primary image, never relabels a crop as an additional angle.
      $('#atlas-full-image').src = images[0];
      $('#atlas-full-image').alt = name(product) + ' · ' + viewLabel(0);
      $('#atlas-original-image').href = new URL(images[0], document.baseURI).href;
      $('[data-atlas-action="closeup"]').setAttribute('aria-pressed', 'true');
      dialog.showModal();
    }
    $('#atlas-image-dialog').addEventListener('close', () => $('[data-atlas-action="closeup"]').setAttribute('aria-pressed', 'false'));
    const compareProducts = all.filter(p => p.category === product.category);
    function renderComparison() {
      const a = all.find(p => p.id === $('#atlas-compare-first').value);
      const b = all.find(p => p.id === $('#atlas-compare-second').value);
      if (!a || !b || a.id === b.id) { $('#atlas-compare-table').innerHTML = '<p role="status">' + escapeHTML(text('different')) + '</p>'; return; }
      // Align by the actual English specification label, never by generic configuration_N keys.
      const keyFor = row => String(Array.isArray(row.label) ? row.label[0] : row.label).trim().toLowerCase();
      const maps = [a, b].map(p => new Map(rows(p).map(row => [keyFor(row), row])));
      const keys = [...new Set([...maps[0].keys(), ...maps[1].keys()])];
      const tableRows = keys.map(key => { const row = maps[0].get(key) || maps[1].get(key); return '<tr><th scope="row">' + escapeHTML(localized(row.label)) + '</th>' + maps.map(map => '<td>' + escapeHTML(map.has(key) ? localized(map.get(key).value) : text('notListed')) + '</td>').join('') + '</tr>'; }).join('');
      $('#atlas-compare-table').innerHTML = '<table><caption>' + escapeHTML(text('compare')) + '</caption><thead><tr><th scope="col">' + escapeHTML(text('specs')) + '</th>' + [a, b].map(p => '<th scope="col"><a href="' + escapeHTML(urlFor(p)) + '">' + escapeHTML(name(p)) + '<small>' + escapeHTML(model(p)) + '</small></a></th>').join('') + '</tr></thead><tbody>' + tableRows + '</tbody></table>';
    }
    function openComparison() {
      const options = compareProducts.map(p => '<option value="' + escapeHTML(p.id) + '">' + escapeHTML(model(p) + ' · ' + name(p)) + '</option>').join('');
      $('#atlas-compare-first').innerHTML = options;
      $('#atlas-compare-second').innerHTML = options;
      $('#atlas-compare-first').value = product.id;
      $('#atlas-compare-second').value = (compareProducts.find(p => p.id !== product.id) || product).id;
      renderComparison();
      $('#atlas-compare-dialog').showModal();
    }
    $('#atlas-compare-first').addEventListener('change', renderComparison);
    $('#atlas-compare-second').addEventListener('change', renderComparison);
    root.querySelectorAll('.atlas-dialog').forEach(dialog => dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }));

    const actions = {
      zoomIn: () => setZoom(zoom * 1.25), zoomOut: () => setZoom(zoom / 1.25), reset,
      previous: () => showImage(imageIndex - 1), next: () => showImage(imageIndex + 1), retry: () => showImage(imageIndex),
      focus: () => setFocus(!isFocus), openDrawer: () => setDrawer(true), closeDrawer: () => setDrawer(false),
      clearSearch: () => setSearch('', false), closeup: openImage, closeImage: () => $('#atlas-image-dialog').close(),
      compare: openComparison, closeCompare: () => $('#atlas-compare-dialog').close(),
      lighting: () => { isDark = !isDark; $('.atlas-stage').dataset.studio = isDark ? 'dark' : 'light'; const control = $('[data-atlas-action="lighting"]'); control.setAttribute('aria-pressed', String(isDark)); control.setAttribute('aria-label', text(isDark ? 'light' : 'dark')); control.title = text(isDark ? 'light' : 'dark'); }
    };
    root.addEventListener('click', event => {
      const category = event.target.closest('[data-atlas-category]');
      if (category) {
        selectedCategory = category.dataset.atlasCategory; subcategory = 'all'; searchAll = false;
        root.querySelectorAll('[data-atlas-category]').forEach(control => control.setAttribute('aria-pressed', String(control === category)));
        updateSubcategories(); renderList();
      }
      const tab = event.target.closest('[data-atlas-view]');
      if (tab) showImage(Number(tab.dataset.atlasView));
      const control = event.target.closest('[data-atlas-action]');
      if (control && !control.disabled && actions[control.dataset.atlasAction]) actions[control.dataset.atlasAction]();
    });
    function tabKeyboard(container, selectOnFocus) {
      container.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        const tabs = [...container.querySelectorAll('[role="tab"]')];
        const current = tabs.indexOf(event.target.closest('[role="tab"]'));
        if (current < 0) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        tabs.forEach(tab => { tab.tabIndex = -1; });
        tabs[next].tabIndex = 0; tabs[next].focus();
        if (selectOnFocus) showImage(Number(tabs[next].dataset.atlasView));
      });
    }
    tabKeyboard($('.atlas-view-tabs'), true);
    tabKeyboard(featuredTabs, false);
    stage.addEventListener('dblclick', reset);
    stage.addEventListener('keydown', event => {
      if (event.target !== stage) return;
      const keyActions = { ArrowLeft: actions.previous, ArrowRight: actions.next, '+': actions.zoomIn, '=': actions.zoomIn, '-': actions.zoomOut, '0': reset };
      if (keyActions[event.key]) { event.preventDefault(); keyActions[event.key](); }
    });
    // Deliberately retain ordinary wheel/page scroll; modifier zoom belongs only to this stage.
    stage.addEventListener('wheel', event => {
      if (!event.altKey || event.ctrlKey || event.metaKey) return;
      event.preventDefault(); setZoom(zoom * Math.exp(-event.deltaY * 0.0016));
    }, { passive: false });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if ($('#atlas-image-dialog').open || $('#atlas-compare-dialog').open) return; // Native dialog handles Escape first.
        if (drawerOpen) setDrawer(false); else if (isFocus) setFocus(false);
        $('#atlas-search-results').hidden = true;
        $('#atlas-global-search').setAttribute('aria-expanded', 'false');
      }
      if (event.key === 'Tab' && drawerOpen) {
        const controls = [...sidebar.querySelectorAll('a[href],button:not([disabled]),input,select')].filter(el => el.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.atlas-detail-search')) { $('#atlas-search-results').hidden = true; $('#atlas-global-search').setAttribute('aria-expanded', 'false'); }
    });
    // Capture, rather than remove, the original language listeners: route to the same real SKU.
    document.addEventListener('click', event => {
      const control = event.target.closest('header [data-lang], .site-language-picker [data-language]');
      const locale = control && (control.dataset.language || control.dataset.lang);
      if (!control || !locales.includes(locale)) return;
      event.preventDefault(); event.stopImmediatePropagation();
      try { localStorage.setItem('anthrise_lang', locale); } catch (error) { /* Private mode remains usable. */ }
      location.assign(urlFor(product, locale));
    }, true);

    function normalizeExistingLinks() {
      document.querySelectorAll('a[href]').forEach(link => {
        if (link.closest('#product-atlas, .site-language-picker, .global-language-panel')) return;
        let url;
        try { url = new URL(link.getAttribute('href'), document.baseURI); } catch (error) { return; }
        if (url.origin !== location.origin) return;
        if (url.hash === '#stories') {
          url.hash = '#hero-section';
          link.href = url.pathname + url.search + url.hash;
        }
        if (url.searchParams.has('inquire')) link.href = inquiryURL(product);
        else if (/\/(index|home-(zh|es|ru))\.html$/.test(url.pathname)) link.href = homeURL(url.search, url.hash);
      });
      const oldLayout = content.querySelector('.product-layout');
      if (oldLayout) { oldLayout.setAttribute('aria-hidden', 'true'); oldLayout.inert = true; }
    }
    function normalizeLanguageLinks() {
      document.querySelectorAll('.site-language-picker [data-language]').forEach(link => {
        const locale = link.dataset.language;
        if (!locales.includes(locale)) return;
        link.href = urlFor(product, locale);
        if (locale === lang) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }
    window.addEventListener('anthrise:language-ready', () => {
      queueMicrotask(() => {
        normalizeLanguageLinks();
        normalizeExistingLinks();
      });
    });
    normalizeLanguageLinks();
    normalizeExistingLinks();
    const documentPanel = document.getElementById('documentPanel');
    if (documentPanel) new MutationObserver(normalizeExistingLinks).observe(documentPanel, { childList: true, subtree: true });
    showImage(0);

    // Consume the parent-generated provenance manifest, but do not activate 3D without a renderer.
    fetch(new URL('assets/product-model-manifest.json', document.baseURI).href, { credentials: 'same-origin' })
      .then(response => response.ok ? response.json() : null)
      .then(manifest => {
        const entry = manifest && Array.isArray(manifest.products) && manifest.products.find(p => p.productId === product.id);
        if (!entry) return;
        root.dataset.displayMode = 'gallery';
        root.dataset.modelSource = entry.modelSource || 'catalogue';
        root.dataset.verifiedViewCount = Array.isArray(entry.verifiedViews) ? entry.verifiedViews.length : 0;
      }).catch(() => { root.dataset.displayMode = 'gallery'; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
