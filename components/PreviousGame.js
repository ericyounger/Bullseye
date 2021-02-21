import React from "react";
import { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
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
});

function PreviousGame({ navigation, date, gameType }) {
	return (
		<View style={styles.container}>
			<View style={styles.inGameCard}>
				<View style={{ flexDirection: "row" }}>
					<Text style={{ color: "orange", paddingBottom: 10 }}>
						Team Deathmatch
					</Text>
					<Text style={{ marginLeft: "auto", color: "white" }}>
						24.02.21
					</Text>
				</View>
				<Highlights />
				<Table />
			</View>
		</View>
	);
}

function Highlights() {
	return (
		<View style={{ flex: 0.5, paddingVertical: 0 }}>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<HighlightItem player="Slayer" highlightText="MVP" />
				<HighlightItem
					player="PigglyWiggly"
					highlightText="Serial killer"
				/>
			</View>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<HighlightItem player="Jesus" highlightText="Healer" />
				<HighlightItem player="Rambo" highlightText="Killing machine" />
			</View>
		</View>
	);
}

function HighlightItem({ player, highlightText }) {
	return (
		<View
			style={{
				flex: 0.5,
				justifyContent: "center",
				alignItems: "center",
				margin: 5,
				backgroundColor: "rgba(52, 52, 52, 0.8)",
				borderRadius: 10,
			}}
		>
			<Text style={{ color: "#457281" }}>#{player}</Text>
			<Text style={{ color: "white" }}>{highlightText}</Text>
		</View>
	);
}

function Table() {
	const dataMock = [
		{ player: "Slayer", kills: 8, deaths: 3, revives: 2 },
		{ player: "Neo", kills: 100, deaths: 0, revives: 10 },
		{ player: "Playah", kills: 1, deaths: 10, revives: 0 },
		{ player: "Rambo", kills: 50, deaths: 3, revives: 10 },
		{ player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
		{ player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
		{ player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
		{ player: "Jesus", kills: 0, deaths: 1, revives: 10 },
		{ player: "Playah", kills: 1, deaths: 10, revives: 0 },
		{ player: "Rambo", kills: 50, deaths: 3, revives: 10 },
		{ player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
		{ player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
		{ player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
		{ player: "Jesus", kills: 0, deaths: 1, revives: 10 },
		{ player: "Playah", kills: 1, deaths: 10, revives: 0 },
		{ player: "Rambo", kills: 50, deaths: 3, revives: 10 },
		{ player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
		{ player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
		{ player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
		{ player: "Jesus", kills: 0, deaths: 1, revives: 10 },
	];
	return (
		<View style={{ paddingVertical: 30, flex: 0.5 }}>
			<TableHeader />
			<View
				style={{
					borderColor: "#4F5556",
					borderWidth: 1,
					borderBottomLeftRadius: 5,
					borderBottomRightRadius: 5,
				}}
			>
				<FlatList
					data={dataMock}
					renderItem={({ item }) => (
						<TableEntry
							player={item.player}
							kills={item.kills}
							deaths={item.deaths}
							revives={item.revives}
						/>
					)}
				/>
			</View>
		</View>
	);
}

function TableHeader() {
	return (
		<View
			style={{
				backgroundColor: "#4F5556",
				height: 28,
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 10,
				alignItems: "center",
				borderTopLeftRadius: 5,
				borderTopRightRadius: 5,
			}}
		>
			<Text style={{ color: "white", fontSize: 10 }}>Player</Text>
			<Text style={{ color: "white", fontSize: 10 }}>Kills</Text>
			<Text style={{ color: "white", fontSize: 10 }}>Deaths</Text>
			<Text style={{ color: "white", fontSize: 10 }}>Revives</Text>
		</View>
	);
}

function TableEntry({ player, kills, deaths, revives }) {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center",
				marginTop: -2,
				padding: 10,
			}}
		>
			<Text style={{ color: "white", flex: 0.4, fontSize: 10 }}>
				#{player}
			</Text>
			<Text style={{ color: "white", flex: 0.3, fontSize: 10 }}>
				{kills}
			</Text>
			<Text style={{ color: "white", flex: 0.3, fontSize: 10 }}>
				{deaths}
			</Text>
			<Text style={{ color: "white", flex: 0.15, fontSize: 10 }}>
				{revives}
			</Text>
		</View>
	);
}

export default PreviousGame;
