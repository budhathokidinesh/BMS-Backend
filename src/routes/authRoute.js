import express from "express";
import { activateUser, insertUser } from "../controllers/authController.js";

const router = express.Router();

//user signup
router.post("/register", insertUser);
router.post("/activate-user", activateUser);
export default router;
