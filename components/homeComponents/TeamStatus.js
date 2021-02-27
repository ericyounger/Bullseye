import React from "react";
import { Text, View } from "react-native";

function TeamStatus() {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View
                style={{
                    width: 23,
                    height: 16,
                    backgroundColor: "#2960B2",
                    borderRadius: 15,
                    marginRight: 7,
                }}
            ></View>
            <Text style={{ color: "white", marginRight: 10 }}>25</Text>
            <View
                style={{
                    width: 23,
                    height: 16,
                    backgroundColor: "#B22929",
                    borderRadius: 15,
                    marginRight: 7,
                }}
            ></View>
            <Text style={{ color: "white" }}>11</Text>
        </View>
    );
}

export default TeamStatus;
