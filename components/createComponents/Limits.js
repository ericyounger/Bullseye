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
import SliderComponent from "./SliderComponent";

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

export default Limits;
