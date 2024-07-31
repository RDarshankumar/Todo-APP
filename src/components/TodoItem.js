
import React from "react";

const TodoItem = ({ task, removeTask }) => {
  return (
    <li className="todo-item">
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)} className="delete-button">
        X
      </button>
    </li>
  );
};

export default TodoItem;
