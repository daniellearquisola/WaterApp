import { render } from "react-dom";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
        image: "https://img.pokemondb.net/sprites/go/normal/squirtle.png",
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
          "https://img.pokemondb.net/sprites/go/normal/squirtle-sunglasses.png",
        text: "Your pokemon looks like it's about to evolve!",
      });
    }
    if (this.state.counter === 5) {
      this.setState({
        image: "https://img.pokemondb.net/sprites/go/normal/wartortle.png",
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
          "https://img.pokemondb.net/sprites/go/normal/wartortle-sunglasses.png",
        text: "Your pokemon looks like it's about to evolve!",
      });
    }
    if (this.state.counter === 8) {
      this.setState({
        image: "https://img.pokemondb.net/sprites/go/normal/blastoise.png",
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
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text>
            Today is: {month}/{date}/{year}{" "}
          </Text>
          <Text style={{ color: "white" }}>
            Tap on a water drop for every glass of water you drink!
          </Text>
          <View>
            <Text style={{ color: "white" }}>Water Count: {counter}</Text>
            <TouchableOpacity
              onPress={this.onIncrement}
              onPressOut={this.loadImage}
            >
              <Image
                style={{ width: 200, height: 200 }}
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
              <Icon name="remove" size={50} />
            </TouchableOpacity>
          </View>
          <Text>{this.state.text}</Text>
          <Image
            style={{ width: 100, height: 120 }}
            source={{
              uri: this.state.image,
            }}
          />
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
    justifyContent: "center",
  },

  child: {
    height: "50%",
    width: "50%",
  },
});

//egg: https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png
//blastoise suns: https://img.pokemondb.net/sprites/go/normal/blastoise-sunglasses.png
//blastoise: https://img.pokemondb.net/sprites/go/normal/blastoise.png
//wartortle suns: https://img.pokemondb.net/sprites/go/normal/wartortle-sunglasses.png
//wartortle: https://img.pokemondb.net/sprites/go/normal/wartortle.png
// squirtle: https://img.pokemondb.net/sprites/go/normal/squirtle.png
//squirtle suns: https://img.pokemondb.net/sprites/go/normal/squirtle-sunglasses.png
