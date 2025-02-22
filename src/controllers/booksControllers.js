import {
  createNewBook,
  getAllBooks,
  getAllPublicBooks,
} from "../models/book/bookModel.js";
import { responseClient } from "../middlewares/responseClient.js";

//this is for inserting new book
export const insertNewBook = async (req, res, next) => {
  try {
    const { fName, _id } = req.userInfo;
    const obj = {
      ...req.body,
      addedBy: {
        name: fName,
        adminId: _id,
      },
      lastUpdatedBy: {
        name: fName,
        adminId: _id,
      },
    };
    const book = await createNewBook(obj);
    book?._id
      ? responseClient({
          req,
          res,
          message: "The book has been added successfully.",
        })
      : responseClient({
          req,
          res,
          message:
            "Unable to add new book in database, try again later. Thanks",
        });
  } catch (error) {
    next(error);
  }
};

//this is for fetching books for public
export const getAllPublicBooksController = async (req, res, next) => {
  try {
    const payload = await getAllPublicBooks();
    responseClient({
      req,
      res,
      payload,
      message: "The book has been added successfully.",
    });
  } catch (error) {
    next(error);
  }
};
// this is only for admin access
export const getAllBooksController = async (req, res, next) => {
  try {
    const payload = await getAllBooks();
    responseClient({
      req,
      res,
      payload,
      message: "The book has been added successfully.",
    });
  } catch (error) {
    next(error);
  }
};
