import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        color: "white",
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        textAlign: "left",
        padding: 10,
    },
    switchField: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
    },
    textProfileField: {
        flex: 0.8,
    },
});

function FieldChange({ fieldName, fieldValue, defaultToggleValue }) {
    const themeContext = useContext(ThemeContext);

    const [toggleValue, setToggleValue] = useState(defaultToggleValue);
    const [inputField, setInputField] = useState(fieldValue);
    return (
        <View style={{ paddingBottom: 5 }}>
            <Text
                style={[
                    themeContext.theme.primaryColor,
                    { fontSize: 9, paddingBottom: 5 },
                ]}
            >
                {fieldName}
            </Text>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.textProfileField}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(text) => setInputField(text)}
                        value={inputField}
                        keyboardAppearance={"dark"}
                        placeholder="user email"
                        placeholderTextColor="#8e8e8e"
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.switchField}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4F644D" }}
                        thumbColor={toggleValue ? "#189881" : "#189881"}
                        ios_backgroundColor="#C4C4C4"
                        onValueChange={setToggleValue}
                        value={toggleValue}
                        buttonRadius={10}
                        switchHeight={12}
                        padding={0}
                        switchWidth={32}
                    />
                </View>
            </View>
        </View>
    );
}

export default FieldChange;
