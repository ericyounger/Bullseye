import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

const styles = StyleSheet.create({
    switchField: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
    },
    textProfileField: {
        flex: 0.8,
    },
});

function GeneralProfileField({ textDescription, defaultToggleValue }) {
    const [toggleValue, setToggleValue] = useState(defaultToggleValue);
    const themeContext = useContext(ThemeContext);

    return (
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={styles.textProfileField}>
                <Text
                    style={[themeContext.theme.spanFont, { textAlign: "left" }]}
                >
                    {textDescription}
                </Text>
            </View>

            <View style={styles.switchField}>
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

export default GeneralProfileField;
