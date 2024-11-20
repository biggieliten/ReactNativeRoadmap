import { Text, View, Button } from "react-native";
import { RootStackTypes } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

const routes = ["Gallery", "Settings", "Profile"];

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Text>Home Screen</Text>
      <Pressable
        style={[styles.navigationButton, styles.flexCenter]}
        onPress={() => navigation.navigate("Test")}
      >
        <Text>Test</Text>
      </Pressable>
      <Pressable
        style={[styles.navigationButton, styles.flexCenter]}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text>Tabs</Text>
      </Pressable>
    </View>
  );
};
