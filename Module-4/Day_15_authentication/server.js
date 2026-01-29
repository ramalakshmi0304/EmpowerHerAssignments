import express from "express";
import dotenv from "dotenv";
import { checkDbConnection } from "./dbHealthcheck/db.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3330;

app.use(express.json());

app.use("/users", userRoute);

(async () => {
  try {
    const isDbConnected = await checkDbConnection();

    if (!isDbConnected) {
      console.log("❌ Server not started due to DB failure");
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Startup error:", err.message);
    process.exit(1);
  }
})();
