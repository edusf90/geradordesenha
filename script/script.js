let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')
let sizePassoword = document.querySelector('#valor')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')
let tooltipx = document.querySelector('.tooltip-bloqueado')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let novaSenha = ''

sizePassoword.innerHTML = sliderElement.value
slider.oninput = function () {
  sizePassoword.innerHTML = this.value
}

function generationPassword() {
  let pass = ''
  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass = pass + charset.charAt(Math.floor(Math.random() * n))
  }

  containerPassword.classList.remove('hide')
  password.innerHTML = pass
}

function copiarSenha() {
  navigator.clipboard
    .writeText(password.innerHTML)
    .then(() => {
      console.log(password.innerHTML)
    })
    .catch(() => {
      alert('something went wrong')
    })
}

let timeout

function copiado() {
  copiarSenha()
  tooltipx.classList.remove('hide')
  tooltipx.classList.add('tooltip')
  timeout = setTimeout(alertFunc, 2000)
}

function alertFunc() {
  tooltipx.classList.remove('tooltip')
  tooltipx.classList.add('hide')
}
