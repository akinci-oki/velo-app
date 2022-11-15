import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map (): JSX.Element {
    return (
        <MapContainer
            center={[51.2213, 4.4051]}
            zoom={12.4}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
