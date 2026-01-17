import express from "express";
import { readFileSync, writeFileSync } from "fs";
import rateLimiterMiddleware from "../middleware/rateLimiter.middleware.js";
import validateTodoMiddleware from "../middleware/validateTodo.middleware.js";

const router = express.Router();

// Helpers
const readData = () => {
  const data = readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  writeFileSync("db.json", JSON.stringify(data, null, 2));
};

// Create Todo
router.post("/add", validateTodoMiddleware, (req, res) => {
  const data = readData();

  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title,
  };

  data.todos.push(newTodo);
  writeData(data);

  res.status(201).json(newTodo);
});

// Get All Todos (Rate Limited)
router.get("/", rateLimiterMiddleware, (req, res) => {
  const data = readData();
  res.status(200).json(data.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const data = readData();
  const todo = data.todos.find(t => t.id === req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.status(200).json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const data = readData();
  const index = data.todos.findIndex(t => t.id === req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  data.todos[index] = {
    ...data.todos[index],
    ...req.body,
  };

  writeData(data);
  res.status(200).json(data.todos[index]);
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const data = readData();
  const filteredTodos = data.todos.filter(t => t.id !== req.params.todoId);

  if (filteredTodos.length === data.todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  data.todos = filteredTodos;
  writeData(data);

  res.status(200).json({ message: "Todo deleted successfully" });
});

export default router;
