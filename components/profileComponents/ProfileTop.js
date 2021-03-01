/* eslint-disable global-require */
import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

const styles = StyleSheet.create({
    profilePictureBtn: {
        backgroundColor: "#565F7E",
        borderRadius: 10,
        width: 145,
        height: 27,
        justifyContent: "center",
        alignItems: "center",
    },
    profilePic: {
        width: 115,
        height: 115,
        borderRadius: 100,
    },
});

function ProfileTop() {
    const themeContext = useContext(ThemeContext);

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <Image
                    style={styles.profilePic}
                    source={require("../../assets/profile_pic.jpg")}
                />
            </View>

            <View style={{ flexDirection: "column", paddingVertical: 10 }}>
                <Text style={[themeContext.theme.spanFont]}>
                    Eric Younger / eYounger
                </Text>
                <Text style={[themeContext.theme.spanFont]}>
                    Nickname: Slayer
                </Text>

                <TouchableOpacity
                    style={[styles.profilePictureBtn, { marginTop: "auto" }]}
                >
                    <Text style={{ color: "white", fontSize: 9 }}>
                        Change profile picture
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProfileTop;
