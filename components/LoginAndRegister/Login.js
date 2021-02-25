import React from "react";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Logo } from "../../pages/home/Home";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	LoginCard: {
		flex: 0.6,

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

	function onLogin() {}

	function onRegister() {
		navigation.navigate("Register");
	}

	return (
		<View style={styles.container}>
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
					autoCorrect={false}
				/>
				<View style={{ flexDirection: "row", padding: 40 }}>
					<TouchableOpacity
						style={styles.registerBtn}
						onPress={onRegister}
					>
						<Text>Register</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginBtn}>
						<Text>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Login;
