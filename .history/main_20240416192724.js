const html = document.querySelector("html");

const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const buttonMusic = document.querySelector("#alternar-musica");
const banner = document.querySelector(".app__image");

buttonFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "/imagens/foco.png");
});

buttonShortFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
  banner.setAttribute("src", "/imagens/descanso-curto.png");
});

buttonLongFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
  banner.setAttribute("src", "/imagens/descanso-longo.png");
});

function changeContext(context) {
  html.setAttribute('data-contexto', context);
  banner.setAttribute("src", context);
}