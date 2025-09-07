import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 100,
    backgroundColor: "#ffffffff",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2) ",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    borderRadius: 10,
    height: "100%",
  },
  title: {
    fontSize: 25,
    flex: 1,
    padding: 8,
    color: "#aaa",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
  },
});
