import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,  TextInput } from 'react-native';
import {Logo} from './Home';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputField: {
        height: 40, 
    
        width: "80%",
        color: "white",
        borderRadius: 10,
        backgroundColor: "#3C4244",
        textAlign: "center"
      },
      gamePinText: {
          color: "orange",
          fontSize: 30,
          padding: 10
      }
  });

function Join(){
    const [pinInput, setPinInput] = useState("");

    function onSubmit(){
        alert("clicked");
    }
    return (
        <View style={styles.container}>
            <Logo/>
            <Text style={styles.gamePinText}>Join Match</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={text => setPinInput(text)}
                value={pinInput}
                keyboardAppearance={"dark"}
                returnKeyType="send"
                onSubmitEditing={onSubmit}
                placeholder="enter game pin"
                placeholderTextColor="#8e8e8e"
                autoCorrect={false}
            />
        </View>
    )
}

export default Join;