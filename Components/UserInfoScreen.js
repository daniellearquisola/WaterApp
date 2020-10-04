import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import {AuthContext} from '../Auth/context'


const UserInfoScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Name: Danielle Arquisola</Text>
      <Text>Email: </Text>
      <Text>Age: </Text>
      <Text>Days Drinking Water: 2</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signOut();
        }}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    backgroundColor: "#72A0C1",
    marginVertical: 5,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});
