import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

function StartGame() {
    // eslint-disable-next-line no-unused-vars
    const [startGame, setStartGame] = useState(false);
    return (
        <View
            style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity
                style={[styles.buttons, { backgroundColor: "orange" }]}
                onPress={() => setStartGame(true)}
            >
                <Text>Start Game</Text>
            </TouchableOpacity>
        </View>
    );
}

export default StartGame;
