const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".toggle");
const navOverlay = document.querySelector('.overlay--nav');

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");

navToggle.onclick = function() {
  navToggle.classList.toggle("toggle--active");
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
  navOverlay.classList.toggle('overlay--reveal');
};

navOverlay.onclick = function() {
  navToggle.classList.toggle("toggle--active");
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
  navOverlay.classList.toggle('overlay--reveal');
};
