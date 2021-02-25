import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

function StatusChooseTeam({ gameStarted, countdown }) {
	const [message, setMessage] = useState("Waiting for the game to start");
	useEffect(() => {
		gameStarted == true
			? setMessage(`Game starting in: ${countdown}`)
			: null;
	}, [gameStarted]);
	return (
		<View>
			<Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
				{message}
			</Text>
		</View>
	);
}

export default StatusChooseTeam;
