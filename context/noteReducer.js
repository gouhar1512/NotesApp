import {
  ADD_EMPTY_NOTE,
  SAVE_NOTE,
  SET_NOTE_TO_EDIT,
  TOGGLE_MORE_OPTIONS,
} from "./constants";

const deepClone = (state) => {
  return JSON.parse(JSON.stringify(state));
};

function Note(id) {
  this.id = id;
  this.title = "";
  this.body = "";
}

export const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_EMPTY_NOTE: {
      const updatedState = deepClone(state);
      updatedState.notesList.unshift(new Note(action.payload.id));
      return updatedState;
    }

    case SET_NOTE_TO_EDIT: {
      const updatedState = deepClone(state);
      updatedState.noteToEdit.id = action.payload.id;
      return updatedState;
    }

    case SAVE_NOTE: {
      const updatedState = deepClone(state);
      const id = state.noteToEdit.id;
      const index = updatedState.notesList.findIndex((note) => note.id === id);
      if (action.payload.body != undefined) {
        updatedState.notesList[index].body = action.payload.body;
      }
      if (action.payload.title != undefined) {
        updatedState.notesList[index].title = action.payload.title;
      }
      return updatedState;
    }

    case TOGGLE_MORE_OPTIONS: {
      const updatedState = deepClone(state);
      updatedState.uiState.isMoreOptionsOpen = action.payload.show;

      return updatedState;
    }

    default:
      return state;
  }
};
