const html = document.querySelector("html");
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector("h1");
const buttons = document.querySelectorAll(".app__card-button");
const buttonMusic = document.querySelector("#alternar-musica");
const music = new Audio("./sons/luna-rise-part-one.mp3");
const musicPlay = new Audio("./sons/play.wav");
const musicPause = new Audio("./sons/pause.mp3");
const musicDone = new Audio("./sons/beep.mp3");
const startPauseButton = document.querySelector(`#start-pause`);
const startPauseButtonSpan = document.querySelector("#start-pause span");
const iconButtonImg = document.querySelector(".app__card-primary-button-icon");
const screenTimer = document.querySelector("#timer");

let intervalId = null;

buttonFocus.addEventListener("click", () => {
  timeInSeconds = 1500;
  changeContext("foco");
  buttonFocus.classList.add("active");
});

buttonShortFocus.addEventListener("click", () => {
  timeInSeconds = 300
  changeContext("descanso-curto");
  buttonShortFocus.classList.add("active");
});

buttonLongFocus.addEventListener("click", () => {
  timeInSeconds = 900
  changeContext("descanso-longo");
  buttonLongFocus.classList.add("active");
});

function changeContext(context) {
  buttons.forEach(function (context) {
    context.classList.remove("active");
  });
  html.setAttribute("data-contexto", context);
  banner.setAttribute("src", `/imagens/${context}.png`);
  switch (context) {
    case `foco`:
      appTitle.innerHTML = `Otimize sua produtividade,<br />
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case "descanso-curto":
      appTitle.innerHTML = `Que tal dar uma respirada?<br />
      <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
      break;
    case "descanso-longo":
      appTitle.innerHTML = `Hora de voltar a superfície,<br />
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
    default:
      break;
  }
}

music.loop = true;

buttonMusic.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

let timeInSeconds = 1500;

const countdown = () => {
  if (timeInSeconds <= 0) {
    //musicDone.play();
    alert("Tempo Finalizado");
    clear();
    return;
  }
  timeInSeconds -= 1;
  showTimer();
  console.log("Temporizador: " + timeInSeconds);
};

startPauseButton.addEventListener("click", startOuPause);

function startOuPause() {
  if (intervalId) {
    musicPause.play();
    clear();
    return;
  }
  musicPlay.play();
  intervalId = setInterval(countdown, 1000);
  startPauseButtonSpan.textContent = "Pausar";
  iconButtonImg.setAttribute("src", "/imagens/pause.png");
}

function clear() {
  clearInterval(intervalId);
  intervalId = null;
  startPauseButtonSpan.textContent = "Começar";
  iconButtonImg.setAttribute("src", "/imagens/play_arrow.png");
}

function showTimer() {
  const time = new Date(timeInSeconds * 1000);
  const formattedTime = time.toLocaleTimeString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  screenTimer.innerHTML = `${formattedTime}`;
}

showTimer();
