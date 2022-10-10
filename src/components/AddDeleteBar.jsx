import React, { useContext } from "react";
import { MdDeleteSweep, MdAdd } from "react-icons/Md";
import { Context } from "../Context";

function AddDeleteBar() {
  const { addNote, deleteCheckedNotes } = useContext(Context);
  return (
    <div className="flex lg:mx-72 justify-around mb-8 text-2xl">
      <MdAdd onClick={addNote} />
      <MdDeleteSweep onClick={deleteCheckedNotes} />
    </div>
  );
}

export default AddDeleteBar;
