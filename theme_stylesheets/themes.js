/* eslint-disable global-require */
import { StyleSheet } from "react-native";

export const darkTheme = StyleSheet.create({
    Card: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    button: {
        backgroundColor: "#457281",
        width: 150,
        height: 40,
        borderRadius: 10,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    spanFont: {
        color: "white",
    },
    titleFont: {
        color: "orange",
    },
    primaryColor: {
        color: "#49CD8D",
    },
    secondaryColor: {
        color: "#457281",
    },
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
    menu: {
        backgroundColor: "#313334",
        borderRadius: 10,
        flexDirection: "row",
        height: 63,
        marginHorizontal: 20,
        marginBottom: 20,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    ActiveGameCard: {
        width: "90%",
        alignSelf: "center",
        height: 132,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    playerPageButtons: {
        backgroundColor: "#3C4244",
        width: "80%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    teamBlue: {
        backgroundColor: "rgba(41, 96, 178, 0.2)",
    },
    teamRed: {
        backgroundColor: "rgba(178, 41, 41, 0.2)",
    },
    gamePinScreen: {
        backgroundColor: "rgba(117, 117, 117, 0.2)",
    },
});

export const lightTheme = StyleSheet.create({
    Card: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 1.0)",
        padding: 20,
    },
    button: {
        backgroundColor: "#457281",
        width: 150,
        height: 40,
        borderRadius: 10,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    spanFont: {
        color: "black",
    },
    titleFont: {
        color: "orange",
    },
    primaryColor: {
        color: "#014d28",
    },
    secondaryColor: {
        color: "#459dba",
    },
    PreviousGamecard: {
        width: "90%",
        alignSelf: "center",
        height: 99,
        backgroundColor: "rgba(255, 255, 255, 1.0)",
        borderRadius: 10,
        justifyContent: "center",
        padding: 10,
        marginBottom: 10,
    },
    menu: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        height: 63,
        marginHorizontal: 20,
        marginBottom: 20,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    ActiveGameCard: {
        width: "90%",
        alignSelf: "center",
        height: 132,
        backgroundColor: "rgba(255, 255, 255, 1.0)",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    playerPageButtons: {
        backgroundColor: "#fff",
        width: "80%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    teamBlue: {
        backgroundColor: "rgba(41, 96, 178, 1)",
    },
    teamRed: {
        backgroundColor: "rgba(178, 41, 41, 1)",
    },
    gamePinScreen: {
        backgroundColor: "rgba(117, 117, 117, 1)",
    },
});

export const backgrounds = {
    lightBackground: require("../assets/lightTheme.jpg"),
    darkBackground: require("../assets/blurBackground.jpg"),
};
