import { useState } from "react";
import Router from "Router";
import { userContext } from "./context";

function App (): JSX.Element {
    const [users, setUsers] = useState([
        {
            id: "327910ed-015d-4815-a615-385b39fddbb8",
            username: "admin",
            password: "admin"
        }
    ]);
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
    });
    return (
        <div className="App">
            <userContext.Provider value={{ user, setUser, users, setUsers }}>
                <Router></Router>
            </userContext.Provider>
        </div>
    );
}

export default App;
