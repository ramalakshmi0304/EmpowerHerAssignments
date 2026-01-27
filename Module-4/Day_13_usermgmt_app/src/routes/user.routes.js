import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

import { validateCreateUser } from "../validations/user.validation.js";

const router = express.Router();

router.post("/", validateCreateUser, createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
