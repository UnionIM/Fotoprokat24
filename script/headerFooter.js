function app () {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android()
        || isMobile.BlackBerry()
        || isMobile.iOS()
        || isMobile.Opera()
        || isMobile.Windows()
      );
    }
  };
  if(isMobile.any()){
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length>0){
      menuArrows.forEach.call(menuArrows, el => {
        el.addEventListener('click', () => {
          el.parentElement.classList.toggle('_active');
        })
      })
    }

  }else{
    document.body.classList.add('_pc');
  }

  const searchBtn = document.querySelector('.dropdown__button');
  const searchMenu = document.querySelector('.dropdown__content');

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');

  const searchMenuHandler = (e) => {
    const searchMenu = e.target
    searchMenu.classList.add('_activeDD');
    setTimeout(() => {
      searchMenu.classList.remove('_activeDD');
    }, 1500)
  }

  searchBtn.addEventListener('mouseover', searchMenuHandler)
  searchMenu.addEventListener('mouseover', searchMenuHandler)

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active')
    burger.classList.toggle('burger_active')
  })


}

app()