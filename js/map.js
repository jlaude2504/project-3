// map.js

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = 'YOUR_API_KEY';

function initMap() {
    // Specify the coordinates for Chinatown, Chicago
    const chinatownCoordinates = { lat: 41.850691, lng: -87.634049 };

    // Create a new map centered around Chinatown
    const map = new google.maps.Map(document.getElementById('map'), {
        center: chinatownCoordinates,
        zoom: 14 // Adjust the zoom level as needed
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: chinatownCoordinates,
        map: map,
        title: 'Chinatown, Chicago' // Marker title
    });
}
