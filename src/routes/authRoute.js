import express from "express";
const router = express.Router();
import {
  activateUser,
  generateOTP,
  insertUser,
  loginUser,
  logoutUser,
  resetNewPassword,
} from "../controllers/authController.js";
import {
  loginDataValidation,
  newPasswordResetValidation,
  newUserDataValidation,
  userActivationDataValidation,
} from "../middlewares/validation/authDataValidation.js";
import {
  renewAccessJWTMiddleware,
  userAuthMiddleware,
} from "../middlewares/authMiddleware.js";

//user signup
router.post("/register", newUserDataValidation, insertUser);
router.post("/activate-user", userActivationDataValidation, activateUser);
router.post("/login", loginDataValidation, loginUser);
router.get("/renew-jwt", renewAccessJWTMiddleware);
router.get("/logout", userAuthMiddleware, logoutUser);
router.post("/otp", generateOTP);
router.post("/reset-password", newPasswordResetValidation, resetNewPassword);

export default router;
