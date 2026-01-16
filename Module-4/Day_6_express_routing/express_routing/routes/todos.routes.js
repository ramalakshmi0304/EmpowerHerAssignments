import express from "express";
import { readFileSync, writeFileSync } from "fs";

const router = express.Router();
const DB_PATH = "./db.json";

// 🔹 Helpers
function readData() {
  const data = readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Create Todo
router.post("/add", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const data = readData();

  const newTodo = {
    id: Date.now().toString(),
    title,
    completed
  };

  data.todos.push(newTodo);
  writeData(data);

  res.status(201).json(newTodo);
});

// Get All Todos
router.get("/", (req, res) => {
  const data = readData();
  res.status(200).json(data.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const data = readData();

  const todo = data.todos.find(t => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const { todoId } = req.params;
  const data = readData();

  const index = data.todos.findIndex(t => t.id === todoId);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  data.todos[index] = { ...data.todos[index], ...req.body };
  writeData(data);

  res.status(200).json(data.todos[index]);
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const { todoId } = req.params;
  const data = readData();

  const newTodos = data.todos.filter(t => t.id !== todoId);
  if (newTodos.length === data.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  data.todos = newTodos;
  writeData(data);

  res.status(200).json({ message: "Todo deleted successfully" });
});

export default router;
