import React, { useContext } from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import TeamStatus from "./TeamStatus";
import TimeLeft from "./TimeLeft";

const styles = StyleSheet.create({
    fontOrange: {
        color: "orange",
    },
});

function ActiveGame({ navigation }) {
    const themeContext = useContext(ThemeContext);

    function onActiveGameClick() {
        navigation.navigate("InGame");
    }
    return (
        <TouchableOpacity onPress={onActiveGameClick}>
            <View style={[themeContext.theme.ActiveGameCard]}>
                <Text style={[themeContext.theme.titleFont]}>
                    Team deathmatch
                </Text>
                <View style={{ paddingTop: 0 }}>
                    <Text
                        style={[themeContext.theme.spanFont, { fontSize: 60 }]}
                    >
                        15-11
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TimeLeft timePassed={15} gameTime={30} />
                    <TeamStatus />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ActiveGame;
