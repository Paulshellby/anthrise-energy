(()=>{'use strict';
const t=s=>window.ANTHRISE_I18N?.t(s)||s,products=window.ANTHRISE_SCENE_PRODUCTS||[],dialog=document.querySelector('#product-popover'),root=document.querySelector('#scene-product-list'),search=document.querySelector('#scene-product-search');
const types={storage:['storage','portable'],inverter:['inverter'],solar:['solar'],lighting:['lighting']},titles={all:'All Products',storage:'Energy storage',inverter:'Hybrid inverters',solar:'Solar panels & kits',lighting:'Solar Lighting'};
let zone='all',query='',pinned=false,timer=0,hoverTimer=0,returnFocus=null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function route(p){const l=window.ANTHRISE_I18N?.language||'en';return '/products/'+p.id+'-'+(['en','zh','es','ru'].includes(l)?l:'en')+'.html?lang='+encodeURIComponent(l)}
function render(){let list=products.filter(p=>(zone==='all'||types[zone].includes(p.category))&&(!query||[p.id,p.en,p.zh,p.modelCode,...p.tags].join(' ').toLocaleLowerCase().includes(query)));
 if(zone==='storage'){const order=['balconyBess','ess10','ess16'];list.sort((a,b)=>{const rank=p=>order.includes(p.id)?order.indexOf(p.id):100;return rank(a)-rank(b)})}
 document.querySelector('#scene-product-title').textContent=t(titles[zone]);document.querySelector('#scene-product-count').textContent=String(list.length);root.replaceChildren();
 for(const p of list){const a=document.createElement('a');a.className='scene-product';a.href=route(p);a.dataset.product=p.id;a.innerHTML='<img src="/'+esc(p.image)+'" width="240" height="240" loading="lazy" alt="'+esc(t(p.en))+'"><h3>'+esc(t(p.en))+'</h3><p>'+esc(p.modelCode||'')+'</p><span>'+esc(t('View details'))+'</span>';root.append(a)}
 if(!list.length){const p=document.createElement('p');p.className='no-results';p.textContent=t('No matching products.');root.append(p)}root.scrollTop=0;dialog.dataset.category=zone;
}
function open(next,{pin=false,focus=false}={}){if(!titles[next])return;clearTimeout(timer);const changed=zone!==next;zone=next;if(changed){query='';search.value='';render()}if(dialog.hidden){returnFocus=document.activeElement;dialog.hidden=false;render()}pinned=pin||pinned;if(focus)document.querySelector('#product-popover-close').focus({preventScroll:true});}
function close({restore=false}={}){clearTimeout(timer);clearTimeout(hoverTimer);dialog.hidden=true;pinned=false;query='';search.value='';window.PRODUCT_SCENE?.clear();if(restore)document.querySelector('#scene-reset').focus({preventScroll:true});}
function scheduleClose(){clearTimeout(timer);if(!pinned)timer=setTimeout(()=>{if(!dialog.matches(':hover')&&!dialog.contains(document.activeElement))close()},650)}
window.addEventListener('anthrise:scene-hover',e=>{clearTimeout(hoverTimer);if(e.detail.zone){clearTimeout(timer);hoverTimer=setTimeout(()=>open(e.detail.zone),120)}else scheduleClose()});
window.addEventListener('anthrise:product-zone',e=>open(e.detail.zone,{pin:true}));
dialog.addEventListener('pointerenter',()=>{clearTimeout(timer);clearTimeout(hoverTimer)});dialog.addEventListener('pointerleave',scheduleClose);dialog.addEventListener('focusin',()=>{clearTimeout(timer);clearTimeout(hoverTimer)});dialog.addEventListener('focusout',()=>setTimeout(()=>{if(!dialog.contains(document.activeElement))scheduleClose()},0));
search.addEventListener('input',()=>{query=search.value.trim().toLocaleLowerCase();pinned=true;render()});
document.querySelector('#product-popover-close').addEventListener('click',()=>close({restore:true}));document.querySelector('#scene-reset').addEventListener('click',()=>{window.PRODUCT_SCENE?.clear();open('all',{pin:true,focus:true})});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.hidden){e.preventDefault();close({restore:true})}});
document.addEventListener('pointerdown',e=>{if(!dialog.hidden&&!dialog.contains(e.target)&&!e.target.closest('[data-zone],#scene-reset,.site-language-picker'))close()});
window.addEventListener('anthrise:language-ready',()=>{if(!dialog.hidden)render()});
window.addEventListener('anthrise:scene-ready',()=>{const requested=new URLSearchParams(location.search).get('category');if(types[requested])window.PRODUCT_SCENE.select(requested)});
window.PRODUCT_BROWSER={open,close,getState:()=>({zone,count:root.querySelectorAll('.scene-product').length,query,open:!dialog.hidden,pinned,allProducts:products.length})};
})();
