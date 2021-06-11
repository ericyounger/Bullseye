import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import {
    backgrounds,
    darkTheme,
    lightTheme,
} from "../theme_stylesheets/themes";

const styles = StyleSheet.create({
    menu: {
        backgroundColor: "#313334",
        borderRadius: 10,
        flexDirection: "row",
        height: 63,
        marginHorizontal: 20,
        marginBottom: 20,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});

function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);
    const [theme, setTheme] = useState(darkTheme);
    const [background, setBackground] = useState(null);

    useEffect(() => {
        if (darkMode) {
            setTheme(darkTheme);
            setBackground(backgrounds.darkBackground);
        } else {
            setTheme(lightTheme);
            setBackground(backgrounds.lightBackground);
        }
    }, [darkMode]);

    const initValues = {
        theme,
        setDarkMode,
    };

    return (
        <ThemeContext.Provider value={initValues}>
            <ImageBackground source={background} style={styles.image}>
                {children}
            </ImageBackground>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
