import React from "react";
import { Button } from "@/components/ui/button";

const TodoItem = ({ todo, onToggle, onEdit, onDelete, showActions = true }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded shadow-sm hover:bg-gray-50">
      {/* Todo title */}
      <span
        className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}
      >
        {todo.title}
      </span>

      {/* Actions - only show if showActions is true */}
      {showActions && (
        <div className="flex gap-2">
          <Button size="sm" onClick={() => onEdit(todo)}>
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
          <Button size="sm" onClick={() => onToggle(todo)}>
            {todo.completed ? "Undo" : "Done"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
