import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

function HighlightItem({ player, highlightText }) {
    const contextTheme = useContext(ThemeContext);

    return (
        <View
            style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                borderRadius: 10,
            }}
        >
            <Text style={contextTheme.theme.secondaryColor}>#{player}</Text>
            <Text style={{ color: "white" }}>{highlightText}</Text>
        </View>
    );
}

export default HighlightItem;
