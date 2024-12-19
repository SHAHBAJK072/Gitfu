// Locomotive Js
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.03,
});
// Product Swiper Slider JS
var TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 900,
    autoplay: {
      delay:3000
    },
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      360: {
           slidesPerView: 1,
           spaceBetween: 30,
         },
      768: {
          slidesPerView: 2,
          spaceBetween: 24,
    }
    }
  });
// Testimonials Swiper Slider JS
const swiper = new Swiper('.slider-wrapper', {
    slidesPerView: 3,
    loop: true,
    speed: 800,
    autoplay: {
      delay:3000
    },
    grabCursor:true,
    spaceBetween:30,
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-nex',
    prevEl: '.swiper-button-pre',
    },
    breakpoints: {
      360: {
           slidesPerView: 1,
           spaceBetween: 30,
         },
       992: {
         slidesPerView: 2,
         spaceBetween: 30,
       },
       1200: {
         slidesPerView: 3,
         spaceBetween: 24,
       }
     }
    });
var $circle = $('.circle');
function moveCircle(e) {
  TweenLite.to($circle, 3, {
    x: e.pageX,
    y: e.pageY,
    ease: Elastic.easeOut.config(1, 0.3)
  });
}
function stickCircle(e) {
  TweenLite.set($circle, {
    x: e.pageX,
    y: e.pageY
  });
}
$(window).on( 'mousemove', moveCircle);