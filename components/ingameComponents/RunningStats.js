import React from "react";
import { View } from "react-native";
import RunningStatsPlayer from "./RunningStatsPlayer";
import RunningStatsTeam from "./RunningStatsTeam";

function RunningStats() {
    return (
        <View
            style={{
                flex: 0.25,
                margin: 5,
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                borderRadius: 10,
                padding: 10,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <RunningStatsPlayer />
                <RunningStatsTeam />
            </View>
        </View>
    );
}

export default RunningStats;
