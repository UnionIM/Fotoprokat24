const sortBtn = document.querySelector('.main__dropdown_button');
const sortMenu = document.querySelector('.main__dropdown_content');
const arrows = document.querySelectorAll('.arrow');

const sortByPopPrice = document.querySelectorAll('.sort__button');

const sortArrows = document.querySelectorAll('.sort__arrow');
const arrowss = document.querySelectorAll('.arroww');

const body = document.body;

const sliderItem = document.querySelectorAll('.swiper-slide');
const sliderCheckMarks = document.querySelectorAll('.swiper__check_mark');

const showMenuHandler = () => {
  sortMenu.classList.toggle('_activeSortDD');
  arrows.forEach(el =>{
    el.classList.toggle('arrow_disable')
  })
}

sortBtn.addEventListener('click', showMenuHandler)

sortByPopPrice.forEach((el, ind, arr)=>{
  el.addEventListener('click', ()=>{
    el.classList.add('bold-text-small', '_activeButton')
    if(ind > 0){
      arr[ind-1].classList.remove('bold-text-small', '_activeButton')
    }else{
      arr[ind+1].classList.remove('bold-text-small', '_activeButton')
    }
  })
})

sortArrows.forEach((el, ind, arr)=>{
  el.addEventListener('click', ()=>{
    el.classList.add('_activeBoxArrow')
    arrowss[ind].classList.add('_activeArrow')
    if(ind > 0){
      arr[ind-1].classList.remove('_activeBoxArrow')
      arrowss[ind-1].classList.remove('_activeArrow')
    }else{
      arr[ind+1].classList.remove('_activeBoxArrow')
      arrowss[ind+1].classList.remove('_activeArrow')
    }
  })
})

body.addEventListener('click', (e)=>{
  if(!sortMenu.classList.contains('_activeSortDD') || e.target.classList.contains('main__dropdown_button')){
    return 0
  }
  for (const eKey in e.composedPath()) {
    if(eKey > e.composedPath().length-3){
      sortMenu.classList.remove('_activeSortDD');
      arrows.forEach(el =>{
        el.classList.toggle('arrow_disable')
      })
      break
    }
    if(e.composedPath()[eKey].className.includes('main__dropdown')){
      break
    }
  }
}, true)

sliderItem.forEach((el, ind)=>{
  el.addEventListener('click', ()=>{
    el.classList.toggle('_activeSlide')
    sliderCheckMarks[ind].classList.toggle('_activeCheckMark')
  })
})








