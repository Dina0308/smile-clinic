//slider
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
  
  