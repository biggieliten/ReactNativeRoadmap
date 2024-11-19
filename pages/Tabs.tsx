import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Gallery } from "../components/Gallery";
import { Contacts } from "../components/Contacts";
const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Gallery" options={{}}>
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Contacts" component={Contacts} />
      {/* <Tab.Screen name="Gallery" component={Gallery} /> */}
    </Tab.Navigator>
  );
};
