import express from "express";
import { signupUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

// User signup
router.post("/signup", signupUser);

// Delete user (cascade delete todos automatically)
router.delete("/delete/:userId", deleteUser);

export default router;
