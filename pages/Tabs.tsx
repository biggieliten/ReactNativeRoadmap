import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Gallery } from "../components/Gallery";
import { Contacts } from "../components/Contacts";
import { SafeAreaView } from "react-native";
import { GrGallery } from "react-icons/gr";

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Gallery"
        options={{}}
        screenOptions={{ tabBarStyle: { paddingTop: 30 } }}
      >
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Contacts" component={Contacts} />
        {/* <Tab.Screen name="Gallery" component={Gallery} /> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
};
