import React, { useContext } from "react";
import Item from "./Item";
import { Context } from "../Context.jsx";

function DisplayItems() {
  const { notes } = useContext(Context);
  const listOfNotes = notes.map((note, index) => {
    if (note.data || note.isEditMode) {
      return <Item key={index} note={note} id={index} />;
    }
  });
  return <div>{listOfNotes}</div>;
}

export default DisplayItems;
