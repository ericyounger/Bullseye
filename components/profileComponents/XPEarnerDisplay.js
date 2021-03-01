import React, { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

function XPEarnerDisplay({ xpEarned, xpMaxThisLevel }) {
    const [procentXP, setProcentXP] = useState(37);
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        setProcentXP((100 * (xpEarned / xpMaxThisLevel)).toFixed(0));
    }, [xpEarned]);

    return (
        <View>
            <View
                style={{
                    width: "100%",
                    height: 16,
                    backgroundColor: "#C4C4C4",
                    position: "relative",
                    borderRadius: 10,
                }}
            />
            <View
                style={{
                    width: `${procentXP}%`,
                    height: 16,
                    backgroundColor: "#BB8B5F",
                    position: "absolute",
                    borderRadius: 10,
                }}
            />
            <Text
                style={{
                    color: themeContext.theme.spanFont.color,
                    fontSize: 10,
                    textAlign: "right",
                    paddingTop: 5,
                }}
            >
                {xpEarned} / {xpMaxThisLevel} xp
            </Text>
        </View>
    );
}

export default XPEarnerDisplay;
