import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js";
import checkDatabaseConnection from "./dbHealthCheck.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/users1", userRoutes);
app.use("/api/todos", todoRoutes);

// Default route
app.get("/", (req, res) => res.send("User-Todo API running"));
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const isDbConnected = await checkDatabaseConnection();

    if (!isDbConnected) {
      console.error("Server not started due to DB connection failure");
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Startup error:", err.message);
    process.exit(1);
  }
})();


