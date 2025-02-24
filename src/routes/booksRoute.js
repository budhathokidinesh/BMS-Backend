import express from "express";
import { newBookDataValidation } from "../middlewares/validation/bookDataValidation.js";
import {
  getAllBooksController,
  getAllPublicBooksController,
  insertNewBook,
} from "../controllers/booksControllers.js";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/authMiddleware.js";
const router = express.Router();
//this is public API access
router.get("/", getAllPublicBooksController);
//this is for admin access
router.get(
  "/admin",
  userAuthMiddleware,
  adminAuthMiddleware,
  getAllBooksController
);
//Inserting new book
router.post(
  "/",
  userAuthMiddleware,
  adminAuthMiddleware,
  newBookDataValidation,
  insertNewBook
);

//Update the book
router.put(
  "/",
  userAuthMiddleware,
  adminAuthMiddleware,
  newBookDataValidation,
  insertNewBook
);
export default router;
