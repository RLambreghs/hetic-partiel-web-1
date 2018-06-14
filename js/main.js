var scroll = window.scrollY;
var header = document.getElementById("header");

var toggle = function() {
  header.classList.toggle('header--hidden', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;

function myFunction() {
    var x = document.getElementById("mainav");
    if (x.className === "fl_right") {
        x.className += " responsive";
    } else {
        x.className = "fl_right";
    }
}
