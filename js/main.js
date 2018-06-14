var scroll = window.scrollY;
var header = document.getElementById("header");

var toggle = function() {
  header.classList.toggle('header--hidden', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;
