import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

// GET ALL TODOS
export const fetchTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET SINGLE TODO
export const fetchTodo = (req, res) => {
  try {
    const todo = getTodoById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE TODO
export const createTodo = (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false
    };

    addTodo(newTodo);

    res.status(201).json({
      message: "Todo created",
      todo: newTodo
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// UPDATE TODO
export const editTodo = (req, res) => {
  try {
    const updated = updateTodo(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE TODO
export const removeTodo = (req, res) => {
  try {
    const deleted = deleteTodo(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
