import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { call } from "react-native-reanimated";

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

function ChooseTeam() {
	const [teamChosen, setTeamChosen] = useState(false);

	function chooseTeamCallback(event) {
		console.log(event + " team chosen");
		setTeamChosen(true);
	}

	return (
		<View style={styles.container}>
			<View style={styles.chooseCard}>
				<Text style={{ color: "orange", fontSize: 20 }}>
					Team Deathmatch
				</Text>
				<Text style={{ color: "#fff", paddingVertical: 7 }}>
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
				) : (
					<StatusChooseTeam gameStarted={false} countdown={0} />
				)}
			</View>
		</View>
	);
}

export function ChooseTeamButtons({ callback }) {
	function onTeamSelection(team) {
		callback(team);
	}

	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={[
						styles.buttons,
						{ backgroundColor: "rgba(41, 96, 178, 1.0)" },
					]}
					onPress={() => onTeamSelection("Blue")}
				>
					<Text>Blue team</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.buttons, { backgroundColor: "grey" }]}
					onPress={() => onTeamSelection("Auto")}
				>
					<Text>Auto</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.buttons,
						{ backgroundColor: "rgba(178, 41, 41, 1.0)" },
					]}
					onPress={() => onTeamSelection("Red")}
				>
					<Text>Red team</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export function StatusChooseTeam({ gameStarted, countdown }) {
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

export default ChooseTeam;
