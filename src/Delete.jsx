import React from "react";
import { useDispatch } from "react-redux";
import { deletingTodo } from "./redux/reducers/todoSlice";

function Delete({ index }) {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(
      deletingTodo({
        index,
      })
    );
  };
  return (
    <button className="btn btn-error ml-3" onClick={deleteTodo}>
      Delete Todo
    </button>
  );
}

export default Delete;
