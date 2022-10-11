import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [copyNotes, setCopyNotes] = useState(
    JSON.parse(localStorage.getItem("copyNotes")) || []
  );
  const [globalEditMode, setIsGlobalEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("copyNotes", JSON.stringify(copyNotes));
  }, [JSON.stringify(notes)]);

  function addNote() {
    if (!globalEditMode) {
      setNotes((prevNotes) => [
        ...prevNotes,
        { data: "", isEditMode: true, isChecked: false },
      ]);
    }
    setIsGlobalEditMode(true);
  }

  function deleteCheckedNotes() {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => !note.isChecked || note.isEditMode)
    );
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
              setIsGlobalEditMode(true);
              return { ...note, isEditMode: true };
            case "saveEditNote":
              setIsGlobalEditMode(false);
              return { ...note, isEditMode: false };
            case "unSaveEditNote":
              setIsGlobalEditMode(false);
              return { ...copyNotes[i], isEditMode: false };
            case "handleInputChange":
              return { ...note, data: value };
            case "deleteSingleNote":
              return { ...note, data: null };
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
        globalEditMode,
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
