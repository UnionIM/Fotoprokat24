function app () {
  const buttons = document.querySelectorAll('.swiper__PiP_button');

  const content = document.querySelector('.swiper__content');

  const img = document.querySelectorAll('.swiper__slide_content');

  img[0].style.padding = ((245 - img[0].offsetHeight)/2) + 'px 0 ' + ((245 - img[0].offsetHeight)/2) + 'px 0'
  for (const ind in img) {
    if(img[ind].offsetHeight > 245){
      img[ind].style.height = '245px'
    }
    if(((245 - img[ind].offsetHeight)/2) > 0){
      img[ind].style.padding = ((245 - img[ind].offsetHeight)/2) + 'px 0 ' + ((245 - img[ind].offsetHeight)/2) + 'px 0'
    }
  }

  let lastIndex = 0;

  const showNextSlide = (el) => {
    if(!el.classList.contains('_activePiPButton')){
      buttons.forEach(el => {
        if(el.classList.contains('_activePiPButton')){
          el.classList.remove('_activePiPButton');
        }
      })
    }
    if(el.id.slice(9, 10) === '1'){
      content.style.transform = 'translateY(0)';
    }else{
      content.style.transform = 'translateY(' + (-245 * (parseInt(el.id.slice(9, 10)) - 1)) + 'px)';
    }
    el.classList.add('_activePiPButton');
    if(lastIndex >= buttons.length - 1){
      lastIndex = 0;
    }else{
      lastIndex++;
    }
  }

  const timeout = () => {
    return setTimeout(()=>{
      if(lastIndex + 1 >= buttons.length){
        showNextSlide(buttons[0]);
      }else{
        showNextSlide(buttons[lastIndex+1]);
      }
      a = timeout();
    }, 7000)
  }

  let a = timeout();

  buttons.forEach((el, ind)=> {
    el.addEventListener('click', () => {
      showNextSlide(el);
      clearTimeout(a);
      a = timeout();
      lastIndex = ind;
    })
  })


}

app()