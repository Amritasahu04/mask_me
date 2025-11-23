import express from "express";
import cors from "cors";
import aliasRoutes from "./routes/aliasRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/alias", aliasRoutes);

export default app;
