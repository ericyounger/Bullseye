import React, { useState, useEffect } from "react";
import { Text, View, Switch } from "react-native";

function ToggleSwitch({ displayText }) {
    const [toggleValue, setToggleValue] = useState(false);

    useEffect(() => {
        //  callback(toggleValue);
    }, [toggleValue]);

    return (
        <View
            style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}
        >
            <View>
                <Text style={{ color: "white", fontSize: 16 }}>
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
