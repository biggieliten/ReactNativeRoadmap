import { View, Text, Button } from "react-native";
import { RootStackTypes } from "../types/types";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<RootStackTypes>();

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const Test = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Test Screen</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

export const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
};
