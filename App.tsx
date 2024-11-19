import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackTypes } from "./types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles/styles";
import { Test } from "./pages/Test";
import { Drawer } from "./pages/DrawerScreen";

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackTypes>>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate("Test")}
      >
        <Text>Test</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackTypes>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Test" component={Drawer} />
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
