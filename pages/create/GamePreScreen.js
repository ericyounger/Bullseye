import React from "react";
import { Text, View } from "react-native";
import Card from "../../components/card/Card";
import TeamList from "../../components/joinComponents/TeamList";

function GamePreScreen() {
    return (
        <Card title="Team deathmatch" date="24.02.21">
            <View
                style={{
                    flex: 0.2,
                    borderRadius: 10,
                    backgroundColor: "rgba(117, 117, 117, 0.2)",
                }}
            >
                <View style={{ height: 20 }}>
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

            <View style={{ flex: 0.8 }}>
                <TeamList role="creator" />
            </View>
        </Card>
    );
}

export default GamePreScreen;
