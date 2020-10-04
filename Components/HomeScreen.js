import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import Counter from "./Counter";

const HomeScreen = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 8000,
      loop: true,
    }).start();
  }, [fade]);

  return (
    // <View style={styles.container}>
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-simple-light-blue-water-splash-background-material-image_131331.jpg",
      }}
    >
      <View style={styles.container}>
        <Animated.View style={{ opacity: fade }}>
          <Image source={require("../Images/Logo.png")} />
        </Animated.View>

        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "EuphemiaUCAS-Bold",
          }}
        >
          It is recommended to drink 8 glasses a day{"\n"}to stay hydrated.
          Hydration gives the body{"\n"}
          fluid to operate properly!{"\n"}
          {"\n"} WATER-MON helps you track your water intake{"\n"}
          You help your pokemon gain energy {"\n\n"}
          For each glass of water you drink, {"\n"}
          you can level up your pokemon!
        </Text>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",

    // backgroundColor: "#31AAC1",
    // backgroundImage: "https://wallpapercave.com/wp/cw9Npu6.jpg",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
