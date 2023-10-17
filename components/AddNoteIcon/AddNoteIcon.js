import React from "react";
import { TouchableOpacity } from "react-native";
import { buttonStyles } from "../mainStyles";
import { AddIcon } from "../Icons/Icons";
import { useNavigation } from "@react-navigation/native";

export const AddNoteIcon = () => {
  const navigation = useNavigation();

  const openAddNoteScreen = () => {
    navigation.navigate("AddNote");
  };

  return (
    <TouchableOpacity style={buttonStyles.btn} onPress={openAddNoteScreen}>
      <AddIcon />
    </TouchableOpacity>
  );
};
