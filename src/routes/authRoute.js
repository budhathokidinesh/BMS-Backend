import express from "express";
import { insertUser } from "../controllers/authController.js";

const router = express.Router();

//user signup
router.post("/register", insertUser);
export default router;
