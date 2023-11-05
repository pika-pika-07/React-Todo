import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Body = () => {
  return (
    <div className="border border-black-500 flex flex-col justify-center items-center h-full w-full">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Body;
