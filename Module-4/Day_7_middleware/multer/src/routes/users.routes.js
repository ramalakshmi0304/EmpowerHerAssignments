import express from "express";
import { v4 as uuidv4 } from "uuid";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";
import { addUser } from "../utils/db.utils.js";

const router = express.Router();

router.post("/signup", upload.single("profile"), uniqueEmail, async (req, res) => {
  try {
    const { name, email } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: "Profile image is required" });

    const streamUpload = (buffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: "profilePics" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        stream.end(buffer);
      });

    const result = await streamUpload(file.buffer);

    const newUser = {
      id: uuidv4(),
      name,
      email,
      profilePic: result.secure_url,
    };

    addUser(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
