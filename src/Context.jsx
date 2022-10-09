import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState([{ data: "this is some message" }]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  function addNote() {}

  function deleteAllNotes() {}

  function checkedNote(index) {}

  function editNote(index) {}

  function saveEditNote() {}

  function unsaveEditNote() {}

  return (
    <Context.Provider
      value={{
        notes,
        setNotes,
        isEditMode,
        isChecked,
        checkedNote,
        editNote,
        saveEditNote,
        unsaveEditNote,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
