import React, { useState } from "react";

function Form({
    buttonText,
    onClick,
}: {
    buttonText: string
    onClick: (username: string, password: string) => void
}): JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        username: "",
        password: "",
    });
    const onSubmit = (e: any): void => {
        e.preventDefault();
        setError({
            username: "",
            password: "",
        });
        if (username.length < 1) {
            setError((error) => ({
                ...error,
                username: "please fill in username.",
            }));
        }
        if (password.length < 1) {
            setError((error) => ({
                ...error,
                password: "please fill in password.",
            }));
        }
        if (username.length < 1 || password.length < 1) {
            return;
        }
        onClick(username, password);
    };
    return (
        <form className="form">
            <div className="input-container">
                <label> username </label>
                <input placeholder="Okidoki" onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                }}
                />
                {<p className="error"> {error.username}</p>}
            </div>
            <div className="input-container">
                <label> password </label>
                <input type="password" placeholder="******"
                    onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}
                />
                {<p className="error">{error.password}</p>}
            </div>
            <div>
                <button onClick={onSubmit} type="submit" className="button">
                    {buttonText}
                </button>
            </div>
        </form>
    );
}

export default Form;
