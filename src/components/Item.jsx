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
  const { note, id } = props;
  const { data, isEditMode, isChecked } = note;
  const {
    checkedNote,
    editNote,
    saveEditNote,
    unSaveEditNote,
    handleInputChange,
    deleteSingleNote,
  } = useContext(Context);
  return (
    <div className="flex items-center justify-center lg:mx-72 md:mx-36 pb-4 text-xl">
      <div
        className="w-2/12 flex justify-center"
        onClick={() => checkedNote(id)}
      >
        {isChecked && <MdCheckBox />}
        {!isChecked && <MdCheckBoxOutlineBlank />}
      </div>
      <div className="w-8/12">
        {!isEditMode && <div>{data}</div>}
        {isEditMode && (
          <div>
            <input
              className="bg-transparent focus:outline-none"
              value={data}
              onChange={(event) => handleInputChange(event, id)}
            />
          </div>
        )}
      </div>
      {!isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdOutlineModeEdit onClick={() => editNote(id)} />
          <MdDelete onClick={() => deleteSingleNote(id)} />
        </div>
      )}
      {isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdCheck onClick={() => saveEditNote(id)} />
          <MdClose onClick={() => unSaveEditNote(id)} />
        </div>
      )}
    </div>
  );
}

export default Item;
