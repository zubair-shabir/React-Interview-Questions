import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../slices/todoSlice";
import { FiDelete } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="m-10 w-full transition-all ">
        {todos &&
          todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-between items-center  text-3xl bg-gray-950 text-white rounded-2xl px-10 py-5 my-5"
              >
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  {todo.completed ? (
                    <ImCheckboxUnchecked />
                  ) : (
                    <ImCheckboxChecked className="text-white" />
                  )}
                </button>
                <span className={todo.completed ? "" : "line-through"}>
                  {todo.text}
                </span>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-700"
                >
                  <MdDelete />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
