import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import { orangeMarker } from "./markers";

interface Station {
    status: string
    address: string
    name: string
    free_bikes: number
    empty_slots: number
    location: [number, number]
}

function Map (): JSX.Element {
    const [stations, setStations] = useState([]);
    async function getLocations (): Promise<void> {
        try {
            const response = await axios.get("http://api.citybik.es/v2/networks/velo-antwerpen");
            const stations = response.data.network.stations.map((station: any) => {
                return {
                    status: station.extra.status,
                    address: station.extra.address,
                    name: station.name,
                    free_bikes: station.free_bikes,
                    empty_slots: station.empty_slots,
                    location: [station.latitude, station.longitude],
                };
            });
            setStations(stations);
            console.log(response);
            console.log(stations);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect((): void => {
        getLocations();
    }, []);

    const getIcon = (station: Station): L.DivIcon => {
        return orangeMarker;
    };

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
            {stations.length > 0 &&
                stations.map((station: Station, index: number) => (
                    <Marker
                        key={index} position={station.location} icon={getIcon(station)} >
                        <Popup>
                            {station.name}  <br />
                            {station.free_bikes} {station.empty_slots}
                        </Popup>
                    </Marker>
                ))}
            ;
        </MapContainer>
    );
};
/*OPN, CLS*/
/*styling the markers*/
/*if available-orange*/
/*if empty-blue*/
/*if full-red*/
/*if status-CLS-grey*/
/*popups: station number✔ , station name✔ , available bikes✔ , empty slots✔ */
export default Map;
