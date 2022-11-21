import Map from "components/Map/Map";

function Homepage (): JSX.Element {
    return (
        <div className="home-page">
            <div className="buttons">
                <button>
                    <img className="icon" src="icons/user-icon-white.png" />
                </button>
            </div>
            <div>
                <div className="bike-image" />
                <div className="text-space">
                    <p>
                        Find a Velo station and save your favourite stations.
                    </p>
                </div>
            </div>
            <div className="content">
                <h1> Find a station </h1>
                <p>
                    The map shows which stations are open and shows the number of
                    available bikes in each station in real time.
                </p>
                <div className="info-markers">
                    <div className="station"> <img src="icons/station-orange.png"/> <p>Available bikes</p> </div>
                    <div className="station"> <img src="icons/station-blue.png"/> <p>Empty Station</p> </div>
                    <div className="station"> <img src="icons/station-red.png"/> <p>Full Station</p> </div>
                    <div className="station"> <img src="icons/station-grey.png"/> <p>Out of service</p> </div>
                </div>
                <Map/>
            </div>
        </div>
    );
}

export default Homepage;
