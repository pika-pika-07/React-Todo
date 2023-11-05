import { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodos = (id, content) => {
    setTodos((todos) => {
      return [...todos, { id, content, completed: false }];
    });
  };

  const deleteTodo = (id) => {
    const indexToBeDeleted = (todos.findIndex = todos.findIndex(
      (todo) => todo.id === id
    ));
    let copy = [...todos];
    copy.splice(indexToBeDeleted, 1);
    setTodos(copy);
  };

  const toggleComplete = (id, value) => {
    const indexToBeCompleted = (todos.findIndex = todos.findIndex(
      (todo) => todo.id === id
    ));
    let copy = [...todos];
    copy[indexToBeCompleted].completed = value;
    setTodos(copy);
  };
  return (
    <TodosContext.Provider
      value={{ todos, createTodos, deleteTodo, toggleComplete }}
    >
      {children}
    </TodosContext.Provider>
  );
};
