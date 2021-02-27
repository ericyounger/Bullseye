import React from "react";
import { View, FlatList } from "react-native";
import TableEntry from "./TableEntry";
import TableHeader from "./TableHeader";

function Table() {
    const dataMock = [
        { player: "Slayer", kills: 8, deaths: 3, revives: 2 },
        { player: "Neo", kills: 100, deaths: 0, revives: 10 },
        { player: "Playah", kills: 1, deaths: 10, revives: 0 },
        { player: "Rambo", kills: 50, deaths: 3, revives: 10 },
        { player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
        { player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
        { player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
        { player: "Jesus", kills: 0, deaths: 1, revives: 10 },
        { player: "Playah", kills: 1, deaths: 10, revives: 0 },
        { player: "Rambo", kills: 50, deaths: 3, revives: 10 },
        { player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
        { player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
        { player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
        { player: "Jesus", kills: 0, deaths: 1, revives: 10 },
        { player: "Playah", kills: 1, deaths: 10, revives: 0 },
        { player: "Rambo", kills: 50, deaths: 3, revives: 10 },
        { player: "Dr Phil", kills: 22, deaths: 22, revives: 3 },
        { player: "Nazi nøff", kills: 2, deaths: 10, revives: 0 },
        { player: "Onkel skrue", kills: 6, deaths: 4, revives: 5 },
        { player: "Jesus", kills: 0, deaths: 1, revives: 10 },
    ];
    return (
        <View style={{ paddingBottom: 30, flex: 0.5 }}>
            <TableHeader />
            <View
                style={{
                    borderColor: "#4F5556",
                    borderWidth: 1,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}
            >
                <FlatList
                    data={dataMock}
                    renderItem={({ item }) => (
                        <TableEntry
                            player={item.player}
                            kills={item.kills}
                            deaths={item.deaths}
                            revives={item.revives}
                        />
                    )}
                />
            </View>
        </View>
    );
}

export default Table;
