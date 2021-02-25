import React from "react";
import { Text, View } from "react-native";
import AlertItem from "./AlertItem";

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

export default Alert;
