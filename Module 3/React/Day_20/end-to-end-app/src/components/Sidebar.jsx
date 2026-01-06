// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ todos, selectedTodo, selectTodo }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="font-bold mb-2">Todos</h2>
      <ul className="flex flex-col gap-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => selectTodo(todo)}
            className={`p-2 rounded cursor-pointer ${
              selectedTodo?.id === todo.id ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
