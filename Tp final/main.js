document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

window.addEventListener('load', () => {
  const bottomElement = document.getElementById('boton');
  bottomElement.scrollIntoView({ behavior: 'smooth' });
});
