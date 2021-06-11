import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./pages/home/Home";
import JoinPinScreen from "./pages/join/JoinPinScreen";
import Create from "./pages/create/Create";
import ChooseTeam from "./pages/join/ChooseTeam";
import Player from "./pages/player/Player";
import Profile from "./pages/player/Profile";
import GamePreScreen from "./pages/create/GamePreScreen";
import Settings from "./pages/player/Settings";
import Statistics from "./pages/player/Statistics";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import InGame from "./pages/inGame/InGame";
import PreviousGame from "./pages/previousGame/PreviousGame";
import UserProvider from "./providers/UserProvider";
import Menu from "./components/menu/menu";
import ThemeProvider from "./providers/ThemeProvider";

const MyTheme = {
    dark: false,
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
    // TODO: ADD LOGIN LOGIC / Protected routes
    return (
        <ThemeProvider>
            <UserProvider>
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
            </UserProvider>
        </ThemeProvider>
    );
}
