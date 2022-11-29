import { useUser } from "context";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileWrapper from "components/ProfileWrapper/ProfileWrapper";

function Logout (): JSX.Element {
    const { users, setUsers, user, setUser } = useUser();

    useEffect(() => {
        setUser({
            id: "",
            username: "",
            password: "",
        });
    }, []);

    return (
        <div className="log-out">
            <ProfileWrapper>
                <>
                    <div className="text-space">
                        <p>You&apos;re now logged out!</p>
                    </div>
                    <div className="logout-button">
                        <Link to="/">  <button className="button"> Home </button> </Link>
                    </div>
                </>
            </ProfileWrapper>
        </div>
    );
}

export default Logout;
