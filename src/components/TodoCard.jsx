import React from "react";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <div
          className={`flex-grow-1 mx-3 ${
            todo.completed ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.text}
        </div>
        <button
          className="btn btn-danger btn-sm ms-3"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
