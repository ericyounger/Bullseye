import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Limits from "../../components/createComponents/Limits";
import GameType from "../../components/createComponents/GameType";

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	createCard: {
		flex: 0.9,
		width: "90%",
		borderRadius: 20,
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		padding: 20,
	},
	button: {
		backgroundColor: "#457281",
		width: 150,
		height: 40,
		borderRadius: 10,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});

function Create({ navigation }) {
	function onCreateMatchClicked() {
		navigation.navigate("GamePreScreen");
	}

	return (
		<View style={styles.container}>
			<View style={styles.createCard}>
				<Text style={{ color: "orange", paddingBottom: 10 }}>
					Create Game
				</Text>
				<Tab.Navigator
					tabBarOptions={{
						labelStyle: { fontSize: 7 },
						tabStyle: { width: 100 },
						indicatorStyle: { backgroundColor: "#457281" },
						style: { backgroundColor: "transparent" },
					}}
				>
					<Tab.Screen name="Game type" component={GameType} />
					<Tab.Screen name="Limits" component={Limits} />
				</Tab.Navigator>

				<View style={{ alignItems: "center" }}>
					<TouchableOpacity
						style={styles.button}
						onPress={onCreateMatchClicked}
					>
						<Text style={{ color: "white" }}>Create Match</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Create;
