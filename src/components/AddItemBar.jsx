import React, { useContext } from "react";
import { MdDeleteSweep, MdLibraryAdd } from "react-icons/Md";
import { Context } from "../Context";

function AddItemBar() {
  const { addNote, deleteAllNotes } = useContext(Context);
  return (
    <div className="flex lg:mx-72 justify-around mb-8 text-2xl">
      <MdLibraryAdd onClick={addNote} />
      <MdDeleteSweep onClick={deleteAllNotes} />
    </div>
  );
}

export default AddItemBar;
