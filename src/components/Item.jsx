import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/Md";

function Item() {
  return (
    <div className="flex items-center justify-center lg:mx-72 pb-4 text-xl">
      <div className="w-2/12 flex justify-center">
        <MdCheckBox></MdCheckBox>
      </div>
      <div className="w-6/12">This is my first task</div>
      <div className="w-2/12 flex justify-center">
        <MdDelete />
      </div>
    </div>
  );
}

export default Item;
