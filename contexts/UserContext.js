/* eslint-disable global-require */
import { createContext } from "react";

const initValues = {
    loggedIn: false,
    user: {
        name: "Eric",
        lastName: "Younger",
    },
    setUser: () => {},
    setLoggedIn: () => {},
    setAccessToken: () => {},
    accessToken: "",
};

const UserContext = createContext(initValues);

export default UserContext;
