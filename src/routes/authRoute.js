import express from "express";
const router = express.Router();
import {
  activateUser,
  insertUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";
import {
  loginDataValidation,
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

export default router;
