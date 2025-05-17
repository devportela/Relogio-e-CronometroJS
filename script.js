
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('pt-BR');
  document.getElementById('currentTime').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

let stopwatchInterval;
let stopwatchTime = 0;

function updateStopwatch() {
  let hours = Math.floor(stopwatchTime / 3600);
  let minutes = Math.floor((stopwatchTime % 3600) / 60);
  let seconds = stopwatchTime % 60;

  document.getElementById('stopwatchDisplay').textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatch();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  pauseStopwatch();
  stopwatchTime = 0;
  updateStopwatch();
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}


let timerInterval;
let timerTime = 0;

function startTimer() {
  const minutes = parseInt(document.getElementById('minutesInput').value);
  if (isNaN(minutes) || minutes <= 0) return alert('Informe os minutos');

  timerTime = minutes * 60;
  updateTimer();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerTime--;
    updateTimer();

    if (timerTime <= 0) {
      clearInterval(timerInterval);
      alert("Tempo finalizado!");
    }
  }, 1000);
}

function updateTimer() {
  let minutes = Math.floor(timerTime / 60);
  let seconds = timerTime % 60;

  document.getElementById('timerDisplay').textContent =
    `${pad(minutes)}:${pad(seconds)}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  document.getElementById('timerDisplay').textContent = "00:00";
}
function showTab(id) {
  // Esconde todos os conteúdos
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.add('hidden');
  });

  // Mostra apenas o conteúdo selecionado
  const selectedTab = document.getElementById(id);
  if (selectedTab) selectedTab.classList.remove('hidden');

  // Atualiza os botões para mostrar qual aba está ativa
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(id)) {
      btn.classList.add('active');
    }
  });
}

