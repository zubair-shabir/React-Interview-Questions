import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slices/todoSlice";

const InputTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
        className="text-black p-2 min-w-5"
        value={text}
      />
      <button
        className="mx-5 px-10 py-2 rounded-md text-gray-300 bg-gray-900"
        disabled={!text}
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};

export default InputTodo;
