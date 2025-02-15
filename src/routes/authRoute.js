import express from "express";
import { activateUser, insertUser } from "../controllers/authController.js";
import {
  newUserDataValidation,
  userActivationDataValidation,
} from "../middlewares/validation/authDataValidation.js";

const router = express.Router();

//user signup
router.post("/register", newUserDataValidation, insertUser);
router.post("/activate-user", userActivationDataValidation, activateUser);
export default router;
