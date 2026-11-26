/* Small homepage interactions; global language and existing Risey remain authoritative. */
(()=>{'use strict';
const init=()=>{
 const companion=document.getElementById('risey-companion-layer'),menu=document.getElementById('risey-assistant-menu');
 // Keep the fixed menu outside the moving actor's transformed coordinate system.
 if(companion&&menu)companion.append(menu);
 const detailText=()=>window.ANTHRISE_I18N?.t('View product')||'View product';
 for(const card of document.querySelectorAll('.home-product')){
  const detail=document.createElement('span');
  detail.className='home-product-action';
  detail.setAttribute('aria-hidden','true');
  detail.textContent=detailText();
  card.append(detail);
 }
 // A transparent header shares the first screen's backdrop, then gains a white surface on scroll.
 const header=document.getElementById('site-header');let headerFrame=0;
 const landscape=document.querySelector('.home-landscape');
 const range=document.querySelector('.home-landscape-range');
 const inquiry=document.querySelector('#project-inquiry');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function reveal(scene){
  const top=scene.getBoundingClientRect().top;
  const progress=Math.min(1,Math.max(0,(innerHeight*.85-top)/(innerHeight*.79)));
  return reduced.matches?Number(progress>=.5):progress*progress*(3-2*progress);
 }
 function syncShowcaseHeader(){
  headerFrame=0;
  if(header)header.style.setProperty('--home-header-alpha',String(Math.min(1,Math.max(0,window.scrollY/150))));
  if(landscape&&range&&inquiry){
   landscape.style.setProperty('--home-community-opacity',reveal(range));
   landscape.style.setProperty('--home-path-opacity',reveal(inquiry));
  }
 }
 function queueHeader(){if(!headerFrame)headerFrame=requestAnimationFrame(syncShowcaseHeader);}
 window.addEventListener('scroll',queueHeader,{passive:true});window.addEventListener('resize',queueHeader,{passive:true});reduced.addEventListener('change',queueHeader);window.addEventListener('pageshow',queueHeader);syncShowcaseHeader();
 const list=document.querySelector('.primary-nav .nav-list');if(list){
  const items=[...list.children],product=items.find(i=>i.querySelector('[data-open-products-stage]'));
  const about=items.find(i=>i.querySelector('[data-planning-page="about.html"],[aria-controls="menu-about"]'));
  if(product)list.prepend(product);if(about)list.append(about);
  const partnership=items.find(i=>i.querySelector('[aria-controls="menu-partnership"]'));if(partnership)partnership.hidden=true;
  const li=document.createElement('li');li.className='nav-item';li.innerHTML='<a class="home-nav-link" href="#main-content" aria-current="page">Home page</a>';list.prepend(li);
 }
 window.HOME_SHOWCASE={getState:()=>({version:'20261124-home1',globalLanguage:window.ANTHRISE_I18N?.language,mascot:!!document.querySelector('#risey-actor-btn,#risey-unified'),featured:[...document.querySelectorAll('.home-product')].map(a=>a.dataset.product)})};
};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();
