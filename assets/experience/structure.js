(() => {
 'use strict';
 const locale=()=>document.documentElement.lang.startsWith('zh')?'zh':document.documentElement.lang.split('-')[0]||'en';
 const route=page=>'/'+page+'?lang='+encodeURIComponent(locale());
 const style=document.createElement('style');style.textContent='.orbit-space:before{display:none!important}.orbit-card,.orbit-patch{backface-visibility:visible!important}.orbit-patch{background-color:transparent!important}.direct-planning-nav{display:inline-flex;align-items:center;font:inherit;color:inherit;text-decoration:none;font-weight:600}.direct-planning-nav:focus-visible{outline:2px solid #008777;outline-offset:5px}#scenes[hidden],#planner[hidden],#calculator[hidden]{display:none!important}';document.head.append(style);
 function navigation(){
  document.querySelectorAll('#menu-about a').forEach((a,i)=>{if(i>0)a.remove()});
  document.querySelectorAll('header a,.mobile-drawer a').forEach(a=>{if(/^(深圳团队|品质与测试|Shenzhen team|Quality.*test(?:ing|s)?)$/i.test(a.textContent.trim()))a.remove()});
  for(const [controls,page] of [['menu-solutions','solutions.html'],['menu-tools','selection-tools.html'],['mega-solutions','solutions.html'],['mega-tools','selection-tools.html']]){
   const old=document.querySelector('header [aria-controls="'+controls+'"]');if(!old)continue;
   const link=document.createElement('a');link.href=route(page);link.dataset.planningPage=page;link.className=old.className+' direct-planning-nav';const labels=page==='solutions.html'?{zh:'解决方案',en:'Solutions',es:'Soluciones',ru:'Решения'}:{zh:'选型工具',en:'Selection tools',es:'Selección',ru:'Подбор'};for(const [key,value] of Object.entries(labels))link.dataset[key]=value;link.textContent=labels[locale()]||labels.en;const details=old.closest('details');if(details)details.replaceWith(link);else{old.replaceWith(link);document.getElementById(controls)?.remove()}
  }
  document.querySelectorAll('.mobile-nav-group').forEach(g=>{const name=g.querySelector('p')?.textContent||'',page=/解决方案|Solutions|Soluciones|Решения/i.test(name)?'solutions.html':/选型工具|Selection tools|Selección|Подбор/i.test(name)?'selection-tools.html':null;if(page){g.replaceChildren();const a=document.createElement('a');a.textContent=name;a.dataset.planningPage=page;a.href=route(page);g.append(a)}});
  document.querySelectorAll('a').forEach(a=>{
   let url;try{url=new URL(a.href,location.href)}catch{return}if(url.origin!==location.origin)return;
   const footer=a.closest('footer'),name=a.textContent.trim();let page=a.dataset.planningPage;
   if(footer&&/^(解决方案|Solutions|Soluciones|Решения)$/.test(name))page='solutions.html';
   if(footer&&/^(选型工具|Selection tools|Selección|Подбор)$/.test(name))page='selection-tools.html';
   if(url.pathname==='/official-site.html'&&['#scenes','#applications'].includes(url.hash))page='solutions.html';
   if(url.pathname==='/official-site.html'&&['#planner','#calculator'].includes(url.hash))page='selection-tools.html';
   if(page){a.dataset.planningPage=page;a.href=route(page)}
  });
 }
 function prefill(){const note=new URLSearchParams(location.search).get('estimate'),field=document.getElementById('inq-message');if(!note||!field)return;if(!field.value.includes(note)){field.value+=(field.value?'\n\n':'')+note;field.dispatchEvent(new Event('input',{bubbles:true}))}}
 function init(){navigation();prefill();setTimeout(()=>{navigation();prefill()},900);setTimeout(prefill,2400);new MutationObserver(navigation).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
 window.SOLUTION_PREVIEW={open:id=>location.assign(route('solutions.html')+(id?'#'+encodeURIComponent(id):''))};
})();
