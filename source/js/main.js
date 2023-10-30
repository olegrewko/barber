$(function () {
  $('.main-nav__toggle').on('click', function name() {
    $('.main-nav__wrapper').toggleClass('main-nav__wrapper--active');
  });


  //  $('.slider-blog__inner').slick({
  //   arrows: false,
  //   prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="img/arrow-left.svg" /></button>',
  //   nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="img/arrow-right.svg" /></button>',
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   fade: true,
  //   responsive: [{
  //       breakpoint: 768,
  //       settings: {

  //         arrows: false

  //       }
  //     },

  //   ]
  // });



 });



new Swiper('.swiper', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

