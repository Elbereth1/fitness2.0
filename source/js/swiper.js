import swiper from './vendor/swiper.js';

const getSlider = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.coaches__slide-btn--next',
      prevEl: '.coaches__slide-btn--prev',
    },

    breakpoints: {

      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
};

export {getSlider};

const getSubSlider = () => {
  const sub = new Swiper('.swiper-sub', {
    slidesPerView: 3,

    // Pagination

    pagination: {
      type: 'bullets',
      el: 'subscribe__button-wrapper',
      bulletActiveClass: 'subscribe__button--current',
      bulletClass: 'subscribe__button',
      clickable: true,
      bulletElement: 'button',
    },
  });
};

export {getSubSlider};

