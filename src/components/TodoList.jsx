import EditTodoForm from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({
  tasks,
  deleteTodo,
  editTodo,
  updateTask,
  completeTodo,
}) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) =>
        task.isEditing ? (
          <EditTodoForm key={index} task={task} updateTask={updateTask} />
        ) : (
          <li
            key={index}
            className={`todo-item ${
              task.completed ? "completed" : "incompleted"
            }`}
          >
            <p
              className="todo-item-title"
              onClick={() => completeTodo(task.id)}
            >
              {task.todo}
            </p>
            <div className="btn-wrapper">
              <button
                className="todo-btn-interface"
                onClick={() => editTodo(task.id)}
              >
                <FontAwesomeIcon icon={faPencil} className="fa-edit" />
              </button>
              <button
                className="todo-btn-interface"
                onClick={() => deleteTodo(task.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="fa-trash" />
              </button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default TodoList;
