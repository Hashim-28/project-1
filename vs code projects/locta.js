function initMap() {
    // The location of the gym
    const gymLocation = { lat: 40.712776, lng: -74.005974 }; // Example coordinates (New York City)
    // The map, centered at the gym
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: gymLocation,
    });
    // The marker, positioned at the gym
    const marker = new google.maps.Marker({
        position: gymLocation,
        map: map,
    });
}

// Ensure the map initializes after the API script loads
window.onload = initMap;
