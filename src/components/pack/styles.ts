import { cloneElement } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 300,
    backgroundColor: "fff",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2) ",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffffff",
    position: "absolute",
    bottom: 15,
    backgroundColor: "rgba(0,0,0, 0.3)",
    width: "100%",
    textAlign: "center",
  },
});
