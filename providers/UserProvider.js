import React, { useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [accessToken, setAccessToken] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const initValues = {
        loggedIn,
        user,
        setLoggedIn,
        setUser,
        accessToken,
        setAccessToken,
    };

    useEffect(() => {
        console.log(loggedIn);
    }, [loggedIn]);

    return (
        <UserContext.Provider value={initValues}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
