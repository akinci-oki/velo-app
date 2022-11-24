function ProfileWrapper ({ children }: { children: JSX.Element }): JSX.Element {
    return (
        <div className="wrapper">
            <div className="header">
                <img src="icons/velologo.svg"></img>
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
