import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
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
