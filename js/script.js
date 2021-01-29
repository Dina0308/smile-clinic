//slider promo
var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    
    navPosition: 'bottom',
    mouseDrag: true,
    autoHeight: true,
    
  });
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };
  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

  //modal
  $('[data-modal]').on('click', function(){
    $('.overlay, .modal').fadeIn();
  });
  $('.modal__close').on('click', function(){
    $('.overlay, .modal').fadeOut();
  });

  //menu
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

//tabs
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.price__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

//slider price
var sliderP = tns({
  container: '.price__slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  
  navPosition: 'bottom',
  mouseDrag: true,
  autoHeight: true,
  
});
document.querySelector('.next-price').onclick = function () {
  sliderP.goTo('next');
};
document.querySelector('.prev-price').onclick = function () {
  sliderP.goTo('prev');
};

  
  