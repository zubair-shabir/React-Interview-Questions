import React from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

const Todo = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h3 className="text-4xl mb-10 font-extrabold">Todo App</h3>
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
