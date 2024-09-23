import React, { useState } from "react";
import { edit } from "./redux/reducers/todoSlice";
import { useDispatch } from "react-redux";

function Edit({ setEditMode, index, value }) {
  const dispatch = useDispatch();
  const [editVal, setEditVal] = useState(value);
  const editTodo = () => {
    dispatch(
      edit({
        index,
        editVal,
      })
    );
    setEditMode(false);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        value={editVal}
        type="text"
        className="p-2"
        onChange={(e) => setEditVal(e.target.value)}
      />
      <button className="btn btn-accent  ml-0 sm:ml-3" onClick={editTodo}>
        update
      </button>
    </div>
  );
}

export default Edit;
