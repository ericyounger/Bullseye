/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";

import "react-native-gesture-handler";
import ActiveGame from "../../components/homeComponents/ActiveGame";
import GameLogItem from "../../components/homeComponents/GameLogItem";
import Logo from "../../components/imageComponents/Logo";
import dataMock from "../../mockData/mockData";

const styles = StyleSheet.create({
    fontWhite: {
        color: "#fff",
    },
    fontWhiteStatusHeader: {
        color: "#fff",
        marginLeft: "6%",
        marginBottom: 3,
    },
});

function HomeScreen({ navigation }) {
    return (
        <FlatList
            ListHeaderComponent={
                <View style={{ flex: 1 }}>
                    <Logo />
                    <Text style={styles.fontWhiteStatusHeader}>
                        In progress
                    </Text>
                    <ActiveGame navigation={navigation} />
                    <Text style={styles.fontWhiteStatusHeader}>
                        Previous games
                    </Text>

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
            }
        />
    );
}

export default HomeScreen;
