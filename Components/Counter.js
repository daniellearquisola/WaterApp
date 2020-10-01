import { render } from "react-dom";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

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

  render() {
    let counter = this.state.counter;
    return (
      <View>
        <Text>Counter: {counter}</Text>
        <TouchableOpacity onPress={this.onIncrement}>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onSubtract}>
          <Icon name="minus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
