import { useContext, useState } from "react";

import { TodoContext } from "../components/todoContext";

// Form used both for creating new todos or updating
// existing ones
export default function TodoForm() {
  const { todos, addTodo, editing, setEditing, updateTodo } = useContext(
    TodoContext
  );

  // value of editing will be either "new" or some id
  let todo = null;
  if (editing && editing !== "new") {
    todo = todos.find((t) => t.id === editing);
  }

  const [title, setTitle] = useState(todo?.title || "");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    if (editing === "new") {
      addTodo(title);
    } else if (todo) {
      updateTodo({
        ...todo,
        title
      });
    } else {
      throw Error(`Todo with id: ${editing} does not exist`);
    }
    setEditing("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add new task..."
        onChange={handleChange}
        value={title}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
