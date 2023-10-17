import React from "react";
import Header from "./components/Header/Header";
import { appStyles } from "./components/mainStyles";
import { NotesList } from "./components/NotesList/NotesList";
import { AddNote } from "./components/AddNote/AddNote";
import { MoreOptions } from "./components/MoreOptions/MoreOptions";
import { useReducer } from "react";
import { noteReducer } from "./context/noteReducer";
import {
  NoteContext,
  NoteDispathContext,
  initialState,
} from "./context/noteContext";
import { View } from "react-native";

export default function App() {
  const [appState, dispatch] = useReducer(noteReducer, initialState);

  return (
    <View style={appStyles.container}>
      <NoteContext.Provider value={appState}>
        <NoteDispathContext.Provider value={dispatch}>
          <Header />
          <NotesList />
          <MoreOptions />
          <AddNote />
        </NoteDispathContext.Provider>
      </NoteContext.Provider>
    </View>
  );
}
