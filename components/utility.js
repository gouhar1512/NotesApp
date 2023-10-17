const getNewId = () => {
  return parseInt(Math.random() * 100);
};

export const getNewNoteId = () => {
  return `note_${getNewId()}`;
};
