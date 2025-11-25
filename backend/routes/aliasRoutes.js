import express from "express";
import { createAlias, getAliases } from "../controllers/aliasController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createAlias);
router.get("/", authMiddleware, getAliases);

export default router;


