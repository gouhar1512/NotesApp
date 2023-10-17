import React from "react";
import { View } from "react-native";

import Header from "../components/Header/Header";
import { NotesList } from "../components/NotesList/NotesList";
import { MoreOptions } from "../components/MoreOptions/MoreOptions";
import { AddNoteIcon } from "../components/AddNoteIcon/AddNoteIcon";
import { appStyles } from "../components/mainStyles";
import SideBar from "../components/SideBar/SideBar";

const HomeScreen = () => {
  return (
    <View style={appStyles.container}>
      <Header />
      <NotesList />
      <SideBar />
      <MoreOptions />
      <AddNoteIcon />
    </View>
  );
};

export default HomeScreen;
