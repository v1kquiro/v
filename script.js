const video = document.getElementById("vdayVideo");
const confettiBtn = document.getElementById("confettiBtn");

// Click video to play/pause
video.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
});

// Tiny "confetti hearts" effect
confettiBtn.addEventListener("click", () => {
  for (let i = 0; i < 22; i++) spawnHeart();
});

function spawnHeart() {
  const heart = document.createElement("div");
  heart.textContent = Math.random() > 0.5 ? "💖" : "💘";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-10px";
  heart.style.fontSize = (18 + Math.random() * 22) + "px";
  heart.style.zIndex = 9999;
  heart.style.userSelect = "none";
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);

  const drift = (Math.random() * 2 - 1) * 80; // left/right
  const rise = 600 + Math.random() * 400;     // up
  const duration = 1200 + Math.random() * 900;

  const start = performance.now();

  function animate(now) {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);

    heart.style.transform = `translate(${drift * ease}px, -${rise * ease}px) rotate(${ease * 360}deg)`;
    heart.style.opacity = String(1 - t);

    if (t < 1) requestAnimationFrame(animate);
    else heart.remove();
  }

  requestAnimationFrame(animate);
}
