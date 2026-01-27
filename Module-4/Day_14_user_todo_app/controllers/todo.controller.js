import supabase from "../config/supabase.js";
import { validateTodo } from "../validations/todo.validation.js";

export const addTodo = async (req, res) => {
  const errorMsg = validateTodo(req.body);
  if (errorMsg) return res.status(400).json({ error: errorMsg });

  const { title, description, userId } = req.body;

  // Check user exists
  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single();

  if (!user) return res.status(404).json({ error: "User not found" });

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, description, user_id: userId }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ todo: data[0] });
};

export const getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single();

  if (!user) return res.status(404).json({ error: "User not found" });

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ todos: data });
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", todoId)
    .single();

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  const { data, error } = await supabase
    .from("todos")
    .update(req.body)
    .eq("id", todoId)
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.json({ updatedTodo: data[0] });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Todo deleted" });
};
