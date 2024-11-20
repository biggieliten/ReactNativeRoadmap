import { View, Text } from "react-native";
import { Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext/AuthContext";

export const SignOut = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Sign out" onPress={signOut}></Button>
    </View>
  );
};
