import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import StartGame from "../createComponents/StartGame";
import ChooseTeamButtons from "./ChooseTeamButtons";
import StatusChooseTeam from "./StatusChooseTeam";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    chooseCard: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    teamSelection: {
        borderWidth: 1,
        borderColor: "white",
        flex: 0.5,
        height: "auto",
        borderRadius: 10,
        padding: 5,
        marginHorizontal: 3,
        marginBottom: 15,
    },
    buttons: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

function TeamList({ role }) {
    const [teamChosen, setTeamChosen] = useState(false);
    const themeContext = useContext(ThemeContext);

    function chooseTeamCallback(event) {
        console.log(`${event} team chosen`);
        setTeamChosen(true);
    }

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={[
                    themeContext.theme.primaryColor,
                    { paddingVertical: 7 },
                ]}
            >
                Choose team
            </Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <View
                    style={[
                        styles.teamSelection,
                        {
                            backgroundColor:
                                themeContext.theme.teamBlue.backgroundColor,
                        },
                    ]}
                >
                    <Text style={[themeContext.theme.spanFont]}>
                        #pigglyWiggly
                    </Text>
                    <Text style={[themeContext.theme.spanFont]}>#Slayer</Text>
                </View>

                <View
                    style={[
                        styles.teamSelection,
                        {
                            backgroundColor:
                                themeContext.theme.teamRed.backgroundColor,
                        },
                    ]}
                >
                    <Text style={[themeContext.theme.spanFont]}>
                        #Ole brumm
                    </Text>
                    <Text style={[themeContext.theme.spanFont]}>
                        #Nasse nøff
                    </Text>
                </View>
            </View>
            {!teamChosen ? (
                <ChooseTeamButtons callback={chooseTeamCallback} />
            ) : role === "player" ? (
                <StatusChooseTeam gameStarted={false} countdown={0} />
            ) : (
                <StartGame />
            )}
        </View>
    );
}

export default TeamList;
