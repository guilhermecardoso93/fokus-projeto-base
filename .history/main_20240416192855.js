const html = document.querySelector("html");

const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortFocus = document.querySelector(".app__card-button--curto");
const buttonLongFocus = document.querySelector(".app__card-button--longo");
const buttonMusic = document.querySelector("#alternar-musica");
const banner = document.querySelector(".app__image");

buttonFocus.addEventListener("click", () => {
  changeContext("foco");
});

buttonShortFocus.addEventListener("click", () => {
  changeContext("descanso-curto");
});

buttonLongFocus.addEventListener("click", () => {
  changeContext("descanso-longo");
});

function changeContext(context) {
  html.setAttribute("data-contexto", context);
  banner.setAttribute("src", `/imagens/${context}.png`);
}
