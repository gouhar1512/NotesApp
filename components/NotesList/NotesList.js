import { FlatList, Text, View } from "react-native";
import { Note } from "../Note/Note";
import { noteStyles } from "../mainStyles";

export const NotesList = () => {
  const mappedData = [{}, {}, {}, {}, {}, {}];

  return (
    <FlatList
      numColumns={2}
      data={mappedData}
      renderItem={({ item }) => <Note />}
    />
  );
};
