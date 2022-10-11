import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDelete,
  MdOutlineModeEdit,
  MdCheck,
  MdClose,
  MdIndeterminateCheckBox,
} from "react-icons/Md";
import { Context } from "../Context";

function Item(props) {
  const { note, id } = props;
  const { data, isEditMode, isChecked } = note;
  const { setNotesCombined, globalEditMode } = useContext(Context);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [globalEditMode]);

  return (
    <div className="flex items-center justify-center lg:mx-72 md:mx-36 pb-4 text-xl">
      <div
        className="w-2/12 flex justify-center"
        onClick={!isEditMode ? () => setNotesCombined("checkedNote", id) : null}
      >
        {isEditMode && <MdIndeterminateCheckBox />}
        {!isEditMode && isChecked && <MdCheckBox />}
        {!isEditMode && !isChecked && <MdCheckBoxOutlineBlank />}
      </div>
      <div className="w-8/12">
        {!isEditMode && (
          <div
            className={`${
              isChecked ? "line-through" : "no-underline"
            } select-none`}
          >
            {data}
          </div>
        )}
        {isEditMode && (
          <div>
            <input
              ref={ref}
              className="bg-transparent focus:outline-none w-full placeholder:opacity-75 placeholder:italic"
              placeholder="Make a note here"
              value={data}
              onChange={(event) =>
                setNotesCombined("handleInputChange", id, event.target)
              }
            />
          </div>
        )}
      </div>
      {!isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdOutlineModeEdit
            onClick={
              !globalEditMode ? () => setNotesCombined("editNote", id) : null
            }
          />
          <MdDelete onClick={() => setNotesCombined("deleteSingleNote", id)} />
        </div>
      )}
      {isEditMode && (
        <div className="w-2/12 flex justify-around">
          <MdCheck onClick={() => setNotesCombined("saveEditNote", id)} />
          <MdClose onClick={() => setNotesCombined("unSaveEditNote", id)} />
        </div>
      )}
    </div>
  );
}

export default Item;
