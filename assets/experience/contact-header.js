(() => {
 'use strict';
 let frame=0;
 function update(){frame=0;const section=document.getElementById('project-inquiry'),header=document.querySelector('#site-header,body>header.header');if(!section||!header)return;const rect=section.getBoundingClientRect(),height=header.getBoundingClientRect().height;document.body.classList.toggle('inquiry-header-active',rect.top<=1&&rect.bottom>height)}
 function schedule(){if(!frame)frame=requestAnimationFrame(update)}
 window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});window.addEventListener('pageshow',schedule);window.addEventListener('load',schedule);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
 new MutationObserver(schedule).observe(document.body,{childList:true});
})();
