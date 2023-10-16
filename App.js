import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./components/Header/Header";
import { appStyles } from "./components/mainStyles";
import { NotesList } from "./components/NotesList/NotesList";
import { AddNote } from "./components/AddNote/AddNote";
import { MoreOptions } from "./components/MoreOptions/MoreOptions";
import { useState } from "react";

export default function App() {
  const [showOptions, setShowOptions] = useState(true);

  const toggleOptions = (show) => {
    setShowOptions(show);
  };

  return (
    <View style={appStyles.container}>
      <Header toggleOptions={toggleOptions} />
      <NotesList />
      <MoreOptions showOptions={showOptions} toggleOptions={toggleOptions} />
      <AddNote />
    </View>
  );
}
