import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoFormSection = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: Date.now(), todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (value, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, todo: value, isEditing: !todo.isEditing }
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <main className="todoPage">
      <section className="section-form">
        <div className="form-container">
          <TodoForm addTodo={addTodo} />
          {todos.length ? (
            <TodoList
              tasks={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              updateTask={updateTask}
              completeTodo={completeTodo}
            />
          ) : (
            <p className="todo-notask">No tasks to do!</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default TodoFormSection;
