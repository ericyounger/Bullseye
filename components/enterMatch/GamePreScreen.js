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
	inGameCard: {
		flex: 0.9,
		width: "90%",
		borderRadius: 20,
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		padding: 20,
	},
	gamePinText: {
		color: "orange",
		fontSize: 30,
		padding: 10,
	},
});

function GamePreScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.inGameCard}>
				<Text>Game pre screen, show pin and etc</Text>
			</View>
		</View>
	);
}

export default GamePreScreen;
