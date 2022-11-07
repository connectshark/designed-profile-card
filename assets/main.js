const socialBtn = document.querySelector('.btn')
const socialGroup = document.querySelector('.social-group')

const clickHandler = e => {
  socialGroup.classList.toggle('show-link')
}


socialBtn.addEventListener('click', clickHandler)