import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

const UserScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-simple-light-blue-water-splash-background-material-image_131331.jpg",
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            color: "navy",
            fontWeight: "bold",
            fontFamily: "EuphemiaUCAS-Bold",
          }}
        >
          Login to Access User Profile
        </Text>
        <Image
          style={{ width: 140, height: 155 }}
          source={{
            uri:
              "https://img.pokemondb.net/sprites/go/normal/squirtle-sunglasses.png",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 40,
  },
});
