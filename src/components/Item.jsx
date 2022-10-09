import React, { useContext } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDelete,
  MdOutlineModeEdit,
  MdCheck,
  MdClose,
} from "react-icons/Md";
import { Context } from "../Context";

function Item(props) {
  const { note, index } = props;
  const {
    isEditMode,
    isChecked,
    checkedNote,
    editNote,
    saveEditNote,
    unsaveEditNote,
  } = useContext(Context);
  return (
    <div className="flex items-center justify-center lg:mx-72 md:mx-36 pb-4 text-xl">
      <div className="w-2/12 flex justify-center">
        <MdCheckBox></MdCheckBox>
      </div>
      <div className="w-8/12">{note}</div>
      {!isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdOutlineModeEdit />
          <MdDelete />
        </div>
      )}
      {isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdCheck />
          <MdClose />
        </div>
      )}
    </div>
  );
}

export default Item;
