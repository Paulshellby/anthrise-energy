/* One site-wide locale, one globe control, static local translation packs. */
(() => {
 'use strict';
 if(window.ANTHRISE_I18N?.version==='20261124-citypopup1')return;
 const config=window.ANTHRISE_LOCALE_CONFIG;if(!config)return;
 const names=config.names,aliases=config.aliases,normalize=s=>String(s??'').replace(/\s+/g,' ').trim();
 const normalizeLocale=code=>({ 'zh-CN':'zh','zh-Hans':'zh','zh-TW':'zh-Hant','pt':'pt-BR','tl':'fil','iw':'he' }[code]||code);
 let saved;try{saved=localStorage.getItem('anthrise_language')||localStorage.getItem('anthrise_lang')}catch{}
 const requested=normalizeLocale(new URLSearchParams(location.search).get('lang')||saved||document.documentElement.lang),language=Object.hasOwn(names,requested)?requested:'en';
 const nativePaths={en:'/',zh:'/home-zh.html',es:'/home-es.html',ru:'/home-ru.html'},rtl=['ar','fa','he','ur'].includes(language);
 const pattern=config.protectedPattern.replace(/\\(["'])/g,'$1').replace(/\\b/g,'(?![\\p{L}\\p{N}_])').replace('|(?:AE-','|@[A-Za-z0-9_]+|(?:AE-');
 const protectedPattern=new RegExp(pattern,'gu'),textRecords=new WeakMap(),attributeRecords=new WeakMap();
 let pack={},ready=false,started=false,pending=false,observer,resolveReady;const readyPromise=new Promise(resolve=>resolveReady=resolve);
 function parts(raw){const values=[];const key=normalize(raw).replace(protectedPattern,value=>{values.push(value);return '__P'+(values.length-1)+'__'});return {key,values}}
 function meaningful(key){const plain=key.replace(/__P\d+__/g,'').trim();if(['AC','DC','PV','ESS','EMS','LFP','SOC','DIY','CATL','EVE','CALB','NMC','TCP','LAN','WLAN','WiFi','IP','RGB','ASCEND','SEED','ROOT','RISE','HORIZON','UNION','PULSE','PULSET','ORBIT','ORBITT','TRAIL','BEACON','VOLT','RAY'].includes(plain))return false;if(/^(?:PULSE|ORBIT) \d+$/.test(plain)||/^[\d\sWVk;@.]+$/.test(plain))return false;const rest=plain.replace(/[\s\p{P}\p{S}\d]/gu,'');return rest.length>=2}
 function lookup(raw){const {key,values}=parts(raw);if(!meaningful(key))return {value:raw,covered:true,needed:false,key};const canonical=aliases[key]||key,value=pack[canonical];if(value===undefined||!String(value).trim()){const segments=normalize(raw).split(/( · | \| )/);if(segments.length>1){for(let i=segments.length-2;i>0;i-=2){const left=lookup(segments.slice(0,i).join('')),right=lookup(segments.slice(i+1).join(''));if(left.covered&&right.covered)return {value:left.value+segments[i]+right.value,covered:true,needed:true,key,canonical}}}return {value:raw,covered:false,needed:true,key,canonical}};return {value:value.replace(/__P(\d+)__/g,(_,i)=>values[Number(i)]??''),covered:true,needed:true,key,canonical}}
 function text(raw){return lookup(String(raw??'')).value}
 function home(code=language){return nativePaths[code]||'/?lang='+encodeURIComponent(code)}
 function targetFor(code){const url=new URL(location.href);if(/^\/(?:index\.html|home-(?:zh|es|ru)\.html)?$/.test(url.pathname))url.pathname=nativePaths[code]||'/';else if(url.pathname.startsWith('/products/'))url.pathname=url.pathname.replace(/-(?:[a-z]{2,3}|zh-Hant|pt-BR)\.html$/,'-'+(nativePaths[code]?code:'en')+'.html');url.searchParams.set('lang',code);return url.pathname+url.search+url.hash}
 function changeLanguage(code){if(!Object.hasOwn(names,code))return;try{localStorage.setItem('anthrise_language',code);localStorage.setItem('anthrise_lang',code)}catch{}if(code===language){document.querySelectorAll('.site-language-picker').forEach(p=>p.open=false);apply();return}location.assign(targetFor(code))}
 const api={version:'20261124-navright1',language,home,languages:Object.keys(names),t:text,text,changeLanguage,ready:readyPromise,get isReady(){return ready},getCoverage};window.ANTHRISE_I18N=api;
 try{localStorage.setItem('anthrise_language',language);localStorage.setItem('anthrise_lang',language)}catch{}
 document.documentElement.dataset.siteLocale=language;document.documentElement.translate=false;
 const excluded='script,style,textarea,code,pre,template,.brand-subtext,.global-language-panel,.site-language-picker summary,[data-no-translate]';
 function translateNode(node){if(!node.parentElement||node.parentElement.closest(excluded))return;const actual=node.nodeValue,previous=textRecords.get(node),source=previous&&actual===previous.last?previous.source:actual;if(!normalize(source))return;const result=lookup(source);if(!result.covered)return;if(!result.needed)return;const value=(source.match(/^\s*/)?.[0]||'')+result.value+(source.match(/\s*$/)?.[0]||'');textRecords.set(node,{source,last:value});if(actual!==value)node.nodeValue=value}
 const attributes=['aria-label','title','placeholder','alt','data-tooltip'];
 function translateAttributes(element){if(element.closest(excluded))return;let records=attributeRecords.get(element);if(!records){records={};attributeRecords.set(element,records)}for(const name of attributes){const actual=element.getAttribute(name);if(!actual)continue;const old=records[name],source=old&&actual===old.last?old.source:actual,result=lookup(source);if(!result.covered)continue;records[name]={source,last:result.value};if(actual!==result.value)element.setAttribute(name,result.value)}}
 function updateLinks(root){const nodes=root.matches?.('a')?[root,...root.querySelectorAll('a')]:[...root.querySelectorAll('a')];for(const a of nodes){if(a.closest('.global-language-panel'))continue;let url;try{url=new URL(a.href,location.href)}catch{continue}if(url.origin!==location.origin||(!url.pathname.endsWith('.html')&&url.pathname!=='/'))continue;if(/^\/(?:index\.html|home-(?:zh|es|ru)\.html)?$/.test(url.pathname))url.pathname=nativePaths[language]||'/';if(url.pathname.startsWith('/products/'))url.pathname=url.pathname.replace(/-(?:[a-z]{2,3}|zh-Hant|pt-BR)\.html$/,'-'+(nativePaths[language]?language:'en')+'.html');url.searchParams.set('lang',language);const value=url.pathname+url.search+url.hash;if(a.getAttribute('href')!==value)a.setAttribute('href',value)}}
 function translateRoot(root){if(root.nodeType===Node.TEXT_NODE){translateNode(root);return}if(root.nodeType!==Node.ELEMENT_NODE)return;if(!root.closest(excluded)){translateAttributes(root);const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())translateNode(node);root.querySelectorAll('[aria-label],[title],[placeholder],[alt],[data-tooltip]').forEach(translateAttributes)}updateLinks(root)}
 function enforceLanguage(){const lang=language==='zh'?'zh-Hans':language;if(document.documentElement.lang!==lang)document.documentElement.lang=lang;if(document.documentElement.dir!==(rtl?'rtl':'ltr'))document.documentElement.dir=rtl?'rtl':'ltr';if(document.documentElement.dataset.siteLocale!==language)document.documentElement.dataset.siteLocale=language}
 function apply(){if(!ready||!document.body)return;enforceLanguage();translateRoot(document.body);const value=lookup(document.title);if(value.covered&&document.title!==value.value)document.title=value.value}
 function queue(){if(pending||!ready)return;pending=true;requestAnimationFrame(()=>{pending=false;apply()})}
 function mountNavigation(header,picker){
  const frame=header.querySelector('.header-inner')||header;
  let nav=header.querySelector('.anthrise-primary-nav');
  if(!nav){
   const brand=frame.querySelector('a.brand-link,a.planning-logo,a.solution-logo,a.brand')||[...frame.querySelectorAll('a')].find(a=>a.querySelector('img'));
   if(!brand)return;
   nav=document.createElement('nav');nav.className='anthrise-primary-nav';nav.setAttribute('aria-label','Main navigation');nav.setAttribute('data-no-translate','');
   const links=document.createElement('div');
   links.className='anthrise-nav-links';
   for(const key of ['home','products','solutions','about','contact']){
    if(key==='products'){
     const menu=document.createElement('details');
     menu.className='anthrise-products-menu';
     menu.innerHTML='<summary data-primary-page="products"><span></span><i aria-hidden="true"></i></summary><div class="anthrise-products-options"></div>';
     const options=menu.querySelector('.anthrise-products-options');
     const categories=[
      ['power','<circle cx="8" cy="7" r="3"/><path d="M8 1v2M2 7h2m8 0h2M4 3l1 1m6-1-1 1M6 12h12l2 7H4l2-7Zm6 0v7m-7-3h14m-7 3v3"/>'],
      ['lighting','<path d="M7 14a6 6 0 1 1 10 0l-2 3H9l-2-3Zm3 6h4m-3 2h2M20 3v4m-2-2h4M3 10H1"/>']
     ];
     for(const [category,icon] of categories){
      const link=document.createElement('a');
      link.dataset.catalogCategory=category;
      link.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+icon+'</svg><span></span>';
      options.append(link);
     }
     links.append(menu);
    }else{
     const link=document.createElement('a');
     link.dataset.primaryPage=key;
     links.append(link);
    }
   }
   nav.append(links);
   header.classList.add('anthrise-unified-header');frame.classList.add('anthrise-nav-frame');brand.classList.add('anthrise-nav-brand');
   frame.append(brand,nav);nav.append(picker);
   for(const child of [...frame.children])if(child!==brand&&child!==nav){child.classList.add('anthrise-nav-retired');child.inert=true;child.hidden=true}
   if(frame!==header)for(const child of [...header.children])if(child!==frame){child.classList.add('anthrise-nav-retired');child.inert=true;child.hidden=true}
  }
  if(picker.parentElement!==nav)nav.append(picker);
  picker.dir=rtl?'rtl':'ltr';
  const labels={en:['Home','Products','Solutions','About us','Contact'],zh:['首页','产品','解决方案','关于我们','联系我们'],es:['Inicio','Productos','Soluciones','Empresa','Contacto'],ru:['Главная','Продукция','Решения','О компании','Связаться']};
  const copy=labels[language]||['Home','Products','Solutions','About','Contact'].map(text),homeUrl=home(language),targets=[homeUrl,'/products.html?lang='+language,'/solutions.html?lang='+language,'/about.html?lang='+language,homeUrl+'#project-inquiry'];
  const path=location.pathname,current=location.hash==='#project-inquiry'&&/^\/(?:index\.html|home-(?:zh|es|ru)\.html)?$/.test(path)?'contact':/^\/(?:index\.html|home-(?:zh|es|ru)\.html)?$/.test(path)?'home':path.includes('products')?'products':/^\/lighting(?:-zh)?\.html$/.test(path)?'products':path.endsWith('/solutions.html')?'solutions':path.endsWith('/about.html')?'about':'';
  nav.querySelectorAll('[data-primary-page]').forEach((item,i)=>{
   const isProducts=item.dataset.primaryPage==='products';
   const label=isProducts?item.querySelector('span'):item;
   if(label.textContent!==copy[i])label.textContent=copy[i];
   if(!isProducts&&item.getAttribute('href')!==targets[i])item.setAttribute('href',targets[i]);
   if(item.dataset.primaryPage===current)item.setAttribute('aria-current','page');
   else item.removeAttribute('aria-current');
  });
  const categories={en:['Solar Power','Smart Lighting'],zh:['太阳能电力','智能照明'],es:['Energía solar','Iluminación inteligente'],ru:['Солнечная энергетика','Умное освещение']};
  const [powerLabel,lightingLabel]=categories[language]||categories.en;
  const power=nav.querySelector('[data-catalog-category="power"]');
  const lighting=nav.querySelector('[data-catalog-category="lighting"]');
  power.href=targets[1];
  lighting.href=(language==='zh'?'/lighting-zh.html':'/lighting.html')+'?lang='+language;
  power.querySelector('span').textContent=powerLabel;
  lighting.querySelector('span').textContent=lightingLabel;
 }
 function mountPicker(){const header=document.querySelector('#site-header,.planning-header,body>header.header,body>header');if(!header)return;let picker=header.querySelector('.site-language-picker');if(!picker){picker=document.createElement('details');picker.className='site-language-picker';(header.querySelector('.nav-tools,.header-actions,.planning-nav')||header.querySelector('.header-inner')||header).append(picker)}picker.dataset.globalLocale='';
  const open=picker.open,code={zh:'中','zh-Hant':'繁','pt-BR':'PT'}[language]||language.toUpperCase();picker.innerHTML='<summary>'+config.globe+'<span class="site-language-code">'+code+'</span><span aria-hidden="true">⌄</span></summary><div class="global-language-panel"><strong></strong><input type="search" class="global-language-search"><div class="global-language-grid"></div></div>';picker.open=open;
  picker.querySelector('summary').setAttribute('aria-label',text('Choose language')+' · '+names[language]);picker.querySelector('.global-language-panel>strong').textContent=text('Region & language')+' · '+names[language];const search=picker.querySelector('input');search.placeholder=text('Search languages');search.setAttribute('aria-label',text('Search languages'));
  let displayNames;try{displayNames=new Intl.DisplayNames([language],{type:'region'})}catch{displayNames=new Intl.DisplayNames(['en'],{type:'region'})}
  for(const [region,codes] of config.groups){const section=document.createElement('section'),heading=document.createElement('h3');heading.textContent=displayNames.of(region);section.append(heading);for(const code of codes){const a=document.createElement('a');a.href=targetFor(code);a.lang=code;a.dataset.language=code;a.textContent=names[code];if(code===language)a.setAttribute('aria-current','page');section.append(a)}picker.querySelector('.global-language-grid').append(section)}
  search.oninput=()=>{const query=search.value.trim().toLocaleLowerCase();picker.querySelectorAll('.global-language-grid a').forEach(a=>a.hidden=!a.textContent.toLocaleLowerCase().includes(query)&&!a.dataset.language.toLowerCase().includes(query));picker.querySelectorAll('.global-language-grid section').forEach(s=>s.hidden=![...s.querySelectorAll('a')].some(a=>!a.hidden))};
  document.body.classList.add('has-global-language-picker');
  mountNavigation(header,picker);
 }
 window.addEventListener('hashchange',()=>{const picker=document.querySelector('.site-language-picker'),header=picker?.closest('header');if(header)mountNavigation(header,picker)});
 function removeLocalControls(){document.querySelectorAll('#atlas [data-action="language"]').forEach(n=>n.remove());for(const id of ['about-language','page-language']){const select=document.getElementById(id);if(select){const parent=select.closest('label');(parent||select).remove()}}document.querySelectorAll('header label.language,header #langBtn,header .locale-picker,header .lang-switch,header .language-switch,header .lang-btn').forEach(n=>{n.hidden=true;n.setAttribute('aria-hidden','true');n.inert=true})}
 function getCoverage(root=document.body){const missing=new Set();let needed=0,covered=0;if(!root)return {needed,covered,missing:[]};function check(source){const result=lookup(source);if(!result.needed)return;needed++;if(result.covered)covered++;else missing.add(normalize(source))}const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){const parent=node.parentElement;if(!parent||parent.closest(excluded+', [hidden], [inert]')||!parent.getClientRects().length)continue;const record=textRecords.get(node);check(record&&node.nodeValue===record.last?record.source:node.nodeValue)}root.querySelectorAll('[aria-label],[title],[placeholder],[alt],[data-tooltip]').forEach(n=>{if(n.closest(excluded+', [hidden], [inert]')||!n.getClientRects().length)return;const records=attributeRecords.get(n)||{};for(const name of attributes){const value=n.getAttribute(name);if(value){const record=records[name];check(record&&value===record.last?record.source:value)}}});return {needed,covered,missing:[...missing]}}
 document.addEventListener('click',event=>{const choice=event.target.closest('a[data-language]');if(choice){event.preventDefault();event.stopImmediatePropagation();changeLanguage(choice.dataset.language);return}document.querySelectorAll('.site-language-picker,.anthrise-products-menu').forEach(p=>{if(!p.contains(event.target)||event.target.closest('[data-catalog-category]'))p.open=false})},true);
 document.addEventListener('invalid',event=>{const field=event.target;if(!field.setCustomValidity)return;field.setCustomValidity(text(field.validity.valueMissing?'Please complete this field.':field.validity.typeMismatch?'Please enter a valid email address.':'Please enter a valid value.'))},true);document.addEventListener('input',event=>{if(event.target.setCustomValidity)event.target.setCustomValidity('')},true);
 document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.site-language-picker[open],.anthrise-products-menu[open]').forEach(p=>{p.open=false;p.querySelector('summary').focus()})});
 function start(){if(started)return;started=true;removeLocalControls();mountPicker();enforceLanguage();observer=new MutationObserver(records=>{if(records.some(r=>r.target.nodeType===Node.ELEMENT_NODE&&r.target.matches?.('.site-language-picker summary')))return;queue()});observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:[...attributes,'href']});new MutationObserver(()=>{enforceLanguage();queue()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});const script=document.createElement('script');script.src='/assets/i18n/'+encodeURIComponent(language)+'.js?v=20261124-citypopup1';script.onload=()=>{pack=window.ANTHRISE_TRANSLATIONS?.[language]||{};ready=true;mountPicker();apply();resolveReady(api);window.dispatchEvent(new Event('anthrise:language-ready'));queue()};script.onerror=()=>{console.error('Local language pack could not load:',language)};document.head.append(script)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
