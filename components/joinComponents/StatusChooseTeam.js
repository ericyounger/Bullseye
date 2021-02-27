import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function StatusChooseTeam({ gameStarted, countdown }) {
    const [message, setMessage] = useState("Waiting for the game to start");
    useEffect(() => {
        if (gameStarted) {
            setMessage(`Game starting in: ${countdown}`);
        }
    }, [gameStarted]);
    return (
        <View>
            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
                {message}
            </Text>
        </View>
    );
}

export default StatusChooseTeam;
