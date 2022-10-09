import React from "react";
import { MdDeleteSweep, MdLibraryAdd } from "react-icons/Md";

function AddItemBar() {
  return (
    <div className="flex lg:mx-72 justify-around mb-8 text-2xl">
      <MdLibraryAdd />
      <MdDeleteSweep />
    </div>
  );
}

export default AddItemBar;
