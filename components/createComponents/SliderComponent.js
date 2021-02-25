import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

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

export default SliderComponent;
