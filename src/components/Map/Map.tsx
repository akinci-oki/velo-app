import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

function Map (): JSX.Element {
    const [markerPositions, setMarkerPositions] = useState([[51.22373, 4.40302], [51.22219, 4.40459]] as Array<[number, number]>);
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
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerPositions.map((marker, index) => (
                <Marker key={index} position={marker}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            ))};
        </MapContainer>
    );
}

/*http://api.citybik.es/v2/networks/velo-antwerpen*/

export default Map;
