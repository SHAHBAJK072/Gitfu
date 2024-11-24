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
    autoplay:{delay:3000},
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
    }
  });
  






//   Testimonials Swiper Slider JS
const swiper = new Swiper('.slider-wrapper', {
    slidesPerView: 3,
    loop: true,
    speed: 800,
    autoplay:{delay:3000},
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

// const swiper = new Swiper(".slider-wrapper", {
//   slidesPerView: 3,
//   spaceBetween: 24,
//   loop: true,
//   speed: 800,
//   autoplay:{delay:3000},
//   grabCursor:true,

  
  
//   pagination: {
//   el: ".fdots",
//   clickable: true,
//   },
//   navigation: {
//   nextEl: ".next",
//   prevEl: ".prev",
//   },
//   breakpoints: {
//      360: {
//           slidesPerView: 1, // 2 testimonials
//           spaceBetween: 30, // Space between slides
//         },
//       // Screen width 992px to 1199px ke liye
//       992: {
//         slidesPerView: 2, // 2 testimonials
//         spaceBetween: 30, // Space between slides
//       },
//       1200: {
//         slidesPerView: 3, // Default wapas aa jayega for larger screens
//         spaceBetween: 24,
//       }
//     }
  
// })










    // jquery (back-to-top)
    // $(document).ready(function(){
    //   $("#back-to-top").click(function(){
    //     $('html').animate({
    //       scrollTop:0
    //     })
    //   })
    // })