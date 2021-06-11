import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

function RunningStatsTeam() {
    const contextTheme = useContext(ThemeContext);

    return (
        <View
            style={{
                flex: 0.5,
                justifyContent: "center",
                marginLeft: 15,
                textAlign: "left",
            }}
        >
            <Text style={{ color: "white" }}>Team stats:</Text>
            <Text style={[contextTheme.theme.secondaryColor, { fontSize: 25 }]}>
                Kills: 100
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

export default RunningStatsTeam;
