/* eslint-disable global-require */
import { createContext } from "react";

const initValues = {
    loggedIn: false,
    user: {
        name: "Eric",
        lastName: "Younger",
    },
    setLoggedIn: () => {},
};

const UserContext = createContext(initValues);

export default UserContext;
