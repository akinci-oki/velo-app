import ProfileWrapper from "components/ProfileWrapper/ProfileWrapper";

function SignUp (): JSX.Element {
    return (
        <div className="sign-up">
            <ProfileWrapper>
                <>
                    <div className="text-space">
                        <p>Signing up will allow you to save your favorite stations.</p>
                    </div>
                    <form className="signup-form">
                        <div className="input-container">
                            <label> username </label>
                            <input placeholder="Okidoki" />
                        </div>
                        <div className="input-container">
                            <label> password </label>
                            <input type="password" placeholder="******" />
                        </div>
                        <div>
                            <button className="signup-button">Sign Up</button>
                        </div>
                    </form>
                </>
            </ProfileWrapper>
        </div>
    );
}

export default SignUp;
