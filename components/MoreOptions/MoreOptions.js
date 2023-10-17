import React, { useContext } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { moreOptionsStyles } from "../mainStyles";
import { NoteContext, NoteDispathContext } from "../../context/noteContext";
import { TOGGLE_MORE_OPTIONS } from "../../context/constants";

const Option = ({ value, onPressHandler }) => {
  return (
    <TouchableOpacity style={moreOptionsStyles.option} onPress={onPressHandler}>
      <View>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MoreOptions = () => {
  const { uiState } = useContext(NoteContext);
  const dispatch = useContext(NoteDispathContext);
  const showOptions = uiState.isMoreOptionsOpen;

  const closeMoreOptions = () => {
    dispatch({
      type: TOGGLE_MORE_OPTIONS,
      payload: {
        show: false,
      },
    });
  };

  if (!showOptions) {
    return <></>;
  }

  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
        onTouchStart={closeMoreOptions}
      />
      <TouchableOpacity
        style={[moreOptionsStyles.container]}
        onPress={closeMoreOptions}>
        <View>
          <Option value={"Edit"} onPressHandler={closeMoreOptions} />
          <Option value={"View"} onPressHandler={closeMoreOptions} />
          <Option value={"About"} onPressHandler={closeMoreOptions} />
        </View>
      </TouchableOpacity>
    </>
  );
};
