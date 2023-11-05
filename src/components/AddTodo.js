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
          className="outline-none border border-red-700"
        />
        <button onClick={handleChange}> Add </button>
      </form>
    </div>
  );
};

export default AddTodo;
