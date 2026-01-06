import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoItem from "../components/TodoItem";
import TodoModal from "../components/TodoModal";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Todos = () => {
  const { todos, addTodo, updateTodo, removeTodo, loading } = useTodos();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleCreate = async () => {
    if (!newTodoTitle.trim()) return;
    await addTodo(newTodoTitle);
    setNewTodoTitle("");
  };

  const handleUpdate = async (updates) => {
    if (!selectedTodo) return;
    await updateTodo(selectedTodo.id, updates);
    setModalOpen(false);
  };

  const handleDelete = async (todoId) => {
    if (!todoId) return;
    if (selectedTodo?.id === todoId) setSelectedTodo(null);
    await removeTodo(todoId);
  };

  const handleToggle = async (todo) => {
    if (!todo) return;
    await updateTodo(todo.id, { completed: !todo.completed });
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar todos={todos} selectTodo={setSelectedTodo} selectedTodo={selectedTodo} />

        <main className="flex-1 p-6">
          {/* Add new Todo */}
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="New Todo"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <Button onClick={handleCreate}>Add</Button>
          </div>

          {/* Selected Todo Details */}
          {selectedTodo ? (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">{selectedTodo.title}</h2>
              <div className="flex gap-2 mb-2">
                <Button onClick={() => setModalOpen(true)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(selectedTodo.id)}>
                  Delete
                </Button>
                <Button onClick={() => handleToggle(selectedTodo)}>
                  {selectedTodo.completed ? "Mark Pending" : "Mark Completed"}
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">{loading ? "Loading todos..." : "Select a todo to view details"}</p>
          )}

          {/* Todo List */}
          <div className="mt-4 grid gap-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onEdit={(todo) => {
                  setSelectedTodo(todo);
                  setModalOpen(true);
                }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>

      {selectedTodo && (
        <TodoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          todo={selectedTodo}
          onSave={handleUpdate}
        />
      )}

      <Footer />
    </div>
  );
};

export default Todos;
