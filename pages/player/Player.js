import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#3C4244",
        width: "80%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
});

function Player({ navigation }) {
    function onProfileClick() {
        navigation.navigate("Profile");
    }

    function onStatisticsClick() {
        navigation.navigate("Statistics");
    }

    function onSettingsClick() {
        navigation.navigate("Settings");
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onStatisticsClick}>
                <Text style={{ color: "white" }}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onProfileClick}>
                <Text style={{ color: "white" }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onSettingsClick}>
                <Text style={{ color: "white" }}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Player;
