import React from "react";
import { Text, View } from "react-native";

function Achievements() {
    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={{ color: "#BD7C2F" }}>Achievements</Text>
            <View style={{ paddingTop: 5 }}>
                <Text style={{ color: "white" }}>* Team killer</Text>
                <Text style={{ color: "white" }}>* Rambo</Text>
                <Text style={{ color: "white" }}>* Fragger</Text>
            </View>
        </View>
    );
}

export default Achievements;
