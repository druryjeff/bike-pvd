$(document).foundation();

function initMap() {
  var uluru = {lat: 41.737406, lng: -71.323055};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
  });
  var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
}
