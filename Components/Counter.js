import { render } from "react-dom";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import { loadAsync } from "expo-font";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      image: "https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png",
      // text: "Your egg is about to hatch!!",
      // text: "../Images/egg-text.png",
      text: <Image source={require("../Images/egg-text.png")} />,
      date: new Date().getDate(),
      alert: false,
    };
  }

  loadImage = () => {
    if (this.state.counter === 0) {
      this.setState({
        image:
          "https://fontmeme.com/temporary/e409dfee791a58233686249f079b0499.png",
        text: <Image source={require("../Images/egg-text.png")} />,
      });
    }
    if (this.state.counter === 1) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
        text: <Image source={require("../Images/squirtle-text.png")} />,
      });
    }
    if (this.state.counter === 2) {
      this.setState({
        text: <Image source={require("../Images/happy-text.png")} />,
      });
    }
    if (this.state.counter === 4) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif",
        text: <Image source={require("../Images/evolve2.png")} />,
      });
    }
    if (this.state.counter === 5) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
        text: <Image source={require("../Images/wartortle-text.png")} />,
      });
    }
    if (this.state.counter === 6) {
      this.setState({
        text: <Image source={require("../Images/happy-text.png")} />,
      });
    }
    if (this.state.counter === 7) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wartortle.gif",
        text: <Image source={require("../Images/evolve2.png")} />,
      });
    }
    if (this.state.counter === 8) {
      this.setState({
        // image: "https://img.pokemondb.net/sprites/go/normal/blastoise.png",
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
        text: <Image source={require("../Images/blastoise-text.png")} />,
        alert: true,
      });
    }
    if (this.state.counter === 9) {
      this.setState({
        // image: "https://img.pokemondb.net/sprites/go/normal/blastoise.png",
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
        text: <Image source={require("../Images/happy-text.png")} />,
        alert: false,
      });
    }
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onSubtract = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  componentDidMount = () => {
    let today = new Date().getDate();
    if (today != this.state.date) {
      this.setState({
        counter: 0,
        image: "https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png",
        text: "../Images/egg-text.png",
      });
    }
  };

  simpleAlert = () => {
    //function to make simple alert
    Alert.alert(
      "GREAT JOB!",
      "You drank 8 glasses today! Your pokemon has now fully evolved!"
    );
  };

  combinedFunction = () => {
    this.onIncrement();
    if (this.state.counter === 7) {
      this.simpleAlert();
    }
  };

  render() {
    let counter = this.state.counter;
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    const win = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            fontWeight: "bold",
            // fontFamily: "Menlo-Regular",
            // fontFamily: "Georgia",
            fontFamily: "EuphemiaUCAS-Bold",
          }}
        >
          Today is {month}/{date}/{year}
          {"\n "}
        </Text>

        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#B1DCE6",
            padding: 5,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: "#C75943",
              fontSize: "14",
              textAlign: "center",
              fontFamily: "EuphemiaUCAS-Bold",
              // paddingHorizontal: 45,
            }}
          >
            {"\n"} Tap the water for each glass of water you drink {"\n"}
            Tap the leaf to remove a water glass {"\n"}
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {/* <Text style={{ color: "white" }}>Water Count: {counter}</Text> */}
            <Text
              style={{
                color: "#C75943",
                fontSize: "18",
                fontWeight: "bold",
                fontFamily: "EuphemiaUCAS-Bold",
              }}
            >
              {"\n"}Your Water Count: {counter} {"\n"}
            </Text>
            <TouchableOpacity
              onPress={this.combinedFunction}
              onPressOut={this.loadImage}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={{
                  uri:
                    "https://www.freepnglogos.com/uploads/water-drop-png/water-drop-png-index-content-uploads-12.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onSubtract}
              onPressOut={this.loadImage}
            >
              {/* <Icon name="remove" size={50} /> */}
              <Image
                style={{ width: 60, height: 60 }}
                source={{
                  uri:
                    "http://clipart-library.com/images_k/transparent-leaf-clip-art/transparent-leaf-clip-art-17.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Text style={{ color: "white", fontSize: "22" }}>
            {"\n"}Water Count: {counter} {"\n"}
          </Text> */}
        <Image
          style={{ width: 240, height: 235 }}
          source={{
            uri: this.state.image,
          }}
        />
        {/* <Text style={{ fontSize: "23" }}>{this.state.text}</Text> */}
        {/* <Image source={require(words)} /> */}
        {this.state.text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AAC1",
    color: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "100%",
    fontFamily: "monospace",
  },

  child: {
    height: "50%",
    width: "50%",
  },
  imageStyle: {},
});
