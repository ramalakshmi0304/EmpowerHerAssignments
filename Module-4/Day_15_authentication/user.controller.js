import supabase from "./config/supabase.js";
import bcrypt from "bcrypt";


export const signup = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // validation
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // check existing user
    const { data: existingUser, error: findError } = await supabase
      .from("useers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (findError) {
      return res.status(500).json({ error: findError.message });
    }

    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    const { error } = await supabase.from("useers").insert({
      name,
      email,
      age,
      location,
      password: hashedPassword
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getMyProfile = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "Name query parameter is required" });
    }

    const { data: useer, error } = await supabase
      .from("useers")
      .select("id, name, email, age, location")
      .eq("name", name)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!useer) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(useer);

  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
