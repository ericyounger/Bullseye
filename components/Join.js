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
        borderColor: 'white', 
        borderWidth: 1,
        width: "80%",
        color: "white",
        textAlign: "center"
      },
      gamePinText: {
          color: "white",
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
            <Text style={styles.gamePinText}>Enter game pin:</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={text => setPinInput(text)}
                value={pinInput}
                keyboardAppearance={"dark"}
                returnKeyType="send"
                onSubmitEditing={onSubmit}
            />
        </View>
    )
}

export default Join;