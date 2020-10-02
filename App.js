import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainTabScreen from './Components/MainTabScreen'
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = 'Home' component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

