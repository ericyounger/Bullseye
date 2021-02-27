import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Highlights from "../../components/previousgameComponents/Highlights";
import Table from "../../components/previousgameComponents/Table";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inGameCard: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    gamePinText: {
        color: "orange",
        fontSize: 30,
        padding: 10,
    },
});

function PreviousGame() {
    return (
        <View style={styles.container}>
            <View style={styles.inGameCard}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "orange", paddingBottom: 10 }}>
                        Team Deathmatch
                    </Text>
                    <Text style={{ marginLeft: "auto", color: "white" }}>
                        24.02.21
                    </Text>
                </View>
                <Text
                    style={{
                        color: "#49CD8D",
                        fontSize: 10,
                        textAlign: "left",
                        paddingVertical: 10,
                    }}
                >
                    Highlighted players
                </Text>
                <Highlights />
                <Text
                    style={{
                        color: "#49CD8D",
                        fontSize: 10,
                        textAlign: "left",
                        paddingVertical: 10,
                    }}
                >
                    Scoreboard
                </Text>
                <Table />
            </View>
        </View>
    );
}

export default PreviousGame;
