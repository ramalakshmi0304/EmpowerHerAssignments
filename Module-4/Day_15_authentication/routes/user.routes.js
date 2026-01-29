import express from "express";
import { signup, getMyProfile } from "../user.controller.js";

const router = express.Router();

/**
 * @route   POST /users/signup
 * @desc    Register a new user
 */
router.post("/signup", signup);

/**
 * @route   GET /users/myprofile?name=Ravi
 * @desc    Get user profile (without password)
 */
router.get("/myprofile", getMyProfile);

export default router;
