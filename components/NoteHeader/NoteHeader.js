import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FavouriteIcon, MoreVerticalIcon } from "../Icons/Icons";
import { headerStyles, noteStyles } from "../mainStyles";
const NoteHeader = () => {
  return (
    <View style={headerStyles.header}>
      <TextInput placeholder="Title" style={noteStyles.inputTitle} />
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
