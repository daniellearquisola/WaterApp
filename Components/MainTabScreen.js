import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CounterScreen from "./CounterScreen";
import UserScreen from "./UserScreen";
import SignUp from "./SignUp"
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator();
const CounterStack = createStackNavigator();
const UserStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#EA897B"
    // inactiveColor="#D5D7D2"
    barStyle={{ backgroundColor: "#114C9F" }}
    // barStyle={{ backgroundColor: "#7FAFD0" }}
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
    <Tab.Screen
      name="User"
      component={UserStackScreen}
      options={{
        tabBarLabel: "User",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
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
        // backgroundColor: "#1C47A5",
        backgroundColor: "#114C9F",
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
            backgroundColor="#7FAFD0"
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
        backgroundColor: "#114C9F",
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
            name="ios-menu"
            size={25}
            backgroundColor="#7FAFD0"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </CounterStack.Navigator>
);

const UserStackScreen = ({ navigation }) => (
  <UserStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <UserStack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UserStack.Navigator>
);
