import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosProvider";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useContext(TodosContext);
  return (
    <div className="border border-black flex gap-2 justify-between p-2 m-2">
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            toggleComplete(todo.id, e.target.checked);
          }}
        />
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.content}
        </span>
      </div>
      <div>
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
