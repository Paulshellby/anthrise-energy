/* Small homepage interactions; global language and existing Risey remain authoritative. */
(()=>{'use strict';
const init=()=>{
 const companion=document.getElementById('risey-companion-layer'),menu=document.getElementById('risey-assistant-menu');
 // Keep the fixed menu outside the moving actor's transformed coordinate system.
 if(companion&&menu)companion.append(menu);
 const form=document.querySelector('#home-estimator-form');if(!form)return;
 const output=document.querySelector('#home-runtime-value'),names=['load','battery','usable','efficiency'];
 function calculate(){
  const values=Object.fromEntries(names.map(n=>[n,Number(form.elements[n].value)]));
  const valid=[...form.elements].filter(e=>e.matches('input')).every(e=>e.value.trim()!==''&&e.validity.valid);
  const hours=valid?values.battery*(values.usable/100)*(values.efficiency/100)/values.load:null;
  output.textContent=hours===null?'—':new Intl.NumberFormat(document.documentElement.lang,{minimumFractionDigits:1,maximumFractionDigits:1}).format(hours);
  output.dataset.hours=hours===null?'':String(hours);
 }
 form.addEventListener('input',calculate);form.addEventListener('submit',e=>e.preventDefault());
 window.addEventListener('anthrise:language-ready',calculate);calculate();
 document.querySelectorAll('[data-home-focus]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('.home-products-scene').dataset.focus=button.dataset.homeFocus;
  document.querySelectorAll('[data-home-focus]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 }));
 // A transparent header shares the first screen's backdrop, then gains a white surface on scroll.
 const header=document.getElementById('site-header');let headerFrame=0;
 function syncShowcaseHeader(){headerFrame=0;if(!header)return;const alpha=Math.min(1,Math.max(0,window.scrollY/150));header.style.setProperty('--home-header-alpha',String(alpha));}
 function queueHeader(){if(!headerFrame)headerFrame=requestAnimationFrame(syncShowcaseHeader);}
 window.addEventListener('scroll',queueHeader,{passive:true});window.addEventListener('pageshow',queueHeader);syncShowcaseHeader();
 const list=document.querySelector('.primary-nav .nav-list');if(list){
  const items=[...list.children],product=items.find(i=>i.querySelector('[data-open-products-stage]'));
  const about=items.find(i=>i.querySelector('[data-planning-page="about.html"],[aria-controls="menu-about"]'));
  if(product)list.prepend(product);if(about)list.append(about);
  const partnership=items.find(i=>i.querySelector('[aria-controls="menu-partnership"]'));if(partnership)partnership.hidden=true;
  const li=document.createElement('li');li.className='nav-item';li.innerHTML='<a class="home-nav-link" href="#main-content" aria-current="page">Home page</a>';list.prepend(li);
 }
 window.HOME_SHOWCASE={getState:()=>({version:'20261124-home1',hours:Number(output.dataset.hours),focus:document.querySelector('.home-products-scene').dataset.focus,globalLanguage:window.ANTHRISE_I18N?.language,mascot:!!document.querySelector('#risey-actor-btn,#risey-unified'),featured:[...document.querySelectorAll('.home-product')].map(a=>a.dataset.product)})};
};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();
