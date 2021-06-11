import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

function StatusChooseTeam({ gameStarted, countdown }) {
    const [message, setMessage] = useState("Waiting for the game to start");
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (gameStarted) {
            setMessage(`Game starting in: ${countdown}`);
        }
    }, [gameStarted]);
    return (
        <View>
            <Text
                style={[
                    themeContext.theme.spanFont,
                    { textAlign: "center", fontSize: 15 },
                ]}
            >
                {message}
            </Text>
        </View>
    );
}

export default StatusChooseTeam;
