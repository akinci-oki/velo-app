import L from "leaflet";

const orangeMarker: L.DivIcon = L.divIcon({
    className: "orange-marker",
    iconSize: [30, 39],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
});
const blueMarker: L.DivIcon = L.divIcon({
    className: "blue-marker",
    iconSize: [30, 39],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
});
const greyMarker: L.DivIcon = L.divIcon({
    className: "grey-marker",
    iconSize: [30, 39],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
});
const redMarker: L.DivIcon = L.divIcon({
    className: "red-marker",
    iconSize: [30, 39],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
});

export { orangeMarker, blueMarker, greyMarker, redMarker };
