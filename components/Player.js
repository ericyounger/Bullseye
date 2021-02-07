import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

function Player(){
    return (
        <View style={styles.container}>
            <Text>Player screen</Text>
        </View>
    )
}

export default Player;