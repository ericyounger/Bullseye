import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ActiveGameCard: {
        width: "90%",
        alignSelf: "center",
        height: 132,
        backgroundColor: "#343434",
        borderRadius: 10,
        padding:10,
        marginBottom: 10
    },
    PreviousGamecard: {
      width: "90%",
      alignSelf: "center",
      height: 99,
      backgroundColor: "#343434",
      borderRadius: 10,
      justifyContent: "center",
      padding:10,
      marginBottom: 10
  },
    fontWhite: {
        color: "#fff",
    },
    fontWhiteStatusHeader: {
        color: "#fff",
        marginLeft: "6%"
    },
    fontOrange: {
      color: "orange",
  },
    logo: {
        marginTop: 40,
        textAlign: 'center',
        justifyContent: "center",
        alignSelf: "center",
        color: "white"
  
    },
    menu : {
        backgroundColor: "#313334",
        borderRadius: 10,
        height: 83,
        width: 300, 
    },

    imageColumn : {
        
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    },
    gameDate: {
        flex: 0.25,
        color: "#fff",
  
    },
    gameType: {
        color: "orange",
        flex: 0.7,
        
    },

    flexRowDirection: {
        flexDirection: "row"
    },
    flexColumnDirection: {
        flexDirection: "column"
    },
    flexRowDirectionStartEnd: {
        flexDirection: "row",
        width: "70%",
        alignSelf: "flex-start",
        justifyContent: "space-between",
        color: "#fff"

    },
    gameStatusDescription: {
        color: "white",
        fontSize: 34,
    },
    statusLine: {
        width: "100%",
        height:20,


  
    },

    zombieImage: {
        width: 30,
        height: 30,
        marginRight:10,
      },
  });

export function Logo(){
    return (
        <Image
        style={styles.logo}
        source={require('../assets/favicon.png')}
        />
    )
}

function HomeScreen(props){
    return (
        <ScrollView>
            <Logo />
            <Text style={styles.fontWhiteStatusHeader}>In progress</Text>
            <ActiveGame />
  
            <Text style={styles.fontWhiteStatusHeader}>Previous games</Text>
            <GameLogItem gameType="Zombie" gameDescription="Zombie win #7" gameDate="27.01.21" />
            <GameLogItem gameType="Team deathmatch" gameDescription="Blue team wins" gameDate="27.01.21" />
            


        </ScrollView>
    )
}

function ActiveGame(){
    return (
    <View style={styles.ActiveGameCard} onTouchStart={() => alert("Hola")}>
        <Text style={styles.fontOrange}>Team deathmatch</Text>
        <View style={{paddingTop: 0}}>
            <Text style={{color: "white", fontSize: 60}}>15-11</Text>
        </View>
        <View style={{flexDirection: "row"}}>
            <TimeLeft timePassed={15} gameTime={30}/>
            <TeamStatus/>
        </View>
    </View>
    )
}

function GameLogItem({gameType, gameDescription, gameDate}){
    const [imageAsset, setImageAsset] = useState("");
    useEffect(() => {
        if(gameType == "Zombie") setImageAsset("../assets/zombie.png");
        if(gameType == "CTF") setImageAsset("../assets/ctf.png");
    }, [gameType]);

    return (
    <View style={styles.PreviousGamecard}>
        <View style={styles.flexColumnDirection}>
            <View style={styles.flexRowDirection}>
                <View style={styles.imageColumn}>
                    <Image
                        style={styles.zombieImage}
                        source={require('../assets/zombie.png')}
                    />
                </View>

                <View style={styles.flexColumnDirection}>
                    <View style={styles.flexRowDirectionStartEnd}>
                        <Text style={styles.gameType}>{gameType}</Text>
                        <Text style={styles.gameDate}>{gameDate}</Text>
                    </View>
                    <Text style={styles.gameStatusDescription}>{gameDescription}</Text>
                </View>
            </View>

            <StatusLine />

        </View>
        
    </View>
    )
}

function StatusLine(){
    return (
        <View style={styles.statusLine}>
            <TeamStatus/>
        </View>
    )
}

function TimeLeft({timePassed, gameTime}){

    function caculateTimeForBar(){
        return 210/(gameTime/timePassed);
    }

    return (
        <View style={{flex: 2.3}}>
            <View style={{width: 210, height: 16, backgroundColor: "#C4C4C4", marginRight: 20, borderRadius: 20, position: "relative" }}></View>
            <View style={{width: caculateTimeForBar(), height: 16, backgroundColor: "orange", marginRight: 20, borderRadius: 20, position: "absolute" }}></View>
            <Text style={{width: 210, height: 16, position: "absolute", top: 3, left:5, fontSize: 8, textAlign: "left"}}>Time passed</Text>
        </View>
    )
}

function TeamStatus(){
    return (
        <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
            <View style={{width: 23, height: 16, backgroundColor: "#2960B2", borderRadius: 15, marginRight: 7}}></View>
            <Text style={{color: "white", marginRight: 10}}>15</Text>
            <View style={{width: 23, height: 16, backgroundColor: "#B22929", borderRadius: 15, marginRight: 7}}></View>
            <Text style={{color: "white"}}>11</Text>
        </View>
    )
}

export default HomeScreen;