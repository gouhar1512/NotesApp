import React from "react";
import { Text, View } from "react-native";
import {
  Feather,
  MenuIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "../Icons/Icons";
import { headerStyles } from "../mainStyles";
const Header = ({ toggleOptions }) => {
  return (
    <View style={headerStyles.header}>
      <MenuIcon />
      <Text style={headerStyles.title}>My notes</Text>
      <View style={headerStyles.headerRight}>
        <SearchIcon />
        <MoreVerticalIcon onPressHandler={toggleOptions} />
      </View>
    </View>
  );
};

export default Header;
