import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const UserScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Text>This is user screen</Text>
      </View>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});