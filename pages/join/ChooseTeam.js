import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TeamList from "../../components/joinComponents/TeamList";

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
	return (
		<View style={styles.container}>
			<View style={styles.chooseCard}>
				<Text style={{ color: "orange", paddingBottom: 10 }}>
					Team Deathmatch
				</Text>
				<TeamList role="player" />
			</View>
		</View>
	);
}

export default ChooseTeam;
