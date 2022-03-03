// function initMap() {
//   var opts = {
//     zoom: 15,
//     center: new google.maps.LatLng(35.753911591933374, 139.8298620545611)
//   };
//   var map = new google.maps.Map(document.getElementById("map"), opts);
// }

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