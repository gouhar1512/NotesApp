import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    height: 60,
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  headerRight: {
    flexDirection: "row",
    gap: 20,
  },
});

export const sideBarStyles = StyleSheet.create({
  sideBar: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    elevation: 10,
    paddingTop: 20,
  },
  backdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.2,
  },
  option: {
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    gap: 20,
  },
  selectedOption: {
    backgroundColor: "#eee",
  },
  text: {
    fontSize: 18,
  },
});

export const noteStyles = StyleSheet.create({
  note: {
    padding: 16,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 32,
    borderRadius: 12,
    width: "43%",
    minHeight: 240,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 4,
  },

  title: {
    fontWeight: "800",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 4,
    marginBottom: 4,
  },

  inputTitle: {
    fontSize: 20,
    fontWeight: "500",
    width: 200,
  },
  inputBody: {
    padding: 16,
    textAlignVertical: "top",
    backgroundColor: "#FFF5D1",
  },
});

export const buttonStyles = StyleSheet.create({
  btn: {
    alignItems: "center",
    position: "absolute",
    right: 25,
    bottom: 25,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "orange",
    backgroundColor: "white",
  },
});

export const moreOptionsStyles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 22,
    top: 15,
    padding: 16,
    backgroundColor: "white",
    width: 150,
    borderRadius: 16,
    shadowColor: "black",
    elevation: 8,
  },
  option: {
    paddingBottom: 30,
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
  },
});
