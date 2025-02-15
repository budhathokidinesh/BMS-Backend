import express from "express";
import { activateUser, insertUser } from "../controllers/authController.js";
import { validateData } from "../middlewares/validation/joiValidation.js";

const router = express.Router();

//user signup
router.post("/register", validateData, insertUser);
router.post("/activate-user", activateUser);
export default router;
