let map;

function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: {lat: 48.46612, lng: 35.05568},
        zoom: 18,
    });
}

