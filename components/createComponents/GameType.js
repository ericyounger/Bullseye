import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import ItemCounter from "./ItemCounter";
import ToggleSwitch from "./ToggleSwitch";

function GameType() {
    const themeContext = useContext(ThemeContext);

    return (
        <View>
            <View style={{ paddingTop: 20 }}>
                <Text
                    style={[themeContext.theme.primaryColor, { fontSize: 10 }]}
                >
                    Type
                </Text>
                <Text>Dropdown Gametype</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text
                    style={[themeContext.theme.primaryColor, { fontSize: 10 }]}
                >
                    Game settings
                </Text>
                <ToggleSwitch displayText="Enable juggernauts" />
                <ToggleSwitch displayText="Random teams" />
                <ToggleSwitch displayText="Friendly fire" />
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text
                    style={[themeContext.theme.primaryColor, { fontSize: 10 }]}
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
    );
}

export default GameType;
