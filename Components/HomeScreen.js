import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import Counter from "./Counter";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        WATER-MON {"\n"}
        {"\n"}
      </Text>

      <Text>It's time to hydrate!</Text>
      <Text>It is recommended to drink 8 glasses a day</Text>
      <Text>to stay hydrated. Hydration gives the body </Text>
      <Text>
        fluid to operate properly!{"\n"}
        {"\n"}
      </Text>

      <Text>
        WATER-MON helps you track your water intake!{"\n"}
        {"\n"}
      </Text>

      <Text>Help your pokemon gain energy!</Text>
      <Text>By drinking one glass, you can</Text>
      <Text>level up your pokemon!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
