import { Link } from "react-router-dom";

function ProfileWrapper ({ children }: { children: JSX.Element }): JSX.Element {
    return (
        <div className="wrapper">
            <div className="header">
                <Link to="/"> <img src="icons/velologo.svg"></img> </Link>
            </div>
            <div className="grid">
                <div className="column">
                    <div className="signup-image left" />
                </div>
                <div className="column">
                    {children}
                </div>
                <div className="column">
                    <div className="signup-image right" />
                </div>
            </div>
        </div>
    );
}

export default ProfileWrapper;
