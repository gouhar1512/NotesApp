import { Text, TouchableOpacity, View } from "react-native";
import { moreOptionsStyles } from "../mainStyles";
import { useState } from "react";

const Option = ({ value }) => {
  return (
    <TouchableOpacity style={moreOptionsStyles.option}>
      <View>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MoreOptions = ({ showOptions, toggleOptions }) => {
  if (!showOptions) {
    return <></>;
  }

  return (
    <TouchableOpacity
      style={[moreOptionsStyles.container]}
      onPress={() => toggleOptions(false)}>
      <View>
        <Option value={"Edit"} />
        <Option value={"View"} />
        <Option value={"About"} />
      </View>
    </TouchableOpacity>
  );
};
