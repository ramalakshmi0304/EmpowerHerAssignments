import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import checkDatabaseConnection from "./dbHealthCheck.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);

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