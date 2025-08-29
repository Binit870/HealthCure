import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // ✅ Ensure .js extension
import aiRoutes from "./routes/aiRoutes.js"; // ✅ Ensure .js extension
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

try {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("❌ Server failed to start:", error.message);
}
