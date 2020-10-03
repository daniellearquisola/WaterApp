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
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      image: "https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png",
      text: "Your egg is about to hatch!!",
      date: new Date().getDate(),
    };
  }

  loadImage = () => {
    if (this.state.counter === 0) {
      this.setState({
        image: "https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png",
      });
    }
    if (this.state.counter === 1) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
        text: "You have a Squirtle!",
      });
    }
    if (this.state.counter === 2) {
      this.setState({
        text: null,
      });
    }
    if (this.state.counter === 4) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif",
        text: "Your pokemon looks like it's about to evolve!",
      });
    }
    if (this.state.counter === 5) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
        text: "You have a Wartortle!",
      });
    }
    if (this.state.counter === 6) {
      this.setState({
        text: null,
      });
    }
    if (this.state.counter === 7) {
      this.setState({
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wartortle.gif",
        text: "Your pokemon looks like it's about to evolve!",
      });
    }
    if (this.state.counter === 8) {
      this.setState({
        // image: "https://img.pokemondb.net/sprites/go/normal/blastoise.png",
        image:
          "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
        text: "You have a Blastoise!",
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
        text: "Your egg is about to hatch!!",
      });
    }
  };

  render() {
    let counter = this.state.counter;
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    const win = Dimensions.get("window");
    const ratio = win.width / 541;
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text style={{ fontSize: 10 }}>
            Today is: {month}/{date}/{year}
            {"\n "}
          </Text>
          <Text style={{ color: "white", fontSize: "13", textAlign: "center" }}>
            Tap on the water for every glass of water you drink {"\n"}
            Tap on the leaf to remove a water glass
          </Text>

          <View style={{ flexDirection: "row" }}>
            {/* <Text style={{ color: "white" }}>Water Count: {counter}</Text> */}
            <TouchableOpacity
              onPress={this.onIncrement}
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
          <Text style={{ color: "white", fontSize: "23" }}>
            {"\n"}Water Count: {counter} {"\n"}
          </Text>
          <Image
            style={{ width: win.width, height: 362 * ratio }}
            source={{
              uri: this.state.image,
            }}
          />
          <Text style={{ fontSize: "23" }}>{this.state.text}</Text>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#58A0D3",
    color: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },

  child: {
    height: "50%",
    width: "50%",
  },
  imageStyle: {},
});
