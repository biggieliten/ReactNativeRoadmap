import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackTypes } from "./types/types";
import {
  AuthContext,
  AuthenticationProvider,
} from "./state/AuthContext/AuthContext"; // Adjust the path as necessary
import { Test } from "./pages/Test";
import { HomeScreen } from "./pages/Homescreen";
import { SignIn } from "./pages/SignIn";
import { useContext } from "react";

const Stack = createNativeStackNavigator<RootStackTypes>();

function RootStack() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken === null ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Test" component={Test} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthenticationProvider>
  );
}
