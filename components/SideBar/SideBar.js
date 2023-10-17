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

const Option = ({ title, onPressHandler, icon, selected }) => {
  return (
    <TouchableOpacity
      style={[
        sideBarStyles.option,
        selected ? sideBarStyles.selectedOption : {},
      ]}
      onPress={onPressHandler}>
      {icon}
      <Text style={sideBarStyles.text}>{title}</Text>
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

  const optionsDataToMapToComponents = [
    {
      title: "All Notes",
      value: ALL_NOTES_SELECTED,
      icon: <AllNotesIcon />,
    },
    {
      title: "Favourite notes",
      value: FAVOURITE_NOTES_SELECTED,
      icon: <FavouriteIcon />,
    },
    {
      title: "Recycle bin",
      value: RECYCLE_BIN_SELECTED,
      icon: <TrashIcon />,
    },
  ];

  const optionsDataMappedToComponents = optionsDataToMapToComponents.map(
    (option) => (
      <Option
        key={option.value}
        title={option.title}
        onPressHandler={() => handleSelectOption(option.value)}
        icon={option.icon}
        selected={selectedOption === option.value}
      />
    )
  );

  return (
    <>
      <View style={sideBarStyles.backdrop} onTouchStart={closeSideBar} />
      <View style={sideBarStyles.sideBar}>
        <View>
          {optionsDataMappedToComponents}
          {/* <Option value="Toggle theme" onPressHandler={closeSideBar} /> */}
        </View>
      </View>
    </>
  );
};

export default SideBar;
