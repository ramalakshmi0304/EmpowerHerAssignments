import express from "express";
import { readFileSync, writeFileSync } from "fs";

const router = express.Router();
const DB_PATH = "./db.json";

// 🔹 Helper functions (SYNC)
function readData() {
  const data = readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Create User
router.post("/add", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const data = readData();

  const newUser = {
    id: Date.now().toString(),
    name,
    email
  };

  data.users.push(newUser);
  writeData(data);

  res.status(201).json(newUser);
});

// Get All Users
router.get("/", (req, res) => {
  const data = readData();
  res.status(200).json(data.users);
});

// Get Single User
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const data = readData();

  const user = data.users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// Update User
router.put("/update/:userId", (req, res) => {
  const { userId } = req.params;
  const data = readData();

  const index = data.users.findIndex(u => u.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  data.users[index] = { ...data.users[index], ...req.body };
  writeData(data);

  res.status(200).json(data.users[index]);
});

// Delete User
router.delete("/delete/:userId", (req, res) => {
  const { userId } = req.params;
  const data = readData();

  const newUsers = data.users.filter(u => u.id !== userId);
  if (newUsers.length === data.users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  data.users = newUsers;
  writeData(data);

  res.status(200).json({ message: "User deleted successfully" });
});

export default router;
