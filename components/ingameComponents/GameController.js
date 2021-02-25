import React from "react";
import { Text, View } from "react-native";

function GameController({ decrementText, incrementText }) {
	return (
		<View style={{ flex: 1, flexDirection: "row" }}>
			<View
				style={{
					flex: 0.5,
					justifyContent: "center",
					alignItems: "center",
					margin: 5,
					backgroundColor: "rgba(73, 205, 141, 0.1)",
					borderRadius: 10,
					borderColor: "rgba(69, 114, 129, 1)",
					borderWidth: 1,
				}}
			>
				<Text style={{ color: "white" }}>{decrementText}</Text>
			</View>
			<View
				style={{
					flex: 0.5,
					justifyContent: "center",
					alignItems: "center",
					margin: 5,
					backgroundColor: "rgba(69, 114, 129, 0.2)",
					borderRadius: 10,
					borderColor: "#457281",
					borderWidth: 1,
				}}
			>
				<Text style={{ color: "white" }}>{incrementText}</Text>
			</View>
		</View>
	);
}
export default GameController;
