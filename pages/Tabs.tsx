import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Gallery } from "../components/Gallery";
import { Contacts } from "../components/Contacts";
import { SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Gallery"
        options={{}}
        screenOptions={{
          tabBarStyle: { backgroundColor: "#4c4c4d" },
          tabBarLabelStyle: { color: "white" },
        }}
      >
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Contacts" component={Contacts} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
