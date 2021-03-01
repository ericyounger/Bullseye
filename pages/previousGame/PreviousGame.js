import React from "react";
import { Text } from "react-native";
import Card from "../../components/card/Card";
import Highlights from "../../components/previousgameComponents/Highlights";
import Table from "../../components/previousgameComponents/Table";

function PreviousGame() {
    return (
        <Card title="Team deathmatch" date="24.02.21">
            <Text
                style={{
                    color: "#49CD8D",
                    fontSize: 10,
                    textAlign: "left",
                    paddingVertical: 10,
                }}
            >
                Highlighted players
            </Text>
            <Highlights />
            <Text
                style={{
                    color: "#49CD8D",
                    fontSize: 10,
                    textAlign: "left",
                    paddingVertical: 10,
                }}
            >
                Scoreboard
            </Text>
            <Table />
        </Card>
    );
}

export default PreviousGame;
