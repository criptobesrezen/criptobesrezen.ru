'use strict';

$(document).ready(function () {

    // Косой слайдер
    $('.slider__item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      infinite: true,
      dots: true,
      dotsClass: 'slider__dots'
    });

    // Галерея
    $(".gallery__box").lightGallery({
      thumbnail:true
    });

    // Слайдер "Artists"
    $('.artists__slider--top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.artists__slider--bottom'
    });
    $('.artists__slider--bottom').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.artists__slider--top',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        prevArrow: "<div class='artists__slider-prev'><i class='fa fa-chevron-circle-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='artists__slider-next'><i class='fa fa-chevron-circle-right' aria-hidden='true'></i></div>"
    });
});
