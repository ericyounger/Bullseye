import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ProfileTop from "../../components/profileComponents/ProfileTop";
import ProfileAchievements from "../../components/profileComponents/ProfileAchievements";
import ProfileUserInformation from "../../components/profileComponents/ProfileUserInformation";

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	profileCard: {
		flex: 0.9,
		width: "90%",
		borderRadius: 20,
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		padding: 20,
	},
});

function Profile({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.profileCard}>
				<ProfileTop />
				<Tab.Navigator
					tabBarOptions={{
						labelStyle: { fontSize: 7 },
						tabStyle: { width: 100 },
						indicatorStyle: { backgroundColor: "#457281" },
						style: { backgroundColor: "transparent" },
					}}
				>
					<Tab.Screen
						name="Achievements"
						component={ProfileAchievements}
					/>
					<Tab.Screen
						name="Profile info"
						component={ProfileUserInformation}
					/>
				</Tab.Navigator>
			</View>
		</View>
	);
}

export default Profile;
