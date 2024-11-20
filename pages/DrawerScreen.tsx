import { RootStackTypes } from "../types/types";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeScreen } from "./HomeScreen";
import { Test } from "./Test";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext/AuthContext";
import { View } from "react-native";

const Drawer = createDrawerNavigator<RootStackTypes>();

export const DrawerScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            padding: 10,
            marginTop: 15,
          }}
        >
          <View>
            <DrawerItemList {...props} />
          </View>

          <DrawerItem label="Sign out" onPress={signOut} />
        </View>
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
};
