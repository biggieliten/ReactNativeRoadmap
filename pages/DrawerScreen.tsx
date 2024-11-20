import { View, Text, Button } from "react-native";
import { RootStackTypes } from "../types/types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./HomeScreen";
import { Test } from "./Test";
import { SignOut } from "./SignOut";

const Drawer = createDrawerNavigator<RootStackTypes>();

export const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
};
