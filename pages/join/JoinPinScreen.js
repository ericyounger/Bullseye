import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Logo from "../../components/imageComponents/Logo";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputField: {
        height: 40,

        width: "80%",
        color: "white",
        borderRadius: 10,
        backgroundColor: "#3C4244",
        textAlign: "center",
    },
    gamePinText: {
        color: "orange",
        fontSize: 30,
        padding: 10,
    },
});

function JoinPinScreen({ navigation }) {
    const [pinInput, setPinInput] = useState("");

    function onSubmit() {
        navigation.navigate("Choose Team");
    }
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.gamePinText}>Join Match</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={(text) => setPinInput(text)}
                value={pinInput}
                keyboardAppearance={"dark"}
                returnKeyType="send"
                onSubmitEditing={onSubmit}
                placeholder="enter game pin"
                placeholderTextColor="#8e8e8e"
                autoCorrect={false}
            />
        </View>
    );
}

export default JoinPinScreen;
