import { useState } from "react";

const EditTodoForm = ({ task, updateTask }) => {
  const [value, setValue] = useState(task.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask(value, task.id);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-edit-form">
      <input
        type="text"
        value={value}
        placeholder={value}
        autoComplete="false"
        className="todo-edit-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="todo-edit-btn">
        Edit
      </button>
    </form>
  );
};

export default EditTodoForm;
