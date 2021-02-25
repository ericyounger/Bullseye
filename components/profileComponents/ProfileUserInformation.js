import React from "react";
import { Text, View } from "react-native";
import FieldChange from "./FieldChange";
import GeneralProfileField from "./GeneralProfileField";
import ProfileButtons from "./ProfileButtons";

function ProfileUserInformation() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", paddingVertical: 10 }}>
				<Text style={{ color: "#BD7C2F" }}>Profile information</Text>
				<Text style={{ marginLeft: "auto", color: "#BD7C2F" }}>
					Public
				</Text>
			</View>
			<FieldChange
				fieldName="Email"
				fieldValue="fotografyounger@gmail.com"
				defaultToggleValue={true}
			/>
			<FieldChange
				fieldName="Nickname"
				fieldValue="Slayer"
				defaultToggleValue={false}
			/>

			<GeneralProfileField
				textDescription="Show my player statistics on web"
				defaultToggleValue={true}
			/>
			<GeneralProfileField
				textDescription="Show my achievements"
				defaultToggleValue={true}
			/>
			<View style={{ marginTop: "auto" }}>
				<ProfileButtons />
			</View>
		</View>
	);
}

export default ProfileUserInformation;
