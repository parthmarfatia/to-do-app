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

  function deleteAllNotes() {
    setNotes([]);
  }

  function checkedNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return { ...note, isChecked: !note.isChecked };
        }
        return note;
      });
    });
  }

  function editNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return { ...note, isEditMode: true };
        }
        return note;
      });
    });
    setCopyNotes(notes);
  }

  function saveEditNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return { ...note, isEditMode: false };
        }
        return note;
      });
    });
  }

  function unSaveEditNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return { ...copyNotes[i], isEditMode: false };
        }
        return note;
      });
    });
  }

  function handleInputChange(event, index) {
    const { value } = event.target;
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return { ...note, data: value };
        }
        return note;
      });
    });
  }

  function deleteSingleNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, i) => i !== index);
    });
  }

  return (
    <Context.Provider
      value={{
        notes,
        addNote,
        deleteAllNotes,
        checkedNote,
        editNote,
        saveEditNote,
        unSaveEditNote,
        handleInputChange,
        deleteSingleNote,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
