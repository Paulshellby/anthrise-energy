// Drive the sunrise independently of the scrolling page.
(() => {
  "use strict";

  const hill = document.querySelector(".home-landscape-solar");
  const hero = document.querySelector(".home-landscape-hero");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  if (!hill || !hero || reduced.matches) return;

  const canvas = document.createElement("canvas");
  canvas.width = 1120;
  canvas.height = 630;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const image = new Image();
  image.src = "/assets/experience/home-sunrise.webp";
  image.decode().then(() => {
    ctx.drawImage(image, 0, 0, 1120, 630);
    const source = ctx.getImageData(0, 0, 1120, 630).data;
    const output = ctx.createImageData(1120, 630);
    const pixels = output.data;
    pixels.set(source);
    const stride=1120*4;
    const mask=new Float32Array(1120*630);
    const smooth=(lo,hi,z)=>{const t=Math.max(0,Math.min(1,(z-lo)/(hi-lo)));return t*t*(3-2*t);};
    for(let y=323;y<630;y++)for(let x=0;x<1120;x++){
      const k=y*1120+x,j=k*4,r=source[j],g=source[j+1],b=source[j+2];
      // Limit wind displacement to vegetation, with fixed masks for the cabinet, plinth and panel array.
      const turf=smooth(3,25,Math.min(r,g)-b);
      const depth=smooth(338,565,y);
      const cabinet=(1-smooth(0,28,Math.max(600-x,x-947, y-531,141-y)));
      const array=(1-smooth(0,21,Math.max(863-x,361-y,y-453)));
      mask[k]=turf*depth*(1-cabinet)*(1-array);
    }
    function renderDawn(time){
     for(let y=335;y<630;y++)for(let x=1;x<1119;x++){
       const k=y*1120+x,j=k*4,weight=mask[k];
       if(weight<.002)continue;
       const wave=x*.009+y*.045-time*2.8;
       const gust=.53+.39*Math.sin(wave)+.08*Math.sin(x*.023-y*.018-time*4.7);
       const strength=weight*(.16+.84*smooth(381,595,y));
       const u=Math.max(0,Math.min(1118.99,x-strength*(1.4+11*gust)));
       const v=Math.max(0,Math.min(628.99,y-strength*(.45+1.6*gust)));
       const ix=Math.floor(u),iy=Math.floor(v),fx=u-ix,fy=v-iy,q=iy*stride+ix*4;
       for(let c=0;c<3;c++){
         const h=source[q+c]*(1-fx)+source[q+4+c]*fx;
         const l=source[q+stride+c]*(1-fx)+source[q+stride+4+c]*fx;
         pixels[j+c]=h*(1-fy)+l*fy;
       }
     }
     ctx.putImageData(output,0,0);
     const rise=Math.min(time,7);
     const x=949+rise*1.15,y=341-rise*6.5;
     ctx.save();
     ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(1120,0);ctx.lineTo(1120,325);ctx.lineTo(1062,313);ctx.lineTo(988,324);ctx.lineTo(947,337);ctx.lineTo(900,349);ctx.lineTo(0,356);ctx.closePath();ctx.clip();
     const light=ctx.createRadialGradient(x,y,1,x,y,78);
     light.addColorStop(0,'rgba(255,240,166,.92)');
     light.addColorStop(.16,'rgba(255,213,126,.48)');
     light.addColorStop(.44,'rgba(255,179,83,.19)');
     light.addColorStop(1,'rgba(255,182,75,0)');
     ctx.fillStyle=light;ctx.fillRect(x-80,y-80,160,160);
     ctx.fillStyle='#ffefb4';ctx.beginPath();ctx.arc(x,y,7.7,0,Math.PI*2);ctx.fill();
     ctx.restore();
    }

    const labels = {
      zh: ["暂停风景动效", "播放风景动效"],
      es: ["Pausar animación", "Reproducir animación"],
      ru: ["Приостановить анимацию", "Воспроизвести анимацию"],
      en: ["Pause landscape animation", "Play landscape animation"]
    };
    const [pauseLabel, playLabel] = labels[document.documentElement.lang.split("-")[0]] || labels.en;
    const button = document.createElement("button");
    button.className = "home-landscape-motion";
    button.type = "button";
    let visible = false;
    let paused = false;
    let elapsed = 0;
    let lastFrame = 0;
    let frame = 0;
    function updateButton() {
      button.textContent = paused ? "▶" : "Ⅱ";
      button.setAttribute("aria-label", paused ? playLabel : pauseLabel);
    }
    function tick(now) {
      frame = requestAnimationFrame(tick);
      if (lastFrame && now - lastFrame < 50) return;
      if (lastFrame) elapsed += (now - lastFrame) / 1000;
      lastFrame = now;
      renderDawn(elapsed);
    }
    function sync() {
      cancelAnimationFrame(frame);
      lastFrame = 0;
      button.hidden = reduced.matches;
      if (visible && !paused && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
    }
    button.addEventListener("click", () => {
      paused = !paused;
      updateButton();
      sync();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0.15;
      sync();
    }, {threshold: 0.15});
    observer.observe(hero);
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    renderDawn(0);
    updateButton();
    hill.append(canvas);
    hero.append(button);
  }).catch(() => {
    // The CSS background is the fallback if the animation cannot load.
  });
})();
