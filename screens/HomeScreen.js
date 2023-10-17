import React, { useReducer } from "react";
import { View } from "react-native";
import {
  NoteContext,
  NoteDispathContext,
  initialState,
} from "../context/noteContext";
import Header from "../components/Header/Header";
import { NotesList } from "../components/NotesList/NotesList";
import { MoreOptions } from "../components/MoreOptions/MoreOptions";
import { AddNoteIcon } from "../components/AddNoteIcon/AddNoteIcon";
import { noteReducer } from "../context/noteReducer";
import { appStyles } from "../components/mainStyles";

const HomeScreen = () => {
  const [appState, dispatch] = useReducer(noteReducer, initialState);
  return (
    <View style={appStyles.container}>
      <NoteContext.Provider value={appState}>
        <NoteDispathContext.Provider value={dispatch}>
          <Header />
          <NotesList />
          <MoreOptions />
          <AddNoteIcon />
        </NoteDispathContext.Provider>
      </NoteContext.Provider>
    </View>
  );
};

export default HomeScreen;
