const html = document.querySelector("html");
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector("h1");
const buttons = document.querySelectorAll(".app__card-button");
const startPauseButton = document.querySelector(`#start-pause`);
let intervalId = null;

buttonFocus.addEventListener("click", () => {
  changeContext("foco");
  buttonFocus.classList.add("active");
});

buttonShortFocus.addEventListener("click", () => {
  changeContext("descanso-curto");
  buttonShortFocus.classList.add("active");
});

buttonLongFocus.addEventListener("click", () => {
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

const buttonMusic = document.querySelector("#alternar-musica");
const music = new Audio("./sons/luna-rise-part-one.mp3");
const musicPlay = new Audio("./sons/play.wav");
const musicPause = new Audio("./sons/pause.mp3");
const musicDone = new Audio("./sons/beep.mp3");
music.loop = true;

buttonMusic.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

let timeInSeconds = 5;

const countdown = () => {
  if (timeInSeconds <= 0) {
    musicDone.play();
    clear();
    alert("Tempo Finalizado");
    return;
  }
  timeInSeconds -= 1;
  console.log('Temporizador: ' + timeInSeconds)
};

startPauseButton.addEventListener("click", startOuPause);

function startOuPause() {
  if (intervalId) {
    musicPause.play()
    clear();
    return;
  }
  musicPlay.play()
  intervalId = setInterval(countdown, 1000);
}

function clear() {
  clearInterval(intervalId);
  intervalId = null;
}


