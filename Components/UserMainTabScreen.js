import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import UserHomeScreen from "./UserHomeScreen";
import CounterScreen from "./CounterScreen";
import UserInfoScreen from "./UserInfoScreen";
import SignUp from "./SignUp";
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator();
const CounterStack = createStackNavigator();
const UserStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#EA897B"
    barStyle={{ backgroundColor: "#114C9F" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
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
        tabBarColor: "#1f65ff",
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
      component={UserHomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#114C9F"
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
            backgroundColor="#114C9F"
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
        backgroundColor: "#114C9F",
      },
      headerTintColor: "#B1DCE6",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Chalkduster",
      },
    }}
  >
    <UserStack.Screen
      name="WATER-MON"
      component={UserInfoScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UserStack.Navigator>
);
