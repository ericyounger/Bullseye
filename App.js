import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./pages/home/Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import Login from "./components/LoginAndRegister/Login";
import Register from "./components/LoginAndRegister/Register";
import Settings from "./components/player/Settings";
import Statistics from "./components/player/Statistics";
import InGame from "./components/InGame";
import PreviousGame from "./components/PreviousGame";
import JoinPinScreen from "./pages/join/JoinPinScreen";
import Create from "./pages/create/Create";
import ChooseTeam from "./pages/join/ChooseTeam";
import Player from "./pages/player/Player";
import Profile from "./pages/player/Profile";
import GamePreScreen from "./pages/create/GamePreScreen";

const MyTheme = {
	dark: true,
	colors: {
		primary: "rgb(255, 45, 85)",
		background: "transparent",
		card: "rgb(255, 255, 255)",
		text: "#ffffff",
		border: "rgb(199, 199, 204)",
		notification: "rgb(255, 69, 58)",
	},
};

const Tab = createBottomTabNavigator();

export default function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	if (!loggedIn) {
		return (
			<ImageBackground
				source={require("./assets/blurBackground.jpg")}
				style={styles.image}
			>
				<NavigationContainer theme={MyTheme}>
					<Tab.Navigator>
						<Tab.Screen
							name="Login"
							component={Login}
							options={({ route }) => ({
								tabBarVisible: false,
							})}
						/>
						<Tab.Screen
							name="Register"
							component={Register}
							options={({ route }) => ({
								tabBarVisible: false,
							})}
						/>
					</Tab.Navigator>
					<StatusBar style="auto" />
				</NavigationContainer>
			</ImageBackground>
		);
	} else {
		return (
			<ImageBackground
				source={require("./assets/blurBackground.jpg")}
				style={styles.image}
			>
				<NavigationContainer theme={MyTheme}>
					<Tab.Navigator tabBar={(props) => <Menu {...props} />}>
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Join" component={JoinPinScreen} />
						<Tab.Screen name="Create" component={Create} />
						<Tab.Screen name="Player" component={Player} />
						<Tab.Screen name="Choose Team" component={ChooseTeam} />
						<Tab.Screen name="Profile" component={Profile} />
						<Tab.Screen name="Statistics" component={Statistics} />
						<Tab.Screen name="Settings" component={Settings} />
						<Tab.Screen name="InGame" component={InGame} />
						<Tab.Screen
							name="GamePreScreen"
							component={GamePreScreen}
						/>
						<Tab.Screen
							name="Previous Game"
							component={PreviousGame}
						/>
					</Tab.Navigator>
					<StatusBar style="auto" />
				</NavigationContainer>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		backgroundColor: "#313334",
		borderRadius: 10,
		flexDirection: "row",
		height: 63,
		marginHorizontal: 20,
		marginBottom: 20,
		color: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
});

function Menu({ state, descriptors, navigation }) {
	const notInMenuBar = [
		"Choose Team",
		"Profile",
		"Statistics",
		"Settings",
		"InGame",
		"GamePreScreen",
		"Previous Game",
	];

	return (
		<View style={styles.menu}>
			{state.routes
				.filter((r) => !notInMenuBar.includes(r.name))
				.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityStates={isFocused ? ["selected"] : []}
							accessibilityLabel={
								options.tabBarAccessibilityLabel
							}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={{ flex: 1, alignItems: "center" }}
						>
							{route.name === "Home" ? (
								<Ionicons
									name={"game-controller-outline"}
									size={22}
									color={"#fff"}
								/>
							) : null}
							{route.name === "Join" ? (
								<Ionicons
									name={"globe-outline"}
									size={22}
									color={"#fff"}
								/>
							) : null}
							{route.name === "Create" ? (
								<Ionicons
									name={"add-circle-outline"}
									size={22}
									color={"#fff"}
								/>
							) : null}
							{route.name === "Player" ? (
								<Ionicons
									name={"person-circle-outline"}
									size={22}
									color={"#fff"}
								/>
							) : null}
							<Text
								style={{ color: isFocused ? "orange" : "#fff" }}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
		</View>
	);
}
