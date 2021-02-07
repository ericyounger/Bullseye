import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createCard: {
        marginTop: 20,
        padding: 20,
        width: "90%",
        height: "80%",
        borderRadius: 20,
        backgroundColor: "#343434",
    },
    flexRowDirection: {
        flexDirection: "row"
    },
    flexColumnDirection: {
        flexDirection: "column"
    },
    button: {
        backgroundColor: "#457281",
        width: 150,
        height: 40,
        borderRadius: 10,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    }


  });

function Create(){
    return (
        <View style={styles.container}>
            <View style={styles.createCard}>
                <Text style={{color:"orange", paddingBottom: 10}}>Create Game</Text>
                {/*Game settings and rules*/}
                <View style={{flexDirection: "row", flex:1}}>
                    <View style={{flex:0.5}}>
                        <Text style={{color: "white"}}>Game Settings:</Text>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{color: "white", marginBottom: 10,}}>Rules:</Text>
                        <ToggleSwitch displayText={"Random teams"}/>
                        <ToggleSwitch displayText={"Team leader sets wins"}/>
                        <ToggleSwitch displayText={"Juggernauts"}/>
                    </View>
                </View>
                <SliderComponent type="Time" sliderColour="#5A7995" min={5} max={60} units={"mins"}/>
                <SliderComponent type="Score limit" sliderColour="#958F5A" min={5} max={75} units={"pts"}/>
                <SliderComponent type="Other limit" sliderColour="#A63F5E" min={0} max={100} units={"daleks"}/>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={{color: "white"}}>Create Match</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function ToggleSwitch({displayText, callback}){ 
    const [toggleValue, setToggleValue] = useState(false);

    useEffect(() => {
        //callback(toggleValue);
    }, [toggleValue]);

    return(
        <View style={{flexDirection: "row", flex:1,}}>
            <View style={{flex: 0.7, paddingTop: 5}}>
                <Text style={{color: "white", fontSize: 10}}>{displayText}</Text>
            </View>
            <View style={{flex: 0.3, marginLeft: "auto"}}>
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


function SliderComponent({type, sliderColour, min, max, units}){
    const [sliderValue, setSliderValue] = useState(0.0);

    return (
        <View style={{flex:0.5}}>
            <View style={{flexDirection: "row"}}>
                <View style={{flex:0.5}}>
                    <Text style={{color: "white"}}>{type}:</Text>
                </View>
                <View style={{flex:0.5}}>
                    <Text style={{color: "white", marginLeft: "auto"}}>{sliderValue.toFixed(0)} {units}</Text>
                </View>
            </View>

            <Slider
                style={{width: "100%", height: 50}}
                minimumValue={min}
                maximumValue={max}
                minimumTrackTintColor={sliderColour}
                maximumTrackTintColor="#6F6E6E"
                onValueChange={value => setSliderValue(value)}
            />
        </View>
    )
}

export default Create;