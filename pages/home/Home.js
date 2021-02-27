/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import "react-native-gesture-handler";
import ActiveGame from "../../components/homeComponents/ActiveGame";
import GameLogItem from "../../components/homeComponents/GameLogItem";
import Logo from "../../components/imageComponents/Logo";

const styles = StyleSheet.create({
    fontWhite: {
        color: "#fff",
    },
    fontWhiteStatusHeader: {
        color: "#fff",
        marginLeft: "6%",
    },
});

function HomeScreen({ navigation }) {
    const dataMock = [
        {
            key: 1,
            gameType: "Zombie",
            gameDescription: "Zombie win #7",
            gameDate: "27.01.21",
            image: require("../../assets/zombie.png"),
        },
        {
            key: 2,
            gameType: "Team deathmatch",
            gameDescription: "Blue team wins",
            gameDate: "27.01.21",
            image: require("../../assets/zombie.png"),
        },
        {
            key: 3,
            gameType: "Capture the flag",
            gameDescription: "Blue team wins!",
            gameDate: "22.01.21",
            image: require("../../assets/ctf.png"),
        },
        {
            key: 4,
            gameType: "Bomb",
            gameDescription: "Red team wins",
            gameDate: "20.08.21",
            image: require("../../assets/bomb.png"),
        },
    ];

    return (
        <View>
            <Logo />
            <Text style={styles.fontWhiteStatusHeader}>In progress</Text>
            <ActiveGame navigation={navigation} />
            <Text style={styles.fontWhiteStatusHeader}>Previous games</Text>
            <FlatList
                data={dataMock}
                keyExtractor={(item, index) => `${item.key} a ${index}`}
                renderItem={({ item }) => (
                    <GameLogItem
                        key={item.key}
                        gameType={item.gameType}
                        gameDescription={item.gameDescription}
                        gameDate={item.gameDate}
                        image={item.image}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    );
}

export default HomeScreen;
