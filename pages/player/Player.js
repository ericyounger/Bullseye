import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

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
    const themeContext = useContext(ThemeContext);

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
            <TouchableOpacity
                style={[themeContext.theme.playerPageButtons]}
                onPress={onStatisticsClick}
            >
                <Text style={[themeContext.theme.spanFont]}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[themeContext.theme.playerPageButtons]}
                onPress={onProfileClick}
            >
                <Text style={[themeContext.theme.spanFont]}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[themeContext.theme.playerPageButtons]}
                onPress={onSettingsClick}
            >
                <Text style={[themeContext.theme.spanFont]}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Player;
