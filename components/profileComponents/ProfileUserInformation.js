import React, { useEffect } from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import UserContext from "../../contexts/UserContext";
// import UserService from "../../service/UserService";
import FieldChange from "./FieldChange";
import GeneralProfileField from "./GeneralProfileField";
import ProfileButtons from "./ProfileButtons";

function ProfileUserInformation() {
    const { user } = useContext(UserContext);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <Text style={{ color: "#BD7C2F" }}>Profile information</Text>
                <Text style={{ marginLeft: "auto", color: "#BD7C2F" }}>
                    Public
                </Text>
            </View>
            <FieldChange
                fieldName="Email"
                fieldValue={user.email}
                defaultToggleValue={true}
            />
            <FieldChange
                fieldName="Nickname"
                fieldValue={user.nickName === null ? "" : null}
                defaultToggleValue={user.showNickname === 1}
            />

            <GeneralProfileField
                textDescription="Show my player statistics on web"
                defaultToggleValue={user.showStatistics === 1}
            />
            <GeneralProfileField
                textDescription="Show my achievements"
                defaultToggleValue={user.showAchievements === 1}
            />
            <View style={{ marginTop: "auto" }}>
                <ProfileButtons />
            </View>
        </View>
    );
}

export default ProfileUserInformation;
