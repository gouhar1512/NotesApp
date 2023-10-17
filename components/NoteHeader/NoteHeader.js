import React, { useCallback, useContext, useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FavouriteIcon, MoreVerticalIcon } from "../Icons/Icons";
import { headerStyles, noteStyles } from "../mainStyles";
import { NoteContext, NoteDispathContext } from "../../context/noteContext";
import { SAVE_NOTE } from "../../context/constants";

import _ from "lodash";

const NoteHeader = () => {
  const { noteToEdit, notesList } = useContext(NoteContext);
  const dispatch = useContext(NoteDispathContext);

  const [noteTitle, setNoteTitle] = useState("");

  const saveNoteTitle = (textValue) => {
    dispatch({
      type: SAVE_NOTE,
      payload: {
        title: textValue,
      },
    });
  };
  const saveNoteTitleDebounced = useCallback(
    _.debounce((textValue) => saveNoteTitle(textValue), 300),
    []
  );

  const handleSaveNoteTitle = (textValue) => {
    setNoteTitle(textValue);
    saveNoteTitleDebounced(textValue);
  };

  useEffect(() => {
    const noteIndex = notesList.findIndex((note) => note.id === noteToEdit.id);
    setNoteTitle(notesList[noteIndex].title);
  }, []);

  return (
    <View style={headerStyles.header}>
      <TextInput
        placeholder="Title"
        style={noteStyles.inputTitle}
        value={noteTitle}
        onChangeText={handleSaveNoteTitle}
      />
      <View style={headerStyles.headerRight}>
        <FavouriteIcon />
        <TouchableOpacity>
          <MoreVerticalIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteHeader;
