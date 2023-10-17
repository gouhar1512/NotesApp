import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { buttonStyles } from "../mainStyles";
import { AddIcon } from "../Icons/Icons";
import { useNavigation } from "@react-navigation/native";
import { NoteDispathContext } from "../../context/noteContext";
import { ADD_EMPTY_NOTE, SET_NOTE_TO_EDIT } from "../../context/constants";
import { getNewNoteId } from "../utility";

export const AddNoteIcon = () => {
  const navigation = useNavigation();
  const dispatch = useContext(NoteDispathContext);

  const addEmptyNote = (id) => {
    dispatch({
      type: ADD_EMPTY_NOTE,
      payload: {
        id,
      },
    });
  };

  const setNoteToEdit = (id) => {
    dispatch({
      type: SET_NOTE_TO_EDIT,
      payload: {
        id,
      },
    });
  };

  const openAddNoteScreen = () => {
    navigation.navigate("AddNote");
  };

  const handleAddNote = () => {
    const newNoteId = getNewNoteId();
    addEmptyNote(newNoteId);
    setNoteToEdit(newNoteId);
    openAddNoteScreen();
  };

  return (
    <TouchableOpacity style={buttonStyles.btn} onPress={handleAddNote}>
      <AddIcon />
    </TouchableOpacity>
  );
};
