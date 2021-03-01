import React, { useContext } from "react";

import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import StatusLine from "./StatusLine";

const styles = StyleSheet.create({
    PreviousGamecard: {
        width: "90%",
        alignSelf: "center",
        height: 99,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 10,
        justifyContent: "center",
        padding: 10,
        marginBottom: 10,
    },
    imageColumn: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },
    gameDate: {
        flex: 0.25,
        color: "#fff",
    },
    gameType: {
        color: "orange",
        flex: 0.7,
    },

    flexRowDirection: {
        flexDirection: "row",
    },
    flexColumnDirection: {
        flexDirection: "column",
    },
    flexRowDirectionStartEnd: {
        flexDirection: "row",
        width: "70%",
        alignSelf: "flex-start",
        justifyContent: "space-between",
        color: "#fff",
    },
    gameStatusDescription: {
        fontSize: 34,
    },
    zombieImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
});

function GameLogItem({
    gameType,
    gameDescription,
    gameDate,
    image,
    navigation,
}) {
    const themeContext = useContext(ThemeContext);

    function onGameLogItemClicked() {
        navigation.navigate("Previous Game");
    }

    return (
        <TouchableOpacity onPress={onGameLogItemClicked}>
            <View
                style={[themeContext.theme.PreviousGamecard]}
                onTouchEnd={onGameLogItemClicked}
            >
                <View style={styles.flexColumnDirection}>
                    <View style={styles.flexRowDirection}>
                        <View style={styles.imageColumn}>
                            <Image style={styles.zombieImage} source={image} />
                        </View>

                        <View style={styles.flexColumnDirection}>
                            <View style={styles.flexRowDirectionStartEnd}>
                                <Text style={styles.gameType}>{gameType}</Text>
                                <Text style={[themeContext.theme.spanFont]}>
                                    {gameDate}
                                </Text>
                            </View>
                            <Text
                                style={[
                                    themeContext.theme.spanFont,
                                    styles.gameStatusDescription,
                                ]}
                            >
                                {gameDescription}
                            </Text>
                        </View>
                    </View>

                    <StatusLine />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default GameLogItem;
