import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { noteStyles } from "../mainStyles";

export const Note = () => {
  return (
    <TouchableOpacity style={[noteStyles.note]}>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          vel?
        </Text>
      </View>
    </TouchableOpacity>
  );
};
