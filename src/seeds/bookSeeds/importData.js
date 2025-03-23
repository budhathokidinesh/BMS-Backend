// connect your database
import { dbConnect } from "../../config/dbConfig.js";
import { createManyBooks, emptyBooks } from "../../models/book/bookModel.js";
import bookData from "./book-seeds.js";

//model
const importData = async () => {
  try {
    await dbConnect();
    await emptyBooks();
    await createManyBooks(bookData);
    console.log("all books have been imported successfully");
  } catch (error) {
    console.log(error);
  }
};
importData();
