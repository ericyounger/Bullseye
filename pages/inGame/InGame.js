import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InGameControllers from "../../components/ingameComponents/InGameControllers";
import Alert from "../../components/ingameComponents/Alert";
import Card from "../../components/card/Card";
import ThemeContext from "../../components/contexts/ThemeContext";

const Tab = createMaterialTopTabNavigator();

function InGame() {
    const themeContext = useContext(ThemeContext);
    return (
        <Card title="Team deathmatch">
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: [themeContext.theme.spanFont, { fontSize: 7 }],
                    tabStyle: { width: 100 },
                    indicatorStyle: { backgroundColor: "#457281" },
                    style: { backgroundColor: "transparent" },
                }}
            >
                <Tab.Screen name="Controllers" component={InGameControllers} />
                <Tab.Screen name="Alert" component={Alert} />
            </Tab.Navigator>
        </Card>
    );
}

export default InGame;
