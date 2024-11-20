import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationButton: {
    width: 70,
    maxHeight: 30,

    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
    marginTop: 10,
  },
  galleryImages: {
    width: 200,
    height: 200,
    margin: 10,
    // aspectRatio: 1,
    // flexDirection: "column",
    // flexWrap: "wrap",
  },
  contactCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    width: "100%",
    height: 70,
    borderColor: "black",
    borderWidth: 1,
  },
});
