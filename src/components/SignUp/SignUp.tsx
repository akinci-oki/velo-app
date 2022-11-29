import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import ProfileWrapper from "components/ProfileWrapper/ProfileWrapper";
import Form from "components/Form/Form";
import { useUser } from "context";

function SignUp (): JSX.Element {
    const { users, setUsers, user, setUser } = useUser();
    function onSignUp(username: string, password: string): void {
        console.log(username, password);
        const newUser = {
            id: uuid(),
            username,
            password,
        };
        setUsers([...users, newUser]);
        setUser(newUser);
    }
    return (
        <div className="sign-up">
            <ProfileWrapper>
                <>
                    <div className="text-space">
                        <p>Signing up will allow you to save your favorite stations.</p>
                    </div>
                    <Form onClick={onSignUp} buttonText="Sign up"></Form>
                    <Link to="/login"> <p className="link"> Already have an account? </p> </Link>
                </>
            </ProfileWrapper>
        </div>
    );
}

export default SignUp;
