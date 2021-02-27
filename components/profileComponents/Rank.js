import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import XPEarnerDisplay from "./XPEarnerDisplay";
import Achievements from "./Achievements";

function Rank() {
    return (
        <View>
            <Text style={{ color: "#BD7C2F" }}>Rank</Text>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ flex: 0.2, flexDirection: "row" }}>
                    <Ionicons name={"star"} size={22} color={"#fff"} />
                    <Ionicons name={"star"} size={22} color={"#fff"} />
                </View>
                <View style={{ flex: 0.8 }}>
                    <Text style={{ color: "#8298E4", fontSize: 19 }}>
                        Two star general
                    </Text>
                </View>
            </View>
            <XPEarnerDisplay xpEarned={3451} xpMaxThisLevel={12000} />
            <Achievements />
        </View>
    );
}

export default Rank;
