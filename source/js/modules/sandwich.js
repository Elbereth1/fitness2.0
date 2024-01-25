const sandwich = document.querySelector('.faq__sublist-button');
const list = document.querySelector('.faq > p');

const getToggleSandwich = () => {
  sandwich.addEventListener('click', () => {
    if (sandwich.classList.contains('faq__sublist-button--open')) {
      sandwich.classList.remove('faq__sublist-button--open');
      sandwich.classList.add('faq__sublist-button--closed');
      faq.classList.remove('');
    } else {
      sandwich.classList.remove('faq__sublist-button--closed');
      sandwich.classList.add('faq__sublist-button--open');
      faq.classList.add('');
    }
  });
};

export {getToggleSandwich};
