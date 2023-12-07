const sandwich = document.querySelector('.faq__sublist-button');
const list = document.querySelector('.faq__text');

const getToggleSandwich = () => {
  sandwich.addEventListener('click', () => {
    if (sandwich.classList.contains('faq__sublist-button--open')) {
      sandwich.classList.remove('faq__sublist-button--open');
      sandwich.classList.add('faq__sublist-button--closed');
      nav.classList.remove('faq__text--hide');
    } else {
      sandwich.classList.remove('faq__sublist-button--closed');
      sandwich.classList.add('faq__sublist-button--open');
      faq.classList.add('faq__text--hide');
    }
  });
};

export {getToggleSandwich};
