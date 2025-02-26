import express from "express";
import {
  newBookDataValidation,
  updateBookDataValidation,
} from "../middlewares/validation/bookDataValidation.js";
import {
  deleteBookController,
  getAllBooksController,
  getAllPublicBooksController,
  insertNewBook,
  updateBookController,
} from "../controllers/booksControllers.js";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/authMiddleware.js";
import { upload } from "../utils/multer.js";
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
  upload.single("image"),
  // upload.array("image", 2),
  newBookDataValidation,
  insertNewBook
);

//Update the book
router.put(
  "/",
  userAuthMiddleware,
  adminAuthMiddleware,
  updateBookDataValidation,
  updateBookController
);
//this is for deleting the book
router.delete(
  "/:_id",
  userAuthMiddleware,
  adminAuthMiddleware,

  deleteBookController
);
export default router;
