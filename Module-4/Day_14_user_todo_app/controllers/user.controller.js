import supabase from "../config/supabase.js";
import { validateSignup } from "../validations/user.validation.js";

export const signupUser = async (req, res) => {
  try {
    // 1️⃣ Validate request body
    const errorMsg = validateSignup(req.body);
    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }

    const { name, email, password } = req.body;

    // 2️⃣ Check duplicate email
    const { data: existingUser, error: checkError } = await supabase
      .from("users1")
      .select("id")
      .eq("email", email)
      .maybeSingle(); // safer than single()

    if (checkError) {
      return res.status(500).json({ error: checkError.message });
    }

    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // 3️⃣ Create user
    const { data, error } = await supabase
      .from("users1")
      .insert([{ name, email, password }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // 4️⃣ Success response
    res.status(201).json({
      message: "User created",
      user: data
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const { error } = await supabase
      .from("users1")
      .delete()
      .eq("id", userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({
      message: "User and all related todos deleted"
    });

  } catch (err) {
    console.error("Delete user error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
