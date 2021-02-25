import React from "react";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
	logo: {
		marginTop: 40,
		justifyContent: "center",
		alignSelf: "center",
		color: "white",
	},
});

export function Logo() {
	return (
		<Image
			style={styles.logo}
			source={require("../../assets/favicon.png")}
		/>
	);
}
export default Logo;
