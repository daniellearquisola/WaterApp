import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Counter from './Counter'

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Text>This is our Water Tracking App.</Text>
        <Text>Please Make Sure to Drink at Least 8 Cups a Day!!!</Text>
        <Counter />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});