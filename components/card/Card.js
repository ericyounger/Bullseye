import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Card: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    button: {
        backgroundColor: "#457281",
        width: 150,
        height: 40,
        borderRadius: 10,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});

function Card({ title, date, children }) {
    const themeContext = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <View style={themeContext.theme.Card}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "orange", paddingBottom: 10 }}>
                        {title}
                    </Text>
                    <Text style={{ marginLeft: "auto", color: "white" }}>
                        {date}
                    </Text>
                </View>
                {children}
            </View>
        </View>
    );
}

export default Card;
