mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    // center: coordinates,
    center: listing.geometry.coordinates,
    zoom: 9,
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({ color : "red" })
.setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
.setPopup (
    new mapboxgl.Popup({ offset : 25}).setHTML(
        // "<h4>You'll be living here!</h4>"
        `<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`
        // listing.title
    )
)
.addTo(map);
