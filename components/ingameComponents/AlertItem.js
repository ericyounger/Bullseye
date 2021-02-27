/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#457281",
        width: "100%",
        height: 40,
        borderRadius: 10,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});

function AlertItem({ alertText }) {
    function onButtonClick() {
        alert(alertText);
    }

    return (
        <View style={{ marginBottom: 10 }}>
            <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                <Text>{alertText}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AlertItem;
