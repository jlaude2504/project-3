const apiKey = "AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI";

async function initMap() {
    var el = document.getElementById('frame');
    var myLocation = new google.maps.LatLng(41.850691, -87.634049);
    var mapOptions = {
        center: myLocation,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };

    // Create a new map centered around Chinatown
    var map = new google.maps.Map(el, mapOptions);

    // Specify the coordinates for Chinatown, Chicago
    const chinatownCoordinates = { lat: 41.850691, lng: -87.634049 };

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: chinatownCoordinates,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Chinatown, Chicago' // Marker title
    });

    var contentString = "<h1>Chinatown, Chicago</h1>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

// Call the initMap function when the window is loaded
google.maps.event.addDomListener(window, 'load', initMap);
