import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = "black";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name, size, color }) => (
  <Feather
    name={name}
    size={size || DEFAULT_SIZE}
    color={color || DEFAULT_COLOR}
  />
);

export const MenuIcon = ({ size, color }) => (
  <Icon name="menu" size={size} color={color} />
);
export const MoreVerticalIcon = ({ size, color }) => (
  <Icon name="more-vertical" size={size} color={color} />
);
export const SearchIcon = ({ size, color }) => (
  <Icon name="search" size={size} color={color} />
);

export const AddIcon = ({ onPressHandler }) => (
  <MaterialCommunityIcons
    name="pencil-circle-outline"
    size={50}
    color="darkorange"
    onPress={onPressHandler}
  />
);

export const FavouriteIcon = () => (
  <AntDesign name="hearto" size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
);

export const AllNotesIcon = () => (
  <SimpleLineIcons name="notebook" size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
);

export const TrashIcon = () => (
  <Ionicons name="trash-outline" size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
);
