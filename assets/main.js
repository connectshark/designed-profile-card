const socialBtn = document.querySelector('.btn')
const socialGroup = document.querySelector('.social-group')

const clickHandler = () => {
  socialGroup.classList.toggle('show-link')
  socialGroup.classList.toggle('reverse-bounce')
}


socialBtn.addEventListener('click', clickHandler)