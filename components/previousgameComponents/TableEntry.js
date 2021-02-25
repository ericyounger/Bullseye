import React from "react";
import { Text, View } from "react-native";

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

export default TableEntry;
