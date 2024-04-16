const html = document.querySelector("html");

const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const buttonMusic = document.querySelector("#alternar-musica");


buttonFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
});

buttonShortFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
});

buttonLongFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
});

