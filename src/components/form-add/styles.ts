import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2) ",
    position: "absolute",
    zIndex: 3,
    top: 130,
    backgroundColor: "#b3dab5cb",
    padding: 32,
    borderRadius: 10,
    gap: 16,
  },
  input: {
    backgroundColor: "#f8f8f8",
    width: 280,
    height: 60,
    padding: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#aaa",
    fontSize: 15,
  },
  containerButton: {
    width: 280,
    flexDirection: "row",
    gap: 15,
  },
  button: {
    height: 40,
    flex: 0.5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    justifyContent: "center",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2) ",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
  },
});
