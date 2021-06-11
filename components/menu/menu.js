/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import ThemeContext from "../../contexts/ThemeContext";

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

export default Menu;
