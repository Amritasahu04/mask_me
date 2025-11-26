import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import aliasRoutes from "./routes/aliasRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import "./cron/expiryCleanup.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(rateLimiter);

app.get("/api/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const mongoState = states[mongoose.connection.readyState] || "unknown";

  res.json({
    status: "ok",
    uptime: process.uptime(),
    mongo: mongoState,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/alias", aliasRoutes);
app.use("/api/otp", otpRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


