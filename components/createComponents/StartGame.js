import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	buttons: {
		flex: 1,
		padding: 10,
		borderRadius: 10,
		margin: 5,
		alignItems: "center",
		justifyContent: "center",
	},
});

function StartGame() {
	const [startGame, setStartGame] = useState(false);
	return (
		<View
			style={{
				flex: 0.1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<TouchableOpacity
				style={[styles.buttons, { backgroundColor: "orange" }]}
				onPress={() => setStartGame(true)}
			>
				<Text>Start Game</Text>
			</TouchableOpacity>
		</View>
	);
}

export default StartGame;
