import React, { useContext } from "react";
import { Text, View } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";

function Achievements() {
    const themeContext = useContext(ThemeContext);

    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={[themeContext.theme.primaryColor]}>Achievements</Text>
            <View style={{ paddingTop: 5 }}>
                <Text style={[themeContext.theme.spanFont]}>* Team killer</Text>
                <Text style={[themeContext.theme.spanFont]}>* Rambo</Text>
                <Text style={[themeContext.theme.spanFont]}>* Fragger</Text>
            </View>
        </View>
    );
}

export default Achievements;
