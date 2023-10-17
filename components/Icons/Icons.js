import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = "black";

const Icon = ({ name, size, color }) => (
  <Feather
    name={name}
    size={size || DEFAULT_SIZE}
    color={color || DEFAULT_COLOR}
  />
);

export const MenuIcon = ({ size, color }) => <Icon name="menu" />;
export const MoreVerticalIcon = ({ size, color }) => (
  <Icon name="more-vertical" />
);
export const SearchIcon = ({ size, color }) => <Icon name="search" />;

export const AddIcon = () => (
  <MaterialCommunityIcons
    name="pencil-circle-outline"
    size={50}
    color="darkorange"
  />
);
