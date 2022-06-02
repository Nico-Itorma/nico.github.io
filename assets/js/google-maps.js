function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 13.582763, lng: 124.209928};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bicol Region, Philippines' // Title Location
    });
}