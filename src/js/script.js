const hamburger = document.querySelector('.hanburger');
const menu = document.querySelector('.menu');
const cloEm = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
  menu.classList.add('active');
});

cloEm.addEventListener('click', function () {
  menu.classList.remove('active');
});

const countres = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');
countres.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
