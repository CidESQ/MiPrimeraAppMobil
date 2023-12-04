import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 35,
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#789048",
    borderRadius: 60,
    borderColor: "#607848",
    borderWidth: 2,
    width: 250,
    color: "white",
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#789048",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#607848",
    borderWidth: 2,
  },
  addText: {
    fontSize: 30,
    color: "#697049",
  },
});

export default appStyles;
