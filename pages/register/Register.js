import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import Logo from "../../components/imageComponents/Logo";

import userService from "../../service/userService";

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
    LoginCard: {
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        height: 40,
        marginVertical: 5,
        width: "80%",
        color: "white",
        borderRadius: 10,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        textAlign: "center",
    },
    backBtn: {
        flex: 1,
        height: 30,
        backgroundColor: "#72757A",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
    },
    registerBtn: {
        flex: 1,
        height: 30,
        backgroundColor: "#457281",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",

        marginHorizontal: 5,
    },
});

function Register({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    function onRegister() {
        if (password === repeatPassword) {
            console.log(password);
            userService
                .registerUser({
                    firstName,
                    lastName,
                    userName,
                    email,
                    password,
                })
                .then((res) => {
                    alert("User registration complete");
                    navigation.navigate("Login");
                })
                .catch((rej) => {
                    console.log(rej);
                });
        }
    }

    function onBack() {
        navigation.navigate("Login");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.LoginCard}>
                <Logo />
                <Text style={{ color: "white", marginVertical: 20 }}>
                    Register
                </Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    keyboardAppearance={"dark"}
                    placeholder="first name"
                    placeholderTextColor="#8e8e8e"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    keyboardAppearance={"dark"}
                    placeholder="last name"
                    placeholderTextColor="#8e8e8e"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                    keyboardAppearance={"dark"}
                    autoCapitalize={"none"}
                    placeholder="username"
                    placeholderTextColor="#8e8e8e"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardAppearance={"dark"}
                    autoCapitalize={"none"}
                    placeholder="email"
                    placeholderTextColor="#8e8e8e"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    keyboardAppearance={"dark"}
                    placeholder="password"
                    placeholderTextColor="#8e8e8e"
                    textContentType="password"
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setRepeatPassword(text)}
                    value={repeatPassword}
                    keyboardAppearance={"dark"}
                    placeholder="repeat password"
                    placeholderTextColor="#8e8e8e"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                />
                <View style={{ flexDirection: "row", padding: 40 }}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.registerBtn}
                        onPress={onRegister}
                    >
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Register;
