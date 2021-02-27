import React from "react";
import { View } from "react-native";
import GameController from "./GameController";
import RunningStats from "./RunningStats";

function InGameControllers() {
    return (
        <View style={{ flex: 1, paddingVertical: 20 }}>
            <RunningStats />
            <View style={{ flex: 0.75 }}>
                <GameController
                    incrementText="kills++"
                    decrementText="kills--"
                />
                <GameController
                    incrementText="deaths++"
                    decrementText="deaths--"
                />
                <GameController
                    incrementText="revives++"
                    decrementText="revives--"
                />
            </View>
        </View>
    );
}

export default InGameControllers;
