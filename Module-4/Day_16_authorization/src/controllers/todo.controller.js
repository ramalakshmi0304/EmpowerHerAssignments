import { supabase } from "../config/supabase.js";

/**
 * POST /todos
 */
export const createTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId; // from JWT

  const { data, error } = await supabase
    .from("todos1")
    .insert([{ title, user_id: userId }]) 
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json(data);
};

/**
 * GET /todos
 */
export const getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from("todos1")
    .select("*")
    .eq("user_id", userId); 

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};

/**
 * PUT /todos/:id
 */
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos1")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.user_id !== userId) { 
    return res.status(403).json({ message: "Forbidden" });
  }

  const { data, error } = await supabase
    .from("todos1")
    .update(req.body)
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};

/**
 * DELETE /todos/:id
 */
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos1")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.user_id !== userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await supabase.from("todos1").delete().eq("id", id);
  res.status(204).send();
};
