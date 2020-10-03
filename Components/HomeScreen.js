import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Login from './Login'
import SignUp from './SignUp'

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Text>This is our Water Tracking App.</Text>
        <Text>Please Make Sure to Drink at Least 8 Cups a Day!!!</Text>
        <Login />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});