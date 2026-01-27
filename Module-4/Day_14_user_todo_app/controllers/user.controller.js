import supabase from "../config/supabase.js";
import { validateSignup } from "../validations/user.validation.js";

export const signupUser = async (req, res) => {
  const errorMsg = validateSignup(req.body);
  if (errorMsg) return res.status(400).json({ error: errorMsg });

  const { name, email, password } = req.body;

  // Check duplicate email
  const { data: existingUser } = await supabase
    .from("users1")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const { data, error } = await supabase
    .from("users1")
    .insert([{ name, email, password }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: "User created", user: data[0] });
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const { error } = await supabase
    .from("users1")
    .delete()
    .eq("id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "User and all related todos deleted" });
};
