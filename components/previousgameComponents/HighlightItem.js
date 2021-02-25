import React from "react";
import { Text, View } from "react-native";

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

export default HighlightItem;
