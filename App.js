import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './components/Home';
import Join from './components/Join';
import Create from './components/Create';
import Player from './components/Player';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const MyTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'transparent',
      card: 'rgb(255, 255, 255)',
      text: '#ffffff',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  
  

export default function App() {
  return (

    <ImageBackground source={require('./assets/blurBackground.jpg')} style={styles.image}>
    <NavigationContainer theme={MyTheme}>

        <Tab.Navigator tabBar={props => <Menu {...props} />} >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Join" component={Join} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Player" component={Player} />
        </Tab.Navigator>
        <StatusBar style="auto" />

    </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  menu : {
      backgroundColor: "#313334",
      borderRadius: 10,
      flexDirection: 'row',
      height: 63,
      marginHorizontal: 20,
      marginBottom: 20,
      color: "#fff",
      justifyContent:"center",
      alignItems:"center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});



function Menu({ state, descriptors, navigation }){
    return (
        <View style={styles.menu}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems:"center" }}
            >
            {route.name === "Home"? <Ionicons name={"game-controller-outline"} size={22} color={"#fff"} />: null }
            {route.name === "Join"? <Ionicons name={"globe-outline"} size={22} color={"#fff"} />: null }
            {route.name === "Create"? <Ionicons name={"add-circle-outline"} size={22} color={"#fff"} />: null }
            {route.name === "Player"? <Ionicons name={"person-circle-outline"} size={22} color={"#fff"} />: null }
              <Text style={{ color: isFocused ? 'orange' : '#fff' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )
}