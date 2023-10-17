import { TOGGLE_MORE_OPTIONS } from "./constants";

const deepClone = (state) => {
  return JSON.parse(JSON.stringify(state));
};

export const noteReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MORE_OPTIONS: {
      const updatedState = deepClone(state);
      updatedState.uiState.isMoreOptionsOpen = action.payload.show;

      return updatedState;
    }
    default:
      return state;
  }
};
