import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackTypes } from "./types/types";
import {
  AuthContext,
  AuthenticationProvider,
} from "./state/AuthContext/AuthContext"; // Adjust the path as necessary
import { SignIn } from "./pages/SignIn";
import { useContext } from "react";
// import { View, Text } from "react-native";
import { DrawerScreen } from "./pages/DrawerScreen";

const Stack = createNativeStackNavigator<RootStackTypes>();

function RootStack() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator
      key={userToken ? "authenticated" : "unauthenticated"}
      screenOptions={{ headerShown: false }}
      initialRouteName={userToken ? "Drawer" : "SignIn"} // Dynamisk startpunkt
    >
      {userToken === null ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      ) : (
        <>
          <Stack.Screen name="Drawer" component={DrawerScreen} />
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
