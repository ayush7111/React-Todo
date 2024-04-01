import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import TodoPng from "./assets/TodoPng.png";
function App() {
  const todos = useSelector((state) => state.todos.todoList);
  return (
    <div className="app-container rounded">
      <div className="container mt-5">
        <div className="text-center">
          <img src={TodoPng} className="image-size mt-1" alt="Todo Png" />
        </div>
        <TodoForm />
        <ul
          className="list-group"
          style={{ maxHeight: "50vh", overflowY: "auto" }}
        >
          {todos.length > 0 &&
            todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
