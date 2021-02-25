import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TeamStatus from "./TeamStatus";
import TimeLeft from "./TimeLeft";

const styles = StyleSheet.create({
	ActiveGameCard: {
		width: "90%",
		alignSelf: "center",
		height: 132,
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
	},
	fontOrange: {
		color: "orange",
	},
});

function ActiveGame({ navigation }) {
	function onActiveGameClick() {
		navigation.navigate("InGame");
	}
	return (
		<TouchableOpacity onPress={onActiveGameClick}>
			<View style={styles.ActiveGameCard}>
				<Text style={styles.fontOrange}>Team deathmatch</Text>
				<View style={{ paddingTop: 0 }}>
					<Text style={{ color: "white", fontSize: 60 }}>15-11</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<TimeLeft timePassed={15} gameTime={30} />
					<TeamStatus />
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default ActiveGame;
