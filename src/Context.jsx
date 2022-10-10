import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [copyNotes, setCopyNotes] = useState(notes);

  function addNote() {
    setNotes((prevNotes) => [
      ...prevNotes,
      { data: "", isEditMode: true, isChecked: false },
    ]);
  }

  function deleteCheckedNotes() {
    setNotes((prevNotes) => prevNotes.filter((note) => !note.isChecked));
  }

  function setNotesCombined(str, index, eventTarget) {
    const { value } = eventTarget ? eventTarget : { value: null };
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          switch (str) {
            case "checkedNote":
              return { ...note, isChecked: !note.isChecked };
            case "editNote":
              setCopyNotes(notes);
              return { ...note, isEditMode: true };
            case "saveEditNote":
              return { ...note, isEditMode: false };
            case "unSaveEditNote":
              return { ...copyNotes[i], isEditMode: false };
            case "handleInputChange":
              return { ...note, data: value };
            case "deleteSingleNote":
              return prevNotes.filter((note, i) => i !== index);
            default:
              return;
          }
        }
        return note;
      });
    });
  }

  return (
    <Context.Provider
      value={{
        notes,
        addNote,
        deleteCheckedNotes,
        setNotesCombined,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
