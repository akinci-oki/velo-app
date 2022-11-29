import { useUser } from "context";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "components/Error/Error";

function Form({
    buttonText,
    onClick,
}: {
    buttonText: string
    onClick: (username: string, password: string) => void
}): JSX.Element {
    const { users, setUsers, user, setUser } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        username: "",
        password: "",
        isUnique: "",
    });
    const onSubmit = (e: any): void => {
        e.preventDefault();
        setError({
            username: "",
            password: "",
            isUnique: "",
        });
        const isUnique = users.find(user => user.username === username) === undefined
        if (!isUnique) {
            setError((error) => ({
                ...error,
                isUnique: "username is already in use",
            }));
            return;
        }
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
        navigate("/");
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
                {error.username.length > 0 && <p className="error"> <Error /> {error.username}</p>}
                {error.isUnique.length > 0 && <p className="error"> <Error /> {error.isUnique}</p>}
            </div>
            <div className="input-container">
                <label> password </label>
                <input type="password" placeholder="******"
                    onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}
                />
                {error.password.length > 0 && <p className="error"> <Error /> {error.password}</p>}
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
