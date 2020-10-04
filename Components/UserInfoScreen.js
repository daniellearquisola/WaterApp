import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../Auth/context";

const UserInfoScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-simple-light-blue-water-splash-background-material-image_131331.jpg",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#6A7B89",
            padding: 20,
            borderRadius: 20,
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "white",
              fontWeight: "bold",
              fontFamily: "EuphemiaUCAS-Bold",
            }}
          >
            User Profile {"\n"}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "navy",
              fontWeight: "bold",
              fontFamily: "EuphemiaUCAS-Bold",
            }}
          >
            Name: Danielle Arquisola{"\n"}Email: daniellearquisola@gmail.com
            {"\n"}
            Age: 26{"\n"}Days Drinking Water: 2
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            signOut();
          }}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 40,
  },
});
