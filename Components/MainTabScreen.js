import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CounterScreen from "./CounterScreen";
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator();
const CounterStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#EA897B"
    // inactiveColor="#D5D7D2"
    barStyle={{ backgroundColor: "#1C47A5" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Water Track"
      component={CounterStackScreen}
      options={{
        tabBarLabel: "Water Track",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-water" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        // backgroundColor: "#B1DCE6",
        backgroundColor: "#1C47A5",
      },
      headerTintColor: "#B1DCE6",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Chalkduster",
      },
    }}
  >
    <HomeStack.Screen
      name="WATER-MON"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#B1DCE6"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const CounterStackScreen = ({ navigation }) => (
  <CounterStack.Navigator
    screenOptions={{
      headerStyle: {
        // backgroundColor: "#B1DCE6",
        backgroundColor: "#1C47A5",
      },
      headerTintColor: "#B1DCE6",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Chalkduster",
      },
    }}
  >
    <CounterStack.Screen
      name="WATER-MON"
      component={CounterScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-water"
            size={25}
            backgroundColor="#B1DCE6"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </CounterStack.Navigator>
);
