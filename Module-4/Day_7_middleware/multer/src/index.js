
import { configDotenv } from "dotenv";
import express from "express";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
