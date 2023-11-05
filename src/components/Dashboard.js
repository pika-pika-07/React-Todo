import React from "react";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Dashboard = () => {
  return (
    <div className="mt-20 flex gap-10 items-center justify-center">
      <Link to={"/todo"}>
        <button className="border border-black rounded-lg shadow-lg p-2 bg-blue-300 hover:bg-green-300">
          Todo Component
        </button>
      </Link>
      <Link to={"/pagination"}>
        <button className="border border-black rounded-lg shadow-lg p-2 bg-blue-300 hover:bg-green-300">
          Pagination Component
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
