import { createContext } from "react";

export const initialState = {
  notesList: [],
  noteToEdit: {
    id: null,
  },
  uiState: {
    isMoreOptionsOpen: false,
    isSideBarOpen: false,
  },
};

export const NoteContext = createContext();
export const NoteDispathContext = createContext();
