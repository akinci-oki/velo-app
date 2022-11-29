import Map from "components/Map/Map";
import { Link } from "react-router-dom";
import { useUser } from "context";

function Homepage (): JSX.Element {
    const { user } = useUser();
    return (
        <div className="home-page">
            <div className="button-container">
                <Link to={user.username.length > 0 ? "/log-out" : "/sign-up"}>
                    <button>
                        <span className="acc-icon">
                            <img className="icon" src="icons/user-icon-white.png" />
                        </span>
                        <span className="label">
                            {user.username.length > 0 ? "Log out" : "Sign Up"}
                        </span>
                    </button>
                </Link>
            </div>
            {user?.username?.length > 0 && <div className="welcome-message">
                <p> Welcome to Velo MApp! </p>
            </div>}
            <div>
                <div className="bike-image" />
                <div className="text-space">
                    <p>
                        Find a Velo station and save your favourite stations.
                    </p>
                </div>
            </div>
            <div className="content-container">
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
                </div>
                <Map/>
            </div>
        </div>
    );
}

export default Homepage;
