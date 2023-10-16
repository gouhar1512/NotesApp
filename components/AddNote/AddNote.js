import { Button, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles, noteStyles } from "../mainStyles";
import { AddIcon } from "../Icons/Icons";

export const AddNote = () => {
  return (
    <View style={buttonStyles.btn}>
      <AddIcon />
    </View>
  );
};
