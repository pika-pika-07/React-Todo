import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosProvider";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useContext(TodosContext);
  return (
    <div
      className={`border border-black flex gap-2 justify-between p-3 m-2 rounded-lg mb-4 ${
        todo.completed ? "bg-green-200" : "bg-blue-200"
      }`}
    >
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            toggleComplete(todo.id, e.target.checked);
          }}
        />
        <span
          className={`${todo.completed ? "line-through" : ""} mx-2 text-md`}
        >
          {todo.content}
        </span>
      </div>
      <div className="border border-black w-2/12 rounded-lg text-md">
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
