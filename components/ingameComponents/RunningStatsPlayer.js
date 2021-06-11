import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

function RunningStatsPlayer() {
    const contextTheme = useContext(ThemeContext);
    return (
        <View
            style={{
                flex: 0.5,
                borderRightWidth: 1,
                borderRightColor: "#457281",

                alignItems: "left",
            }}
        >
            <Text style={{ color: "white" }}>Your stats:</Text>
            <Text style={[contextTheme.theme.secondaryColor, { fontSize: 25 }]}>
                Kills: 9
            </Text>
            <Text style={[contextTheme.theme.secondaryColor, { fontSize: 25 }]}>
                Deaths: 2
            </Text>
            <Text style={[contextTheme.theme.secondaryColor, { fontSize: 25 }]}>
                Revives: 5
            </Text>
        </View>
    );
}

export default RunningStatsPlayer;
