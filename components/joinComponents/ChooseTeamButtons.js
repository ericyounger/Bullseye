import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    chooseCard: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    teamSelection: {
        borderWidth: 1,
        borderColor: "white",
        flex: 0.5,
        height: "auto",
        borderRadius: 10,
        padding: 5,
        marginHorizontal: 3,
        marginBottom: 15,
    },
    buttons: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

function ChooseTeamButtons({ callback }) {
    function onTeamSelection(team) {
        callback(team);
    }

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={[
                        styles.buttons,
                        { backgroundColor: "rgba(41, 96, 178, 1.0)" },
                    ]}
                    onPress={() => onTeamSelection("Blue")}
                >
                    <Text>Blue team</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttons, { backgroundColor: "grey" }]}
                    onPress={() => onTeamSelection("Auto")}
                >
                    <Text>Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.buttons,
                        { backgroundColor: "rgba(178, 41, 41, 1.0)" },
                    ]}
                    onPress={() => onTeamSelection("Red")}
                >
                    <Text>Red team</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ChooseTeamButtons;
