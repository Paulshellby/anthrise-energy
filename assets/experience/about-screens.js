(() => {
 'use strict';
 const supported=['en','zh','es','ru'],params=new URLSearchParams(location.search);let lang=supported.includes(window.ANTHRISE_I18N?.language||params.get('lang'))?(window.ANTHRISE_I18N?.language||params.get('lang')):'en';
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],homes={en:'/',zh:'/home-zh.html',es:'/home-es.html',ru:'/home-ru.html'};
 const intro={es:['Energía limpia para la vida diaria y un progreso duradero.','Almacenamiento y respaldo','La selección parte de las cargas esenciales y la autonomía.','Solar e iluminación','Configuración según la luz solar, el lugar y el uso.'],ru:['Чистая энергия для жизни и устойчивого развития.','Хранение и резервное питание','Подбор по важным нагрузкам и времени резерва.','Солнечная энергия и освещение','Комплектация с учётом солнца, объекта и применения.']};
 function localize(){document.documentElement.lang=lang==='zh'?'zh-CN':lang;if($('#about-language'))$('#about-language').value=lang;$$('[data-en][data-zh]').forEach(n=>n.textContent=n.dataset[lang]||n.dataset.en);$$('[data-pack-en]').forEach(n=>n.textContent=n.getAttribute('data-pack-'+lang)||n.getAttribute('data-pack-en'));$$('[data-pack-alt-en]').forEach(n=>n.alt=n.getAttribute('data-pack-alt-'+lang)||n.getAttribute('data-pack-alt-en'));
  const copy=window.ABOUT_HERO_COPY[lang]||window.ABOUT_HERO_COPY.en;$$('[data-about-copy]').forEach(n=>n.textContent=copy[Number(n.dataset.aboutCopy)]);
  $$('[data-home]').forEach(a=>a.href=homes[lang]);$$('[data-products-link]').forEach(a=>a.href='/products.html?lang='+lang);$$('[data-contact-link]').forEach(a=>a.href=homes[lang]+'#project-inquiry');$$('[data-about-page]').forEach(a=>a.href='/'+a.dataset.aboutPage+'?lang='+lang);
  const labels={en:['Previous images','Next images','About Anthrise Technology'],zh:['上一组图片','下一组图片','关于我们 | 昂旭启元'],es:['Imágenes anteriores','Imágenes siguientes','Acerca de Anthrise Technology'],ru:['Предыдущие изображения','Следующие изображения','О компании Anthrise Technology']};$('#pack-previous').setAttribute('aria-label',labels[lang][0]);$('#pack-next').setAttribute('aria-label',labels[lang][1]);document.title=labels[lang][2]
 }
 const track=$('.pack-gallery-track'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function controls(){const max=track.scrollWidth-track.clientWidth;$('#pack-previous').disabled=track.scrollLeft<2;$('#pack-next').disabled=track.scrollLeft>=max-2}
 function move(direction){track.scrollBy({left:direction*(track.clientWidth+16),behavior:reduced.matches?'instant':'smooth'})}
 $('#pack-previous').onclick=()=>move(-1);$('#pack-next').onclick=()=>move(1);track.addEventListener('scroll',controls,{passive:true});new ResizeObserver(controls).observe(track);
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 new ResizeObserver(entries=>document.documentElement.style.setProperty('--about-header-height',entries[0].target.getBoundingClientRect().height+'px')).observe($('.about-header'));
 window.addEventListener('scroll',()=>$('.about-header').classList.toggle('is-scrolled',scrollY>innerHeight*.7),{passive:true});
 localize();controls();window.ABOUT_PREVIEW={getState:()=>({lang,screens:2,galleryImages:track.querySelectorAll('figure').length})};
})();
