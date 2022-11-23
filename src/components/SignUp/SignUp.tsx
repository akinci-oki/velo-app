function SignUp (): JSX.Element {
    return (
        <div className="sign-up">
            <div className="header">
                <img src="icons/velologo.svg"></img>
            </div>
            <div className="grid">
                <div className="column">
                    <div className="signup-image left" />
                </div>
                <div className="column">
                    <div className="text-space">
                        <p>
                            Signing up will allow you to save your favorite
                            stations.
                        </p>
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
                </div>
                <div className="column">
                    <div className="signup-image right" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
