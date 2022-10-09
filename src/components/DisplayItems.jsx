import React, { useContext } from "react";
import Item from "./Item";
import { Context } from "../Context.jsx";

function DisplayItems() {
  const { notes, setNotes } = useContext(Context);
  const listOfNotes = notes.map((note, index) => {
    return <Item key={index} note={note.data} id={index} />;
  });
  return <div>{listOfNotes}</div>;
}

export default DisplayItems;
