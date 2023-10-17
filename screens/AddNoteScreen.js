import React, { useCallback, useContext, useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import NoteHeader from "../components/NoteHeader/NoteHeader";
import { noteStyles } from "../components/mainStyles";
import { NoteContext, NoteDispathContext } from "../context/noteContext";
import { SAVE_NOTE } from "../context/constants";
import _ from "lodash";

const AddNoteScreen = () => {
  const { noteToEdit, notesList } = useContext(NoteContext);
  const dispatch = useContext(NoteDispathContext);

  const [noteBody, setNoteBody] = useState("");

  const saveNote = (textValue) => {
    dispatch({
      type: SAVE_NOTE,
      payload: {
        body: textValue,
      },
    });
  };
  const saveNoteDebounced = useCallback(
    _.debounce((textValue) => saveNote(textValue), 300),
    []
  );

  const handleSaveNote = (textValue) => {
    setNoteBody(textValue);
    saveNoteDebounced(textValue);
  };

  useEffect(() => {
    const noteIndex = notesList.findIndex((note) => note.id === noteToEdit.id);
    setNoteBody(notesList[noteIndex].body);
  }, []);

  return (
    <View>
      <NoteHeader />
      <TextInput
        multiline={true}
        numberOfLines={20}
        style={noteStyles.inputBody}
        onChangeText={handleSaveNote}
        value={noteBody}
      />
    </View>
  );
};

export default AddNoteScreen;
