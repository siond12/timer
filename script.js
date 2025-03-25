let startTime = 0;
let interval = null;

function updateTimerDisplay() {
  const now = Date.now();
  const elapsed = now - startTime;
  const totalSeconds = Math.floor(elapsed / 1000);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (interval) return; // 이미 실행 중이면 무시
  startTime = Date.now() - (elapsedTime || 0);
  interval = setInterval(updateTimerDisplay, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = Date.now() - startTime;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00:00";
});

let elapsedTime = 0;
