import React from "react";
import { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
} from "react-native";

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

function Settings({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Settings page</Text>
		</View>
	);
}

export default Settings;
