import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

const styles = StyleSheet.create({
    IncDec: {
        width: 45,
        height: 25,
        backgroundColor: "#457281",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

function ItemCounter({ text, min, max, defaultValue }) {
    const [counter, setCounter] = useState(0);
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        setCounter(defaultValue);
    }, [defaultValue]);

    function updateCounter(action) {
        if (action === "dec") {
            if (counter > min) setCounter(counter - 1);
        } else if (action === "inc") {
            if (counter < max) setCounter(counter + 1);
        }
    }
    return (
        <View
            style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}
        >
            <Text style={[themeContext.theme.spanFont]}>{text}</Text>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
                <TouchableOpacity
                    style={[styles.IncDec]}
                    onPress={() => updateCounter("dec")}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>-</Text>
                </TouchableOpacity>
                <Text
                    style={[
                        themeContext.theme.spanFont,
                        { marginLeft: 10, fontSize: 20 },
                    ]}
                >
                    {counter}
                </Text>
                <TouchableOpacity
                    style={[styles.IncDec, { marginLeft: 10 }]}
                    onPress={() => updateCounter("inc")}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ItemCounter;
