import { RootStackTypes } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

export function HomeScreen() {
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
