import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import axios from "axios";

function Map (): JSX.Element {
    async function getLocations (): Promise<void> {
        try {
            const response = await axios.get("http://api.citybik.es/v2/networks/velo-antwerpen");
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect((): void => {
        getLocations();
    }, []);

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

/*http://api.citybik.es/v2/networks/velo-antwerpen*/

export default Map;
