import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackTypes } from "./types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles/styles";
import { Test } from "./pages/Test";
import { HomeScreen } from "./pages/Homescreen";
import { DrawerScreen } from "./pages/DrawerScreen";

const Stack = createNativeStackNavigator<RootStackTypes>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Drawer"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Drawer" component={DrawerScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
