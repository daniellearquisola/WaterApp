import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainTabScreen from './Components/MainTabScreen'
import Counter from './Components/Counter'
import User from './Components/UserScreen'
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = 'Home' component={MainTabScreen}/>
        <Drawer.Screen name = 'Counter' component = {Counter} />
        <Drawer.Screen name = 'User' component={User} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

