import React from "react";

import { Text, View, StyleSheet } from "react-native";
import TeamStatus from "./TeamStatus";

const styles = StyleSheet.create({
	statusLine: {
		width: "100%",
		height: 20,
	},
});

function StatusLine() {
	return (
		<View style={styles.statusLine}>
			<TeamStatus />
		</View>
	);
}

export default StatusLine;
