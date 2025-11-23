import express from "express";
import { generateAlias } from "../controllers/aliasController.js";

const router = express.Router();

// GET /api/alias/generate
router.get("/generate", generateAlias);

export default router;
