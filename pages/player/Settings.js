import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../../components/card/Card";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";
import ToggleSwitch from "../../components/createComponents/ToggleSwitch";

const styles = StyleSheet.create({
    logOutBtn: {
        borderColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginTop: "auto",
    },
    rowItem: {
        borderBottomColor: "#878787",
        borderBottomWidth: 1,
    },
});

function Settings() {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    return (
        <Card title="Settings page">
            <View style={styles.rowItem}>
                <ToggleSwitch
                    displayText="Dark theme"
                    callback={(bool) => {
                        themeContext.setDarkMode(bool);
                    }}
                    defaultValue={true}
                />
            </View>

            <Text style={[themeContext.theme.spanFont, { paddingTop: 20 }]}>
                Notifications
            </Text>

            <TouchableOpacity
                style={styles.logOutBtn}
                onPress={() => userContext.setLoggedIn(false)}
            >
                <Text style={themeContext.theme.spanFont}>Log out</Text>
            </TouchableOpacity>
        </Card>
    );
}

export default Settings;
