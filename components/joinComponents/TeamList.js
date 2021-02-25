import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGame from "../createComponents/StartGame";
import ChooseTeamButtons from "./ChooseTeamButtons";
import StatusChooseTeam from "./StatusChooseTeam";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	chooseCard: {
		flex: 0.9,
		width: "90%",
		borderRadius: 20,
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		padding: 20,
	},
	teamSelection: {
		borderWidth: 1,
		borderColor: "white",
		flex: 0.5,
		height: "auto",
		borderRadius: 10,
		padding: 5,
		marginHorizontal: 3,
		marginBottom: 15,
	},
	buttons: {
		flex: 1,
		padding: 10,
		borderRadius: 10,
		margin: 5,
		alignItems: "center",
		justifyContent: "center",
	},
});

export function TeamList({ role }) {
	const [teamChosen, setTeamChosen] = useState(false);

	function chooseTeamCallback(event) {
		console.log(event + " team chosen");
		setTeamChosen(true);
	}

	return (
		<View style={{ flex: 1 }}>
			<Text style={{ color: "#49CD8D", paddingVertical: 7 }}>
				Choose team
			</Text>
			<View style={{ flexDirection: "row", flex: 1 }}>
				<View
					style={[
						styles.teamSelection,
						{ backgroundColor: "rgba(41, 96, 178, 0.2)" },
					]}
				>
					<Text style={{ color: "#fff" }}>#pigglyWiggly</Text>
					<Text style={{ color: "#fff" }}>#Slayer</Text>
				</View>

				<View
					style={[
						styles.teamSelection,
						{ backgroundColor: "rgba(178, 41, 41, 0.2)" },
					]}
				>
					<Text style={{ color: "#fff" }}>#Ole brumm</Text>
					<Text style={{ color: "#fff" }}>#Nasse nøff</Text>
				</View>
			</View>
			{!teamChosen ? (
				<ChooseTeamButtons callback={chooseTeamCallback} />
			) : role === "player" ? (
				<StatusChooseTeam gameStarted={false} countdown={0} />
			) : (
				<StartGame />
			)}
		</View>
	);
}

export default TeamList;
