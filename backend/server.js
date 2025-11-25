import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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

app.use("/api/auth", authRoutes);
app.use("/api/alias", aliasRoutes);
app.use("/api/otp", otpRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


