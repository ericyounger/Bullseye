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
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";

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
	button: {
		backgroundColor: "#457281",
		width: "100%",
		height: 40,
		borderRadius: 10,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function InGame() {
	return (
		<View style={styles.container}>
			<View style={styles.inGameCard}>
				<Tab.Navigator
					tabBarOptions={{
						labelStyle: { fontSize: 7 },
						tabStyle: { width: 100 },
						indicatorStyle: { backgroundColor: "#457281" },
						style: { backgroundColor: "transparent" },
					}}
				>
					<Tab.Screen
						name="Controllers"
						component={InGameControllers}
					/>
					<Tab.Screen name="Alert" component={Alert} />
				</Tab.Navigator>
			</View>
		</View>
	);
}

function InGameControllers({ navigation }) {
	return (
		<View style={{ flex: 1, paddingVertical: 20 }}>
			<RunningStats />
			<View style={{ flex: 0.75 }}>
				<GameController
					incrementText="kills++"
					decrementText="kills--"
				/>
				<GameController
					incrementText="deaths++"
					decrementText="deaths--"
				/>
				<GameController
					incrementText="revives++"
					decrementText="revives--"
				/>
			</View>
		</View>
	);
}

function Alert() {
	return (
		<View style={{ flex: 1, paddingVertical: 20 }}>
			<View>
				<Text style={{ color: "#457281" }}>Alert team</Text>
				<AlertItem alertText="It's a trap" />
			</View>
			<View>
				<Text style={{ color: "#457281" }}>Alert Everyone</Text>
				<AlertItem alertText="Pause game" />
				<AlertItem alertText="Wounded player" />
				<AlertItem alertText="Game has ended" />
			</View>
		</View>
	);
}

function AlertItem({ alertText, buttonColor, recipients }) {
	function onButtonClick() {
		alert(alertText);
	}

	return (
		<View style={{ marginBottom: 10 }}>
			<TouchableOpacity style={styles.button} onPress={onButtonClick}>
				<Text>{alertText}</Text>
			</TouchableOpacity>
		</View>
	);
}

function RunningStats() {
	return (
		<View
			style={{
				flex: 0.25,
				margin: 5,
				backgroundColor: "rgba(52, 52, 52, 0.8)",
				borderRadius: 10,
				padding: 10,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<RunningStatsPlayer />
				<RunningStatsTeam />
			</View>
		</View>
	);
}

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

export default InGame;
