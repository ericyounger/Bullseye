import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Limits from "../../components/createComponents/Limits";
import GameType from "../../components/createComponents/GameType";
import Card from "../../components/card/Card";
import ThemeContext from "../../components/contexts/ThemeContext";

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
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

function Create({ navigation }) {
    const themeContext = useContext(ThemeContext);

    function onCreateMatchClicked() {
        navigation.navigate("GamePreScreen");
    }

    return (
        <Card title="Create game">
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: [themeContext.theme.spanFont, { fontSize: 7 }],
                    tabStyle: { width: 100 },
                    indicatorStyle: { backgroundColor: "#457281" },
                    style: { backgroundColor: "transparent" },
                }}
            >
                <Tab.Screen name="Game type" component={GameType} />
                <Tab.Screen name="Limits" component={Limits} />
            </Tab.Navigator>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onCreateMatchClicked}
                >
                    <Text style={{ color: "white" }}>Create Match</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
}

export default Create;
