import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	statusLine: {
		width: "100%",
		height: 20,
	},
});

function TimeLeft({ timePassed, gameTime }) {
	function caculateTimeForBar() {
		return 210 / (gameTime / timePassed);
	}

	return (
		<View style={{ flex: 2.3 }}>
			<View
				style={{
					width: 210,
					height: 16,
					backgroundColor: "#C4C4C4",
					marginRight: 20,
					borderRadius: 20,
					position: "relative",
				}}
			></View>
			<View
				style={{
					width: caculateTimeForBar(),
					height: 16,
					backgroundColor: "orange",
					marginRight: 20,
					borderRadius: 20,
					position: "absolute",
				}}
			></View>
			<Text
				style={{
					width: 210,
					height: 16,
					position: "absolute",
					top: 3,
					left: 5,
					fontSize: 8,
					textAlign: "left",
				}}
			>
				Time passed
			</Text>
		</View>
	);
}

export default TimeLeft;
