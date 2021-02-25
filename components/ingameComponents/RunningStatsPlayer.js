import React from "react";
import { Text, View } from "react-native";

function RunningStatsPlayer() {
	return (
		<View
			style={{
				flex: 0.5,
				borderRightWidth: 1,
				borderRightColor: "#457281",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={{ color: "white" }}>Your stats:</Text>
			<Text style={{ color: "#457281" }}>Kills: 9</Text>
			<Text style={{ color: "#457281" }}>Deaths: 2</Text>
			<Text style={{ color: "#457281" }}>Revives: 5</Text>
		</View>
	);
}

export default RunningStatsPlayer;
