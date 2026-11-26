// Animate only the sun. The scene stays at the native resolution of its WebP.
(() => {
  'use strict';

  const landscape = document.querySelector('.home-landscape-solar');
  if (!landscape) return;

  const canvas = document.createElement('canvas');
  canvas.width = 1120;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const ridge = [[1120, 325], [1062, 313], [988, 324], [947, 337], [900, 349], [0, 356]];
  function draw(progress) {
    const x = 949 + progress * 8;
    const y = 341 - progress * 46;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    for (const [px, py] of ridge) ctx.lineTo(px, py);
    ctx.closePath();
    ctx.clip();

    const glow = ctx.createRadialGradient(x, y, 1, x, y, 78);
    glow.addColorStop(0, 'rgba(255,240,166,.92)');
    glow.addColorStop(.16, 'rgba(255,213,126,.48)');
    glow.addColorStop(.44, 'rgba(255,179,83,.19)');
    glow.addColorStop(1, 'rgba(255,182,75,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(x - 78, y - 78, 156, 156);
    ctx.fillStyle = '#ffefb4';
    ctx.beginPath();
    ctx.arc(x, y, 7.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  landscape.append(canvas);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) {
    draw(1);
    return;
  }

  let started;
  function tick(now) {
    started ??= now;
    const progress = reduced.matches ? 1 : Math.min(1, (now - started) / 4800);
    draw(progress);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
