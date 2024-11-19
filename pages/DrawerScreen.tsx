import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackTypes } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const Drawer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackTypes, "Drawer">>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.getParent("LeftDrawer").openDrawer()}>
        Open Left Drawer
      </Button>
      <Text>Test</Text>
    </View>
  );
};
