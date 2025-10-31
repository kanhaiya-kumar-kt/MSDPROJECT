import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import managerRoutes from "./routes/managerRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // 🆕 Import auth routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Routes
app.use("/api/managers", managerRoutes);
app.use("/api/auth", authRoutes); // 🆕 Add Auth Route

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Manager Contact API is running successfully!");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
