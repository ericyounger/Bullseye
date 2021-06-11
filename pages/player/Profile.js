import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileTop from "../../components/profileComponents/ProfileTop";
import ProfileAchievements from "../../components/profileComponents/ProfileAchievements";
import ProfileUserInformation from "../../components/profileComponents/ProfileUserInformation";
import Card from "../../components/card/Card";
import ThemeContext from "../../contexts/ThemeContext";

const Tab = createMaterialTopTabNavigator();

function Profile() {
    const themeContext = useContext(ThemeContext);

    return (
        <Card>
            <ProfileTop />
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: [themeContext.theme.spanFont, { fontSize: 7 }],
                    tabStyle: { width: 100 },
                    indicatorStyle: { backgroundColor: "#457281" },
                    style: { backgroundColor: "transparent" },
                }}
            >
                <Tab.Screen
                    name="Achievements"
                    component={ProfileAchievements}
                />
                <Tab.Screen
                    name="Profile info"
                    component={ProfileUserInformation}
                />
            </Tab.Navigator>
        </Card>
    );
}

export default Profile;
