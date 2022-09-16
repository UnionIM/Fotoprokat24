function app () {
  const showMore = document.getElementById('#showAllText')
  const showLess = document.getElementById('#showLessText')

  const text = document.getElementById('#hidenText')

  const infoLink = document.querySelectorAll('.header__link[data-goto]')

  showMore.addEventListener('click', ()=>{
    showAllText()
  })

  showLess.addEventListener('click', ()=>{
    showLessText()
  })

  const showAllText = () => {
    showMore.style.display = 'none';
    text.style.display = 'inline';
    showLess.style.display = 'inline';
  }
  const showLessText = () => {
    showMore.style.display = 'inline';
    text.style.display = 'none';
    showLess.style.display = 'none';
  }

  if(infoLink.length > 0){
    infoLink.forEach((el, ind) => {
      window.sessionStorage.setItem('0', '-1');
      el.addEventListener('click', () => {
        window.sessionStorage.setItem('0', ind.toString());
      })
    })
  }

}

app()