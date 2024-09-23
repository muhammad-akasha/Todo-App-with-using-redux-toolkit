import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todo: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    edit: (state, action) => {
      state.todo[action.payload.index].title = action.payload.editVal;
    },
    deletingTodo: (state, action) => {
      state.todo.splice(action.payload.index, 1);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deletingTodo, edit } = todoSlice.actions;
