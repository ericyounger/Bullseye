import React from "react";

import Routes from "./Routes";
import ThemeProvider from "./providers/ThemeProvider";
import UserProvider from "./providers/UserProvider";

export default function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <Routes />
            </UserProvider>
        </ThemeProvider>
    );
}
