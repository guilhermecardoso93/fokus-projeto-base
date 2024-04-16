const html = document.querySelector('html')

const buttonFocus = document.querySelector(".app__card-button--foco")
const buttonShortFocus = document.querySelector(".app__card-button--curto")
const buttonLongFocus = document.querySelector(".app__card-button--longo")
const buttonMusic = document.querySelector("#alternar-musica")

buttonShortFocus.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto')
})