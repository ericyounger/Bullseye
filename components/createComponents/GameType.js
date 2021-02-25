import React from "react";
import {
	Button,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Switch,
	TouchableOpacity,
} from "react-native";
import ItemCounter from "./ItemCounter";
import ToggleSwitch from "./ToggleSwitch";

function GameType() {
	return (
		<View>
			<View style={{ paddingTop: 20 }}>
				<Text style={{ color: "#49CD8D", fontSize: 10 }}>Type</Text>
				<Text>Dropdown Gametype</Text>
			</View>
			<View style={{ paddingTop: 20 }}>
				<Text style={{ color: "#49CD8D", fontSize: 10 }}>
					Game settings
				</Text>
				<ToggleSwitch displayText="Enable juggernauts" />
				<ToggleSwitch displayText="Random teams" />
				<ToggleSwitch displayText="Friendly fire" />
			</View>
			<View style={{ paddingTop: 20 }}>
				<Text style={{ color: "#49CD8D", fontSize: 10 }}>
					Team settings
				</Text>
				<ItemCounter
					text="Number of teams"
					defaultValue={2}
					min={2}
					max={6}
				/>
				<ItemCounter
					text="Number of juggernauts"
					defaultValue={0}
					min={0}
					max={4}
				/>
			</View>
		</View>
	);
}

export default GameType;
