import React, { useState, useEffect, useContext } from "react";
import { Text, View, Switch } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

function ToggleSwitch({
    displayText,
    callback = () => {},
    defaultValue = false,
}) {
    const [toggleValue, setToggleValue] = useState(defaultValue);
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        callback(toggleValue);
    }, [toggleValue]);

    return (
        <View
            style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}
        >
            <View>
                <Text style={[themeContext.theme.spanFont, { fontSize: 16 }]}>
                    {displayText}
                </Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
                <Switch
                    trackColor={{ false: "#767577", true: "#4F644D" }}
                    thumbColor={toggleValue ? "#189881" : "#189881"}
                    ios_backgroundColor="#C4C4C4"
                    onValueChange={setToggleValue}
                    value={toggleValue}
                />
            </View>
        </View>
    );
}

export default ToggleSwitch;
