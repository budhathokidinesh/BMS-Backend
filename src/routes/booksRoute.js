import express from "express";
import { insertNewBook } from "../controllers/booksControllers.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "TO DO" });
});
//inserting new book
router.post("/", insertNewBook);
export default router;
