import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={} />
    </Tab.Navigator>
  );
};
