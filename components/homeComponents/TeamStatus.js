import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

function TeamStatus() {
    const themeContext = useContext(ThemeContext);

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
            <Text style={[themeContext.theme.spanFont, { marginRight: 10 }]}>
                25
            </Text>
            <View
                style={{
                    width: 23,
                    height: 16,
                    backgroundColor: "#B22929",
                    borderRadius: 15,
                    marginRight: 7,
                }}
            ></View>
            <Text style={[themeContext.theme.spanFont]}>11</Text>
        </View>
    );
}

export default TeamStatus;
