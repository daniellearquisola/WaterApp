import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
} from "react-native";
import Counter from "./Counter";

const HomeScreen = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 5000,
      loop: true,
    }).start();
  }, [fade]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fade }}>
        <Image source={require("../Images/Logo.png")} />
      </Animated.View>

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
    backgroundColor: "#31AAC1",
  },
});
