import { useContext } from "react";

import { TodoContext } from "../components/todoContext";

export default function Todo({ todo }) {
  const { deleteTodo, updateTodo, setEditing } = useContext(TodoContext);

  function completeTodo() {
    updateTodo({
      ...todo,
      completed: !todo.completed
    });
  }

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={completeTodo}
        />
        <span>{todo.completed ? <del>{todo.title}</del> : todo.title}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => setEditing(todo.id)}>
          edit
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          remove
        </button>
      </div>
    </div>
  );
}
