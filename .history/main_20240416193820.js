const html = document.querySelector("html");
const buttonMusic = document.querySelector("#alternar-musica");
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector("h1");

function changeContext(context) {
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

buttonFocus.addEventListener("click", () => {
  changeContext("foco");
});

buttonShortFocus.addEventListener("click", () => {
  changeContext("descanso-curto");
});

buttonLongFocus.addEventListener("click", () => {
  changeContext("descanso-longo");
});
