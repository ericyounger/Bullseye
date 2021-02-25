import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TeamList from "../../components/joinComponents/TeamList";

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
				<Text style={{ color: "orange", paddingBottom: 10 }}>
					Team deathmatch
				</Text>
				<View
					style={{
						flex: 0.2,
						borderRadius: 10,
						backgroundColor: "rgba(117, 117, 117, 0.2)",
					}}
				>
					<View style={{ height: 20 }}>
						<Text
							style={{
								color: "#49CD8D",
								fontSize: 10,
								textAlign: "left",
								padding: 5,
							}}
						>
							Game pin
						</Text>
					</View>

					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 65,
								paddingBottom: 15,
								textAlign: "center",
							}}
						>
							LXKAVJ
						</Text>
					</View>
				</View>

				<View style={{ flex: 0.8 }}>
					<TeamList role="creator" />
				</View>
			</View>
		</View>
	);
}

export default GamePreScreen;
