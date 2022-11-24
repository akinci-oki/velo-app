import { Link } from "react-router-dom";
import ProfileWrapper from "components/ProfileWrapper/ProfileWrapper";
import Form from "components/Form/Form";

function SignUp (): JSX.Element {
    return (
        <div className="sign-up">
            <ProfileWrapper>
                <>
                    <div className="text-space">
                        <p>Signing up will allow you to save your favorite stations.</p>
                    </div>
                    <Form buttonText="Sign Up"></Form>
                    <Link to="/login"> <p className="link"> Already have an account? </p> </Link>
                </>
            </ProfileWrapper>
        </div>
    );
}

export default SignUp;
