import React, { useContext, useRef } from "react";
import { TodosContext } from "../contexts/TodosProvider";
const AddTodo = () => {
  const { createTodos } = useContext(TodosContext);
  const inputRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    createTodos(Date.now(), inputRef.current.value);
    inputRef.current.value = null;
  };
  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          className="outline-none border border-black p-1 rounded-lg w-10/12"
          placeholder="Add Task"
        />
        <button
          onClick={handleChange}
          className="border border-black w-1/12 rounded-lg ml-4 bg-red color-green"
        >
          {" "}
          Add{" "}
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
