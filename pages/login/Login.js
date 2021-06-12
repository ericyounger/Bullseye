import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import UserContext from "../../contexts/UserContext";
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
    loginBtn: {
        flex: 1,
        height: 30,
        backgroundColor: "#189881",
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

function Login({ navigation }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // TODO: SALT AND HASH BEFORE TRANSIT
    const userContext = useContext(UserContext);

    function onRegister() {
        navigation.navigate("Register");
    }

    function onLogin() {
        userService
            .loginUser(userName, password)
            .then((res) => {
                userContext.setLoggedIn(true);
                const json = res.data;
                userContext.setAccessToken(json);

                userService
                    .getUserInfo(json.access_token)
                    .then(async (userInfo) => {
                        await userContext.setUser(userInfo.data);
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch((err) => {});
            })
            .catch((rej) => {
                console.log("error");
                console.log(rej);
            });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.LoginCard}>
                <Logo />
                <Text style={{ color: "white", marginVertical: 20 }}>
                    Login
                </Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                    keyboardAppearance={"dark"}
                    placeholder="username"
                    placeholderTextColor="#8e8e8e"
                    autoCapitalize={"none"}
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
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                />
                <View style={{ flexDirection: "row", padding: 40 }}>
                    <TouchableOpacity
                        style={styles.registerBtn}
                        onPress={onRegister}
                    >
                        <Text>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;
