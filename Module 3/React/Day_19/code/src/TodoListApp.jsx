import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const TodoListApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="space-y-4">
      <Card>
        <Input placeholder="Add todo" value={todo} onChange={e => setTodo(e.target.value)} />
        <Button onClick={addTodo}>Add</Button>
      </Card>

      {todos.map((t, i) => (
        <Card key={i} className="p-4 flex items-center space-x-2">
          <Checkbox checked={t.completed} onCheckedChange={() => toggleTodo(i)} />
          <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</span>
        </Card>
      ))}
    </div>
  );
};

export default TodoListApp;
