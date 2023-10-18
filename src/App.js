import { useRef, useState } from "react";
import { nanoid } from "nanoid";

import { TodoContext } from "../components/todoContext";

import Todos from "../components/Todos";
import TodoForm from "../components/TodoForm";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  function addTodo(title) {
    console.assert(editing === "new", `${editing} should be new`);
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title,
        completed: false
      }
    ]);
    setEditing(false);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
    setEditing(false);
  }

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          todos,
          editing,
          setEditing,
          addTodo,
          deleteTodo,
          updateTodo
        }}
      >
        <h1>Task management app</h1>
        {editing ? (
          <TodoForm />
        ) : (
          <>
            <Todos />
            <button onClick={() => setEditing("new")}>Add Task</button>
          </>
        )}
      </TodoContext.Provider>
    </div>
  );
}
