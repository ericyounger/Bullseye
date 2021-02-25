import React from "react";
import { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Logo from "../imageComponents/Logo";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	LoginCard: {
		flex: 0.7,
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
	const [fullName, setFullName] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	function onRegister() {
		alert("User registration complete");
		navigation.navigate("Login");
	}

	function onBack() {
		navigation.navigate("Login");
	}

	return (
		<View style={styles.container}>
			<View style={styles.LoginCard}>
				<Logo />
				<Text style={{ color: "white", marginVertical: 20 }}>
					Register
				</Text>
				<TextInput
					style={styles.inputField}
					onChangeText={(text) => setFullName(text)}
					value={fullName}
					keyboardAppearance={"dark"}
					placeholder="full name"
					placeholderTextColor="#8e8e8e"
					autoCorrect={false}
				/>
				<TextInput
					style={styles.inputField}
					onChangeText={(text) => setUserName(text)}
					value={userName}
					keyboardAppearance={"dark"}
					autoCapitalize={false}
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
					autoCapitalize={false}
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
					autoCapitalize={false}
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
		</View>
	);
}

export default Register;
