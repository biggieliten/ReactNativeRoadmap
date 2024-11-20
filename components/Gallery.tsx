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
    <ScrollView style={{ backgroundColor: "#2d2d2e" }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          // minWidth: "100%",
          // width: "100%",
          // height: 5000,
          // borderBlockColor: "pink",
          // borderWidth: 3,
        }}
      >
        {/* <View> */}
        {mountains.map((mountain) => (
          <View
            style={{
              width: 200,
              height: 200,
              flexBasis: "49%",
              flexGrow: 1,
              margin: 1,
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: mountain.url }}
              style={styles.galleryImages}
            ></Image>
          </View>
        ))}
        {/* </View> */}
      </View>
    </ScrollView>
  );
};
