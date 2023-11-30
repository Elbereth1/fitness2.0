import swiper from './vendor/swiper.js';

const getSlider = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,

    // Navigation arrows
    navigation: {
      nextEl: '.coaches__slide-btn--next',
      prevEl: '.coaches__slide-btn--prev',
    },
  });
};

export {getSlider};
