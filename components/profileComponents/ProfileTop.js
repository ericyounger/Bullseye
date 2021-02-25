import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
	profilePictureBtn: {
		backgroundColor: "#565F7E",
		borderRadius: 10,
		width: 145,
		height: 27,
		justifyContent: "center",
		alignItems: "center",
	},
	profilePic: {
		width: 115,
		height: 115,
		borderRadius: 100,
	},
});

function ProfileTop() {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<View>
				<Image
					style={styles.profilePic}
					source={require("../../assets/profile_pic.jpg")}
				/>
			</View>

			<View style={{ flexDirection: "column", paddingVertical: 10 }}>
				<Text style={{ color: "white" }}>Eric Younger / eYounger</Text>
				<Text style={{ color: "white" }}>Nickname: Slayer</Text>

				<TouchableOpacity
					style={[styles.profilePictureBtn, { marginTop: "auto" }]}
				>
					<Text style={{ color: "white", fontSize: 9 }}>
						Change profile picture
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ProfileTop;
