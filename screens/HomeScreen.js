import React from "react";
import { View } from "react-native";

import Header from "../components/Header/Header";
import { NotesList } from "../components/NotesList/NotesList";
import { MoreOptions } from "../components/MoreOptions/MoreOptions";
import { AddNoteIcon } from "../components/AddNoteIcon/AddNoteIcon";
import { appStyles } from "../components/mainStyles";

const HomeScreen = () => {
  return (
    <View style={appStyles.container}>
      <Header />
      <NotesList />
      <MoreOptions />
      <AddNoteIcon />
    </View>
  );
};

export default HomeScreen;
