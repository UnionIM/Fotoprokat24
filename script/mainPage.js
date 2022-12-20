const infoLink = document.querySelectorAll('.header__link[data-goto]')

const scrollTo = (e, flag = true) => {
  let infoLink
  if(flag){
    infoLink = e.target;
  }else{
    infoLink = e;
  }

  if(infoLink.dataset.goto && document.querySelector(infoLink.dataset.goto)){
    const gotoBlock = document.querySelector(infoLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 84;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    })
    if(flag){
      e.preventDefault();
    }
  }
}

if(infoLink.length > 0){
  infoLink.forEach(el => {
    el.addEventListener('click', scrollTo)
  })
}

infoLink.forEach((el, ind) => {
  if(window.sessionStorage.getItem('0') === ind.toString()){
    scrollTo(el, false)
  }
})
