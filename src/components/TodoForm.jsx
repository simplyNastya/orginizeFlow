import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      return;
    }
    addTodo(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="task-input" className="todo-form-label">
        What is the task?
      </label>
      <div>
        <input
          type="text"
          id="task-input"
          placeholder="What will be the next?"
          value={value}
          autoComplete="false"
          className="todo-input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="todo-btn">
          Add task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
