function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.753911591933374, 139.8298620545611)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);
}

