import React from "react";
import { Text, View } from "react-native";

function TableHeader() {
    return (
        <View
            style={{
                backgroundColor: "#4F5556",
                height: 28,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                alignItems: "center",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}
        >
            <Text style={{ color: "white", fontSize: 10 }}>Player</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Kills</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Deaths</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Revives</Text>
        </View>
    );
}

export default TableHeader;
