import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  MenuIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "../Icons/Icons";
const Header = () => {
  return (
    <View style={style.header}>
      <MenuIcon size={24} color="black" />
      <Text>All Notes</Text>
      <SearchIcon size={24} color="black" />
      <MoreVerticalIcon size={24} color="black" />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    marginTop: 50,
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
