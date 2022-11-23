function SignUp (): JSX.Element {
    return (
        <div className="sign-up">
            <div className="header">
                <img src="icons/velologo.svg"></img>
            </div>
            <div>
                <div className="signup-image" />
                <div className="text-space">
                    <p>
                        Signing up will allow you to save your favorite stations.
                    </p>
                </div>
            </div>
            <form className="signup-form">
                <div className="input-container">
                    <input placeholder="(username)" />
                </div>
                <div className="input-container">
                    <input placeholder="password" />
                </div>
                <div>
                    <button className="signup-button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
