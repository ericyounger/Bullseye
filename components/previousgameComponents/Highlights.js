import React from "react";
import { View } from "react-native";
import HighlightItem from "./HighlightItem";

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

export default Highlights;
