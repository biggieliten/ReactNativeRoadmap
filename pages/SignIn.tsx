import { useContext } from "react";
import { View, Button } from "react-native";
import { AuthContext } from "../state/AuthContext/AuthContext";
// import { RootStackTypes } from "../types/types";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = async () => {
    await signIn({});
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sign in" onPress={handleSignIn}></Button>
    </View>
  );
};
