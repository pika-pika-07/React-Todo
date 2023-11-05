import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosProvider";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
