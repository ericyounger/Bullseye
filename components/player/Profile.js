import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileCard: {
        flex: 0.9,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        padding: 20,
    },
    profilePictureBtn: {
        backgroundColor: "#565F7E",
        borderRadius: 10,
        width: 145,
        height: 27,
        justifyContent: "center",
        alignItems: "center"
    },
    profilePic: {
        width: 115,
        height: 115,
        borderRadius: 100

    },
    inputField: {
        height: 40,
        color: "white",
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        textAlign: "left",
        padding: 10,
    },
    switchField: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto"
    },
    textProfileField: {
        flex: 0.8
    }
});

function Profile({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <ProfileTop />
                <Tab.Navigator   tabBarOptions={{
    labelStyle: { fontSize: 7 },
    tabStyle: { width: 100 },
    indicatorStyle: {backgroundColor: "#457281"},
    style: { backgroundColor: 'transparent' },
  }}>
                    <Tab.Screen name="Achievements" component={ProfileAchievements} />
                    <Tab.Screen name="Profile info" component={ProfileUserInformation} />
                </Tab.Navigator>
            </View>
        </View>
    )
}

function ProfileTop() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <Image
                    style={styles.profilePic}
                    source={require('../../assets/profile_pic.jpg')} />
            </View>

            <View style={{ flexDirection: "column", paddingVertical: 10 }}>
                <Text style={{ color: "white" }}>Eric Younger / eYounger</Text>
                <Text style={{ color: "white" }}>Nickname: Slayer</Text>

                <TouchableOpacity style={[styles.profilePictureBtn, { marginTop: "auto" }]}>
                    <Text style={{ color: "white", fontSize: 9 }}>Change profile picture</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


function ProfileAchievements() {
    return (
        <View style={{paddingVertical: 10}}>
            <Rank />
        </View>
    )
}

function Rank(){
    return (
        <View>
            <Text style={{ color: "#BD7C2F" }}>Rank</Text>
            <View style={{flexDirection: "row", paddingVertical: 10}}>
                <View style={{flex:0.2, flexDirection: "row"}}>
                    <Ionicons name={"star"} size={22} color={"#fff"} />
                    <Ionicons name={"star"} size={22} color={"#fff"} />
                </View>
                <View style={{flex: 0.8}}>
                    <Text style={{color: "#8298E4", fontSize: 19}}>Two star general</Text>
                </View>
            </View>
            <XPEarnerDisplay xpEarned={3451} xpMaxThisLevel={12000}/>
            <Achievements />
            
        </View>
    )
}

function Achievements(){
    return (
        <View style={{paddingTop: 10}}>
            <Text style={{ color: "#BD7C2F" }}>Achievements</Text>
            <View style={{paddingTop: 5}}>
                <Text style={{color:"white"}}>* Team killer</Text>
                <Text style={{color:"white"}}>* Rambo</Text>
                <Text style={{color:"white"}}>* Fragger</Text>
            </View>
        </View>
    )
}

function XPEarnerDisplay({xpEarned, xpMaxThisLevel}){
    const [procentXP, setProcentXP] = useState(37);

    useEffect(() => {
        setProcentXP((100*(xpEarned/xpMaxThisLevel)).toFixed(0));
    }, [xpEarned]);


    return (
        <View>
            <View style={{width: "100%", height: 16, backgroundColor: "#C4C4C4", position: 'relative', borderRadius: 10}}/>
            <View style={{width: procentXP + "%", height: 16, backgroundColor: "#BB8B5F", position: 'absolute', borderRadius: 10}}/>
            <Text style={{color:"white", fontSize: 10, textAlign: "right", paddingTop: 5}}>{xpEarned} / {xpMaxThisLevel} xp</Text>
        </View>
    )
}

function ProfileUserInformation() {
    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <Text style={{ color: "#BD7C2F" }}>Profile information</Text>
                <Text style={{ marginLeft: "auto", color: "#BD7C2F" }}>Public</Text>
            </View>
            <FieldChange
                fieldName="Email"
                fieldValue="fotografyounger@gmail.com"
                defaultToggleValue={true} />
            <FieldChange
                fieldName="Nickname"
                fieldValue="Slayer"
                defaultToggleValue={false} />

            <GeneralProfileField
                textDescription="Show my player statistics on web"
                defaultToggleValue={true}
            />
            <GeneralProfileField
                textDescription="Show my achievements"
                defaultToggleValue={true}
            />
            <View style={{ marginTop: "auto" }}>
                <ProfileButtons />
            </View>

        </View>
    )
}

function FieldChange({ fieldName, fieldValue, defaultToggleValue }) {
    const [toggleValue, setToggleValue] = useState(defaultToggleValue);
    const [inputField, setInputField] = useState(fieldValue);
    return (
        <View style={{ paddingBottom: 5 }}>
            <Text style={{ color: "#189881", fontSize: 9, paddingBottom: 5 }}>{fieldName}</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.textProfileField}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setInputField(text)}
                        value={inputField}
                        keyboardAppearance={"dark"}
                        placeholder="user email"
                        placeholderTextColor="#8e8e8e"
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.switchField}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4F644D" }}
                        thumbColor={toggleValue ? "#189881" : "#189881"}
                        ios_backgroundColor="#C4C4C4"
                        onValueChange={setToggleValue}
                        value={toggleValue}
                        buttonRadius={10}
                        switchHeight={12}
                        padding={0}
                        switchWidth={32}
                    />
                </View>
            </View>
        </View>

    )
}

function GeneralProfileField({ textDescription, defaultToggleValue }) {
    const [toggleValue, setToggleValue] = useState(defaultToggleValue);

    return (
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={styles.textProfileField}>
                <Text style={{ color: "white", textAlign: "left" }}>{textDescription}</Text>
            </View>

            <View style={styles.switchField}>
                <Switch
                    trackColor={{ false: "#767577", true: "#4F644D" }}
                    thumbColor={toggleValue ? "#189881" : "#189881"}
                    ios_backgroundColor="#C4C4C4"
                    onValueChange={setToggleValue}
                    value={toggleValue}
                />
            </View>

        </View>
    )
}

function ProfileButtons() {

    function onSave() {
        alert("Saved");
    }

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
                style={{ flex: 0.48, backgroundColor: "#2960B2", justifyContent: "center", alignItems: "center", padding: 10, borderRadius: 10 }}
                onPress={onSave}
            >
                <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;