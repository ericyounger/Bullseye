import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InGameControllers from "../../components/ingameComponents/InGameControllers";
import Alert from "../../components/ingameComponents/Alert";

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
});

const Tab = createMaterialTopTabNavigator();

function InGame() {
    return (
        <View style={styles.container}>
            <View style={styles.inGameCard}>
                <Text style={{ color: "orange", paddingBottom: 10 }}>
                    Team Deathmatch
                </Text>
                <Tab.Navigator
                    tabBarOptions={{
                        labelStyle: { fontSize: 7 },
                        tabStyle: { width: 100 },
                        indicatorStyle: { backgroundColor: "#457281" },
                        style: { backgroundColor: "transparent" },
                    }}
                >
                    <Tab.Screen
                        name="Controllers"
                        component={InGameControllers}
                    />
                    <Tab.Screen name="Alert" component={Alert} />
                </Tab.Navigator>
            </View>
        </View>
    );
}

export default InGame;
