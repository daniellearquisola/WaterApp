import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const UserScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Text>Please Login to Access User Information</Text>
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