import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import Card from "../../components/card/Card";
import ThemeContext from "../../components/contexts/ThemeContext";
import TeamList from "../../components/joinComponents/TeamList";

function GamePreScreen() {
    const themeContext = useContext(ThemeContext);

    return (
        <Card title="Team deathmatch" date="24.02.21">
            <View
                style={{
                    height: 100,
                    borderRadius: 10,
                    backgroundColor:
                        themeContext.theme.gamePinScreen.backgroundColor,
                }}
            >
                <View style={{ height: 15 }}>
                    <Text
                        style={{
                            color: "#49CD8D",
                            fontSize: 10,
                            textAlign: "left",
                            padding: 5,
                        }}
                    >
                        Game pin
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 65,
                            paddingBottom: 15,
                            textAlign: "center",
                        }}
                    >
                        LXKAVJ
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <TeamList role="creator" />
            </View>
        </Card>
    );
}

export default GamePreScreen;
