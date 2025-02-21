import express from "express";
import { newBookDataValidation } from "../middlewares/validation/bookDataValidation.js";
import { insertNewBook } from "../controllers/booksControllers.js";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "TO DO" });
});
//inserting new book
router.post(
  "/",
  userAuthMiddleware,
  adminAuthMiddleware,
  newBookDataValidation,
  insertNewBook
);
export default router;
