(function(){
'use strict';
const origin='https://paulshellby.github.io/anthrise-energy/',legal='深圳市昂旭启元科技有限公司';
const params=new URLSearchParams(location.search),defaults=window.ANTHRISE_PAGE||{};
const lang=['en','zh','es','ru'].includes(params.get('lang'))?params.get('lang'):(defaults.lang||(document.documentElement.lang==='zh-CN'?'zh':document.documentElement.lang)||'en');
const id=params.get('id')||defaults.id;const product=(window.ANTHRISE_PRODUCTS||[]).find(p=>p.id===id);
const kind=product?'product':location.pathname.includes('energy')?'energy':location.pathname.includes('lighting')?'lighting':'home';
const titles={home:{en:'ANTHRISE | Energy Storage, Solar & Lighting Solutions',zh:legal+' | 储能、光伏与照明解决方案',es:'ANTHRISE | Almacenamiento, energía solar e iluminación',ru:'ANTHRISE | Накопители, солнечная энергия и освещение'},energy:{en:'Energy Storage & Inverter Selection | ANTHRISE',zh:'储能与逆变器产品选型 | '+legal},lighting:{en:'Solar & Commercial Lighting | ANTHRISE',zh:'太阳能与工程照明 | '+legal}};
const desc={en:'Explore energy storage, inverters, solar panels, portable power and lighting. Compare product options, review application scenarios and prepare your project inquiry.',zh:'了解深圳市昂旭启元科技有限公司的储能、逆变器、光伏板、便携电源与照明产品，查看应用场景、产品资料及选型工具，提交清晰的项目需求。',es:'Explore almacenamiento, inversores, paneles solares, energía portátil e iluminación. Compare productos, consulte aplicaciones y prepare su consulta.',ru:'Изучите накопители, инверторы, солнечные панели, портативное питание и освещение. Сравните продукцию и подготовьте запрос по проекту.'};
const suffix={en:'Product information, application scenarios and downloadable selection documents.',zh:'查看产品信息、应用场景与可下载的选型资料。',es:'Información, aplicaciones y documentos de selección.',ru:'Сведения, области применения и документы для подбора.'};
const copy=window.ANTHRISE_DETAIL_COPY||{};
function name(p,l){return l==='zh'?p.zh:l==='es'?(copy[p.en]?.[0]||p.en):l==='ru'?(copy[p.en]?.[1]||p.en):p.en;}
const relative=(l)=>kind==='product'?'products/'+product.id+'-'+l+'.html':kind==='home'?(l==='en'?'index.html':'home-'+l+'.html'):kind+(l==='en'?'':'-'+l)+'.html';
function meta(selector,attrs,content){let el=document.head.querySelector(selector);if(!el){el=document.createElement(selector.startsWith('link')?'link':'meta');for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);document.head.append(el);}el.setAttribute(el.tagName==='LINK'?'href':'content',content);}
function apply(){
 const title=product?name(product,lang)+' | ANTHRISE':(titles[kind]?.[lang]||titles[kind]?.en||titles.home.en),description=product?((product.modelCode||'ANTHRISE')+' · '+name(product,lang)+'. '+suffix[lang]):desc[lang];
 document.title=title;meta('meta[name="description"]',{name:'description'},description);meta('meta[name="robots"]',{name:'robots'},'index,follow,max-image-preview:large');
 const canonical=origin+relative(lang);meta('link[rel="canonical"]',{rel:'canonical'},canonical);
 for(const l of (kind==='product'||kind==='home'?['en','zh','es','ru']:['en','zh']))meta('link[hreflang="'+l+'"]',{rel:'alternate',hreflang:l},origin+relative(l));meta('link[hreflang="x-default"]',{rel:'alternate',hreflang:'x-default'},origin+relative('en'));
 const image=origin+(product?.image||'images/anthrise-logo.webp');
 for(const [key,value] of Object.entries({title,description,type:'website',url:canonical,image,site_name:'ANTHRISE'}))meta('meta[property="og:'+key+'"]',{property:'og:'+key},value);
 meta('meta[name="twitter:card"]',{name:'twitter:card'},'summary_large_image');
 let schema=document.getElementById('pageStructuredData');if(!schema){schema=document.createElement('script');schema.type='application/ld+json';schema.id='pageStructuredData';document.head.append(schema);}
 const organization={'@type':'Organization','@id':origin+'#organization',name:legal,legalName:legal,alternateName:'ANTHRISE',url:origin,logo:origin+'images/anthrise-logo.webp'};
 const graph=[organization,{'@type':'WebSite','@id':origin+'#website',url:origin,name:'ANTHRISE',publisher:{'@id':origin+'#organization'},inLanguage:lang}];
 if(product){graph.push({'@type':'Product',name:name(product,lang),description,sku:product.modelCode||product.id,image:[image],url:canonical,brand:{'@type':'Brand',name:'ANTHRISE'}});graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ANTHRISE',item:origin+'index.html'},{'@type':'ListItem',position:2,name:name(product,lang),item:canonical}]});}
 schema.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});
}
// Initial query/PAGE language is the identity of the crawlable document.
apply();window.AnthriseSEO={origin,relative};
})();
