import express from "express";
const router = express.Router();
import {
  activateUser,
  insertUser,
  loginUser,
} from "../controllers/authController.js";
import {
  loginDataValidation,
  newUserDataValidation,
  userActivationDataValidation,
} from "../middlewares/validation/authDataValidation.js";

//user signup
router.post("/register", newUserDataValidation, insertUser);
router.post("/activate-user", userActivationDataValidation, activateUser);
router.post("/login", loginDataValidation, loginUser);

export default router;
