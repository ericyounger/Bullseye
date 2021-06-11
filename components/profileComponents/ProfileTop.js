/* eslint-disable global-require */
import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";

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
    const { user } = useContext(UserContext);

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
                    {`${user.firstName} ${user.lastName}`} / {user.userName}
                </Text>
                <Text style={[themeContext.theme.spanFont]}>
                    {`${
                        user.nickName === null
                            ? ""
                            : `Nickname: ${user.nickName}`
                    }`}
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
