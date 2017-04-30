'use strict';

$(document).ready(function () {
    $('.slider__item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      arrows: false,
      infinite: true,
      dots: true,
      dotsClass: 'slider__dots'
    });
    $(".gallery__box").lightGallery();

    $('.artists__block--slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.artists__box--slider'
    });

    $('.artists__box--slider').slick({
       slidesToShow: 5,
       slidesToScroll: 1,
       asNavFor: '.artists__block--slider',
       arrows: false,
       dots: false,
       focusOnSelect: true
  });
});
