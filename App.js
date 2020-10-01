import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Counter from "./Components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Drink a glass of water!</Text>
      {/* <Button
        onPress={() => {
          alert("We did it!");
        }}
        title="Add Water"
      /> */}
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
