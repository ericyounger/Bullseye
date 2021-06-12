import React, { useContext, useState } from "react";
import { Text, View } from "react-native";

import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ThemeContext from "../../contexts/ThemeContext";
import ItemCounter from "./ItemCounter";
import ToggleSwitch from "./ToggleSwitch";

function GameType() {
    const themeContext = useContext(ThemeContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [gameTypes] = useState([
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Team Deathmatch",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Zombie",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Capture The Flag",
        },
    ]);
    const [selected, setSelected] = useState(gameTypes[0].title);

    function onSelectChange(value) {
        setSelected(value);
        setShowDropdown(false);
    }

    // TODO: SPLIT DROPDOWN INTO IT'S OWN COMPONENT, MESSY CODE.

    return (
        <FlatList
            ListHeaderComponent={
                <View>
                    <View style={{ paddingTop: 20 }}>
                        <Text
                            style={[
                                themeContext.theme.primaryColor,
                                { fontSize: 10 },
                            ]}
                        >
                            Type
                        </Text>
                        <TouchableOpacity
                            onPress={() => setShowDropdown(!showDropdown)}
                        >
                            <View
                                style={{
                                    marginTop: 5,
                                    backgroundColor: "#333333",
                                    padding: 10,
                                    position: "relative",
                                }}
                            >
                                <Text
                                    style={[
                                        themeContext.theme.spanFont,
                                        { fontSize: 16 },
                                    ]}
                                >
                                    {selected}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {showDropdown && (
                            <View
                                style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    elevation: 1,

                                    flexDirection: "row",
                                    marginTop: 75,
                                }}
                            >
                                <FlatList
                                    data={gameTypes}
                                    keyExtractor={(item, index) =>
                                        `${item.key} a ${index}`
                                    }
                                    backgroundColor="#333333"
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() =>
                                                onSelectChange(item.title)
                                            }
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: "#333333",
                                                    padding: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color:
                                                            themeContext.theme
                                                                .spanFont.color,
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        )}
                    </View>
                    <View style={{ paddingTop: 20, zIndex: -1, elevation: -1 }}>
                        <Text
                            style={[
                                themeContext.theme.primaryColor,
                                { fontSize: 10 },
                            ]}
                        >
                            Game settings
                        </Text>
                        <ToggleSwitch displayText="Enable juggernauts" />
                        <ToggleSwitch displayText="Random teams" />
                        <ToggleSwitch displayText="Friendly fire" />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text
                            style={[
                                themeContext.theme.primaryColor,
                                { fontSize: 10 },
                            ]}
                        >
                            Team settings
                        </Text>
                        <ItemCounter
                            text="Number of teams"
                            defaultValue={2}
                            min={2}
                            max={6}
                        />
                        <ItemCounter
                            text="Number of juggernauts"
                            defaultValue={0}
                            min={0}
                            max={4}
                        />
                    </View>
                </View>
            }
        />
    );
}

export default GameType;
