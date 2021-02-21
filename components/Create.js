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
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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
	flexRowDirection: {
		flexDirection: "row",
	},
	flexColumnDirection: {
		flexDirection: "column",
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
	IncDec: {
		width: 45,
		height: 25,
		backgroundColor: "#457281",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
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

function Limits() {
	return (
		<View style={{ flex: 1, justifyContent: "space-evenly" }}>
			{/*Game settings and rules*/}
			<SliderComponent
				type="Time"
				sliderColour="#5A7995"
				min={5}
				max={60}
				units={"mins"}
				defaultValue={30}
			/>
			<SliderComponent
				type="Score limit"
				sliderColour="#958F5A"
				min={5}
				max={75}
				units={"pts"}
				defaultValue={50}
			/>
			<SliderComponent
				type="Other limit"
				sliderColour="#A63F5E"
				min={0}
				max={100}
				units={"daleks"}
				defaultValue={100}
			/>
		</View>
	);
}

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

function ItemCounter({ text, callback, min, max, defaultValue }) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setCounter(defaultValue);
	}, [defaultValue]);

	function updateCounter(action) {
		if (action === "dec") {
			if (counter > min) setCounter(counter - 1);
		} else if (action === "inc") {
			if (counter < max) setCounter(counter + 1);
		}
	}
	return (
		<View
			style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}
		>
			<Text style={{ color: "white" }}>{text}</Text>
			<View style={{ flexDirection: "row", marginLeft: "auto" }}>
				<TouchableOpacity
					style={[styles.IncDec]}
					onPress={() => updateCounter("dec")}
				>
					<Text style={{ color: "white", fontSize: 20 }}>-</Text>
				</TouchableOpacity>
				<Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
					{counter}
				</Text>
				<TouchableOpacity
					style={[styles.IncDec, { marginLeft: 10 }]}
					onPress={() => updateCounter("inc")}
				>
					<Text style={{ color: "white", fontSize: 20 }}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

function ToggleSwitch({ displayText, callback }) {
	const [toggleValue, setToggleValue] = useState(false);

	useEffect(() => {
		//callback(toggleValue);
	}, [toggleValue]);

	return (
		<View
			style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}
		>
			<View>
				<Text style={{ color: "white", fontSize: 16 }}>
					{displayText}
				</Text>
			</View>
			<View style={{ marginLeft: "auto" }}>
				<Switch
					trackColor={{ false: "#767577", true: "#4F644D" }}
					thumbColor={toggleValue ? "#189881" : "#189881"}
					ios_backgroundColor="#C4C4C4"
					onValueChange={setToggleValue}
					value={toggleValue}
				/>
			</View>
		</View>
	);
}

function SliderComponent({
	type,
	sliderColour,
	min,
	max,
	units,
	defaultValue,
}) {
	const [sliderValue, setSliderValue] = useState(defaultValue);

	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<View style={{ flex: 0.5 }}>
					<Text style={{ color: "white" }}>{type}:</Text>
				</View>
				<View style={{ flex: 0.5 }}>
					<Text style={{ color: "white", marginLeft: "auto" }}>
						{sliderValue.toFixed(0)} {units}
					</Text>
				</View>
			</View>

			<Slider
				style={{ width: "100%", height: 50 }}
				value={sliderValue}
				minimumValue={min}
				maximumValue={max}
				minimumTrackTintColor={sliderColour}
				maximumTrackTintColor="#6F6E6E"
				onValueChange={(value) => setSliderValue(value)}
			/>
		</View>
	);
}

export default Create;
