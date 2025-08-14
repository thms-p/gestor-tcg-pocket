import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffff",
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#c6e6c2cc",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3) ",
    overflow: "hidden",
    position: "absolute",
    bottom: 40,
    right: 40,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    backgroundColor: "#b3dab5ff",
    flex: 1,
    textAlign: "center",
  },
  listContent: {
    width: 350,
    gap: 20,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    paddingBottom: 80,
  },
});
