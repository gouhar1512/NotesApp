import React from "react";
import { FlatList } from "react-native";
import { Note } from "../Note/Note";
import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";

export const NotesList = () => {
  const { notesList } = useContext(NoteContext);

  return (
    <FlatList
      numColumns={2}
      data={notesList}
      renderItem={({ item }) => <Note note={item} />}
    />
  );
};
