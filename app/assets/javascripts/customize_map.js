$(document).ready(function(){
  // var s = document.createElement("script");
  // s.type = "text/javascript";
  // s.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCDjAvkVv9GVjlGGJX87dvsQ8gZDQ4lcNA&sensor=false";
  // $("head").prepend(s);
  if($(".vevent .latitude").length){
    var lat = $(".vevent .latitude").attr('title');
    var lang = $(".vevent .longitude").attr('title');
    var myMapTitle = $(".vevent .title").attr('title');

    google.maps.visualRefresh = true;
    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(lat, lang),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);

      var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title: myMapTitle,
        animation: google.maps.Animation.DROP,
        icon: '/assets/bts_icon_sap.png'
      });


      google.maps.event.addListener(marker, 'click', toggleBounce);
     
    function toggleBounce() {

      if (marker.getAnimation() != null) {
        
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      map.setZoom(18);
      map.setCenter(marker.getPosition());
    }

    }

    google.maps.event.addDomListener(window, 'load', initialize);

  }
  
})
