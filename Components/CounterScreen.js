import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import Counter from "./Counter";

const CounterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CounterScreen;
