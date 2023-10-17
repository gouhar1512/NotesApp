import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { noteStyles } from "../mainStyles";
import { NoteDispathContext } from "../../context/noteContext";
import { SET_NOTE_TO_EDIT } from "../../context/constants";
import { useNavigation } from "@react-navigation/native";

export const Note = ({ note }) => {
  const dispatch = useContext(NoteDispathContext);
  const navigation = useNavigation();
  const openNoteToViewOrUpdate = () => {
    dispatch({
      type: SET_NOTE_TO_EDIT,
      payload: {
        id: note.id,
      },
    });
    navigation.navigate("AddNote");
  };

  return (
    <TouchableOpacity
      style={[noteStyles.note]}
      onPress={openNoteToViewOrUpdate}>
      <View>
        {note.title && <Text style={noteStyles.title}>{note.title}</Text>}
        <Text>{note.body}</Text>
      </View>
    </TouchableOpacity>
  );
};
