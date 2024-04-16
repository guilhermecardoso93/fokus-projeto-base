const html = document.querySelector("html");
const buttonMusic = document.querySelector("#alternar-musica");
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector("h1");
const buttons = querySelectorAll(".app__card-button");



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