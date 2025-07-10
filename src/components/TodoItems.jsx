import React from "react";

function TodoItems({ todo, checkedTodo, removeTodo }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 rounded px-3 py-2">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => checkedTodo(todo.id)}
          className="h-5 w-5 text-indigo-500 focus:ring-indigo-400"
        />
        <span
          className={`text-gray-800 ${
            todo.checked ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </label>
      <button onClick={() => removeTodo(todo.id)}>삭제</button>
    </li>
  );
}
export default TodoItems;
