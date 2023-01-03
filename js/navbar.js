const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-links');
const closeButton = document.querySelector('.close-btn');
const navMenuItems = document.querySelectorAll('.menu-item');

bars.addEventListener('click', () => {
  navMenu.classList.add('navLinks__open');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('navLinks__open');
});

navMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('navLinks__open');
  })
})