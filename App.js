import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./Components/MainTabScreen";

import UserMainTabScreen from "./Components/UserMainTabScreen";
import CounterScreen from "./Components/CounterScreen";
import User from "./Components/UserScreen";
import { AuthContext } from "./Auth/context";

// RN >= 0.63
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

// RN >= 0.52
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);

// RN < 0.52
console.ignoredYellowBox = ["Warning: ReactNative.createElement"];

const Drawer = createDrawerNavigator();

export default function App() {
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("fdsa");
    },
    signOut: () => {
      setUserToken(null);
    },
    signUp: () => {
      setUserToken("fdsa");
    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken === null ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainTabScreen} />
            <Drawer.Screen name="CounterScreen" component={CounterScreen} />
            <Drawer.Screen name="User" component={User} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={UserMainTabScreen} />
            <Drawer.Screen name="CounterScreen" component={CounterScreen} />
            <Drawer.Screen name="User" component={User} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
