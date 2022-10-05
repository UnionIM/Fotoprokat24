const showMore = document.getElementById('#showAllText')
const showLess = document.getElementById('#showLessText')

const text = document.getElementById('#hidenText')

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