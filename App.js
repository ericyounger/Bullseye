/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
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
import Ionicons from "react-native-vector-icons/Ionicons";
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
import UserContext from "./components/contexts/UserContext";
import ThemeContext from "./components/contexts/ThemeContext";
import { backgrounds, darkTheme, lightTheme } from "./theme_stylesheets/themes";

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

const Tab = createBottomTabNavigator();

export default function App() {
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [theme, setTheme] = useState(darkTheme);
    const [background, setBackground] = useState(null);

    useEffect(() => {
        if (darkMode) {
            setTheme(darkTheme);
            setBackground(backgrounds.darkBackground);
        } else {
            setTheme(lightTheme);
            setBackground(backgrounds.lightBackground);
        }
    }, [darkMode]);

    const userContextValues = {
        loggedIn,
        user: {},
        setLoggedIn,
    };

    const themeContextValues = {
        theme,
        setDarkMode,
    };

    if (!loggedIn) {
        return (
            <ThemeContext.Provider value={themeContextValues}>
                <UserContext.Provider value={userContextValues}>
                    <ImageBackground source={background} style={styles.image}>
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
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={themeContextValues}>
            <UserContext.Provider value={userContextValues}>
                <ImageBackground source={background} style={styles.image}>
                    <NavigationContainer theme={MyTheme}>
                        <Tab.Navigator tabBar={(props) => <Menu {...props} />}>
                            <Tab.Screen name="Home" component={HomeScreen} />
                            <Tab.Screen name="Join" component={JoinPinScreen} />
                            <Tab.Screen name="Create" component={Create} />
                            <Tab.Screen name="Player" component={Player} />
                            <Tab.Screen
                                name="Choose Team"
                                component={ChooseTeam}
                            />
                            <Tab.Screen name="Profile" component={Profile} />
                            <Tab.Screen
                                name="Statistics"
                                component={Statistics}
                            />
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
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

function Menu({ state, descriptors, navigation }) {
    const themeContext = useContext(ThemeContext);
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
        <View style={[themeContext.theme.menu]}>
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
                                    color={themeContext.theme.spanFont.color}
                                />
                            ) : null}
                            {route.name === "Join" ? (
                                <Ionicons
                                    name={"globe-outline"}
                                    size={22}
                                    color={themeContext.theme.spanFont.color}
                                />
                            ) : null}
                            {route.name === "Create" ? (
                                <Ionicons
                                    name={"add-circle-outline"}
                                    size={22}
                                    color={themeContext.theme.spanFont.color}
                                />
                            ) : null}
                            {route.name === "Player" ? (
                                <Ionicons
                                    name={"person-circle-outline"}
                                    size={22}
                                    color={themeContext.theme.spanFont.color}
                                />
                            ) : null}
                            <Text
                                style={[
                                    themeContext.theme.spanFont,
                                    {
                                        color: isFocused
                                            ? "orange"
                                            : themeContext.theme.spanFont.color,
                                    },
                                ]}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
        </View>
    );
}
