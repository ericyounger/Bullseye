import React from "react";
import { Text, View } from "react-native";

function RunningStatsTeam() {
	return (
		<View
			style={{
				flex: 0.5,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={{ color: "white" }}>Team stats:</Text>
			<Text style={{ color: "#457281" }}>Kills: 100</Text>
			<Text style={{ color: "#457281" }}>Deaths: 2</Text>
			<Text style={{ color: "#457281" }}>Revives: 5</Text>
		</View>
	);
}

export default RunningStatsTeam;
