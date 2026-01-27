import supabase from "../config/supabase.js";
import { validateTodo } from "../validations/todo.validation.js";

export const addTodo = async (req, res) => {
  try {
    // 1️⃣ Validate request body
    const errorMsg = validateTodo(req.body);
    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }

    const { title, description, userId } = req.body;

    // 2️⃣ Check if user exists
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

    if (userError) {
      return res.status(500).json({ error: userError.message });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 3️⃣ Insert todo
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title, description, user_id: userId }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ todo: data });

  } catch (err) {
    console.error("Add todo error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserTodos = async (req, res) => {
  try {
    const { userId } = req.params;

    // 1️⃣ Check if user exists
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

    if (userError) {
      return res.status(500).json({ error: userError.message });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 2️⃣ Fetch todos
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ todos: data });

  } catch (err) {
    console.error("Get user todos error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    // 1️⃣ Check if todo exists
    const { data: todo, error: findError } = await supabase
      .from("todos")
      .select("*")
      .eq("id", todoId)
      .maybeSingle();

    if (findError) {
      return res.status(500).json({ error: findError.message });
    }

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // 2️⃣ Update todo
    const { data, error } = await supabase
      .from("todos")
      .update(req.body)
      .eq("id", todoId)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ updatedTodo: data });

  } catch (err) {
    console.error("Update todo error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", todoId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Todo deleted" });

  } catch (err) {
    console.error("Delete todo error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
