import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    toggleTodo: (state, action) => {
      state = state.map((item) => {
        item.id === action.payload ? (item.completed = !item.completed) : "";
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
