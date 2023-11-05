import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full mt-20 p-10 ">
      <div className="border border-black h-full w-4/12 shadow-lg p-4  bg-gray-300 bg-opacity-80  rounded-lg">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
