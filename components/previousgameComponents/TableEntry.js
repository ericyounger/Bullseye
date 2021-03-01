import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

function TableEntry({ player, kills, deaths, revives }) {
    const themeContext = useContext(ThemeContext);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: -2,
                padding: 10,
            }}
        >
            <Text
                style={[
                    themeContext.theme.spanFont,
                    { flex: 0.4, fontSize: 10 },
                ]}
            >
                #{player}
            </Text>
            <Text
                style={[
                    themeContext.theme.spanFont,
                    { flex: 0.3, fontSize: 10 },
                ]}
            >
                {kills}
            </Text>
            <Text
                style={[
                    themeContext.theme.spanFont,
                    { flex: 0.3, fontSize: 10 },
                ]}
            >
                {deaths}
            </Text>
            <Text
                style={[
                    themeContext.theme.spanFont,
                    { flex: 0.15, fontSize: 10 },
                ]}
            >
                {revives}
            </Text>
        </View>
    );
}

export default TableEntry;
