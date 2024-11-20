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

    backgroundColor: "#4c4c4d",
    borderRadius: 10,

    width: "100%",
    height: 70,
    marginTop: 10,
  },
  contactIcons: {
    margin: 10,
    width: 45,
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1374e9",
    borderRadius: 100,
  },
  phoneLabel: {
    fontSize: 20,
    color: "white",
    flex: 1,
  },
  phoneNumber: {
    fontSize: 20,
    color: "white",
    flex: 1,
    marginRight: 30,
  },
});
