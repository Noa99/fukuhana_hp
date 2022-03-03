window.onscroll = function () { scrolling() };

var nav = document.getElementById("navi");
var navTop = nav.offsetTop;

function scrolling() {
  if (window.scrollY >= navTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}