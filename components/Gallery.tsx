import { ScrollView, Text, View, Image } from "react-native";
import { styles } from "../styles/styles";

const mountains = [
  { url: "https://i.imgur.com/LMdxuTD.jpeg" },
  { url: "https://i.imgur.com/M2b0CBW.jpeg" },
  { url: "https://i.imgur.com/ciwrqt6.jpeg" },
  { url: "https://i.imgur.com/nflyrQx.jpeg" },
  { url: "https://i.imgur.com/gXLruxG.jpeg" },
  { url: "https://i.imgur.com/JvHGX20.jpeg" },
  { url: "https://i.imgur.com/aha6o8r.jpeg" },
];

export const Gallery = () => {
  return (
    <View>
      {mountains.map((mountain, index) => (
        <View style={{ width: "100%", height: "auto", flexWrap: 1 }}>
          <Image
            source={{ uri: mountain.url }}
            style={styles.galleryImages}
          ></Image>
        </View>
      ))}
      ;
    </View>
  );
};
