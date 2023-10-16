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
    marginTop: 50,
    padding: 16,
    backgroundColor: "transparent",
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
    right: 25,
    top: 60,
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
});
