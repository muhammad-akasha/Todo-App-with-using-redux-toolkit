import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/reducers/todoSlice";
import Delete from "./Delete";
import Edit from "./Edit";

function App() {
  const [editMode, setEditMode] = useState(false);
  const todoVal = useRef();
  const selector = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  const addingTodos = () => {
    const newTodo = todoVal.current.value;
    if (!newTodo) {
      return alert("Please Enter Todo");
    }
    dispatch(
      addTodo({
        title: todoVal.current.value,
      })
    );
    todoVal.current.value = "";
  };

  return (
    <div className="w-[500px] p-5 mx-auto my-5 border-2 drop-shadow-md">
      <h1 className="text-[33px] font-semibold mb-4 text-center">Todo App</h1>
      <div className="flex justify-center gap-4">
        <input
          className="input input-bordered input-primary w-full max-w-xs"
          type="text"
          ref={todoVal}
        />
        <button className="btn btn-success" onClick={addingTodos}>
          add todo
        </button>
      </div>
      <div>
        {selector
          ? selector.map((item, index) => (
              <div
                key={item.id}
                className="border rounded-sm p-4 shadow-lg mt-4"
              >
                {editMode !== index ? (
                  <>
                    <h2 className="mb-3 border rounded-md p-3">{item.title}</h2>
                    <button
                      className="btn btn-primary"
                      onClick={() => setEditMode(index)}
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <Edit
                    setEditMode={setEditMode}
                    index={index}
                    value={item.title}
                  />
                )}
                <Delete index={index} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
