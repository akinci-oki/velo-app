import { Link } from "react-router-dom";
import ProfileWrapper from "components/ProfileWrapper/ProfileWrapper";
import Form from "components/Form/Form";

function Login (): JSX.Element {
    return (
        <div className="login">
            <ProfileWrapper>
                <>
                    <div className="text-space">
                        <p>Login to save your favorite stations.</p>
                    </div>
                    {/* <Form buttonText="Login"></Form> */}
                    <Link to="/sign-up"> <p className="link"> Do not have an account yet? </p> </Link>
                </>
            </ProfileWrapper>
        </div>
    );
}

export default Login;
