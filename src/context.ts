import { createContext, useContext } from "react";

export interface User {
    id: string
    username: string
    password: string
}

export interface UserContextType {
    user: User
    setUser: (user: User) => void
    users: User[]
    setUsers: (users: User[]) => void
}
export const userContext = createContext<UserContextType>({
    user: { id: "", username: "", password: "" },
    /* eslint-disable-next-line no-console */
    setUser: (user) => console.warn("No userContext provider."),
    users: [
        {
            id: "327910ed-015d-4815-a615-385b39fddbb8",
            username: "admin",
            password: "admin"
        }
    ],
    /* eslint-disable-next-line no-console */
    setUsers: (users) => console.warn("No userContext provider."),

});
export const useUser = (): UserContextType => useContext(userContext);
