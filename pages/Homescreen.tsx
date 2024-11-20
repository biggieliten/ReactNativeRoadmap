import { RootStackTypes } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text, View, Button } from "react-native";
import { styles } from "../styles/styles";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext/AuthContext";

export const HomeScreen = ({ navigation }: any) => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
