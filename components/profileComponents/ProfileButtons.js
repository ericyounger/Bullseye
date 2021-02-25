import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function ProfileButtons() {
	function onSave() {
		alert("Saved");
	}

	return (
		<View style={{ flexDirection: "row", justifyContent: "center" }}>
			<TouchableOpacity
				style={{
					flex: 0.48,
					backgroundColor: "#2960B2",
					justifyContent: "center",
					alignItems: "center",
					padding: 10,
					borderRadius: 10,
				}}
				onPress={onSave}
			>
				<Text style={{ color: "white" }}>Save</Text>
			</TouchableOpacity>
		</View>
	);
}

export default ProfileButtons;
