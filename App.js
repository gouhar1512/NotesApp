import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
import { noteReducer } from "./context/noteReducer";
import {
  NoteContext,
  NoteDispathContext,
  initialState,
} from "./context/noteContext";
import FavouriteNotesScreen from "./screens/FavouriteNotesScreen";
import RecycleBinScreen from "./screens/RecycleBinScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appState, dispatch] = useReducer(noteReducer, initialState);
  return (
    <NoteContext.Provider value={appState}>
      <NoteDispathContext.Provider value={dispatch}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "My notes",
              }}
            />
            <Stack.Screen
              name="AddNote"
              component={AddNoteScreen}
              options={{
                title: "Add note",
              }}
            />
            <Stack.Screen
              name="FavouriteNotes"
              component={FavouriteNotesScreen}
              options={{
                title: "Favourite notes",
              }}
            />
            <Stack.Screen
              name="RecycleBin"
              component={RecycleBinScreen}
              options={{
                title: "Recycle bin",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NoteDispathContext.Provider>
    </NoteContext.Provider>
  );
}
