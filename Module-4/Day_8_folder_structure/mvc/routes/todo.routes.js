import express from "express"
import {
  fetchTodos,
  fetchTodo,
  createTodo,
  editTodo,
  removeTodo
} from "../controllers/todo.controller.js";


const router = express.Router();

router.get("/", fetchTodos);
router.get("/:id", fetchTodo);
router.post("/add", createTodo);
router.put("/update/:id", editTodo);
router.delete("/delete/:id", removeTodo);

export default router;