import React, { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(
      addTodo({
        id: uuidv4(),
        text: text.trim(),
        completed: false,
      })
    );
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-start"
          placeholder="Enter a new task"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-primary rounded-end" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
