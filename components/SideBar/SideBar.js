import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { sideBarStyles } from "../mainStyles";
import { NoteContext, NoteDispathContext } from "../../context/noteContext";
import {
  ALL_NOTES_SELECTED,
  FAVOURITE_NOTES_SELECTED,
  RECYCLE_BIN_SELECTED,
  TOGGLE_SIDE_BAR,
} from "../../context/constants";
import { AllNotesIcon, FavouriteIcon, TrashIcon } from "../Icons/Icons";

const Option = ({ value, onPressHandler, icon, selected }) => {
  return (
    <TouchableOpacity
      style={[
        sideBarStyles.option,
        selected ? sideBarStyles.selectedOption : {},
      ]}
      onPress={onPressHandler}>
      {icon}
      <Text style={sideBarStyles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState(ALL_NOTES_SELECTED);

  const { uiState } = useContext(NoteContext);
  const dispatch = useContext(NoteDispathContext);

  const showSideBar = uiState.isSideBarOpen;

  const closeSideBar = () => {
    dispatch({
      type: TOGGLE_SIDE_BAR,
      payload: {
        show: false,
      },
    });
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    closeSideBar();
  };

  if (!showSideBar) {
    return <></>;
  }

  return (
    <>
      <View style={sideBarStyles.backdrop} onTouchStart={closeSideBar} />
      <View style={sideBarStyles.sideBar}>
        <View>
          <Option
            value="All notes"
            onPressHandler={() => handleSelectOption(ALL_NOTES_SELECTED)}
            icon={<AllNotesIcon />}
            selected={selectedOption === ALL_NOTES_SELECTED}
          />
          <Option
            value="Favourite notes"
            onPressHandler={() => handleSelectOption(FAVOURITE_NOTES_SELECTED)}
            icon={<FavouriteIcon />}
            selected={selectedOption === FAVOURITE_NOTES_SELECTED}
          />
          <Option
            value="Recycle bin"
            onPressHandler={() => handleSelectOption(RECYCLE_BIN_SELECTED)}
            icon={<TrashIcon />}
            selected={selectedOption === RECYCLE_BIN_SELECTED}
          />
          {/* <Option value="Toggle theme" onPressHandler={closeSideBar} /> */}
        </View>
      </View>
    </>
  );
};

export default SideBar;
