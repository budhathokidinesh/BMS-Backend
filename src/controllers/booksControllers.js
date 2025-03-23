import {
  createNewBook,
  deleteBook,
  getAllBooks,
  getAllPublicBooks,
  updateBook,
} from "../models/book/bookModel.js";
import { responseClient } from "../middlewares/responseClient.js";
import slugify from "slugify";
import { deleteFile } from "../utils/fileUtil.js";

//this is for inserting new book
export const insertNewBook = async (req, res, next) => {
  try {
    const { fName, _id } = req.userInfo;

    const { path } = req.file;
    console.log(path);

    const obj = {
      ...req.body,
      slug: slugify(req.body.title, { lower: true }),
      addedBy: {
        name: fName,
        adminId: _id,
      },
      lastUpdatedBy: {
        name: fName,
        adminId: _id,
      },
      imgUrl: path,
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
          statusCode: 401,
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key")) {
      return responseClient({
        req,
        res,
        message:
          "Duplicate data is not allowed: " + JSON.stringify(error.keyValue),
        statusCode: 400,
      });
    }
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

//this is for updating book
export const updateBookController = async (req, res, next) => {
  try {
    const { fName, _id } = req.userInfo;

    req.body.imageList = req.body.imageList.split(",");
    //remove imgToDeleteList from imageList
    if (req.body?.imgToDelete?.length) {
      req.body.imageList = req.body.imageList.filter(
        (img) => !req.body.imgToDelete.includes(img)
      );
      req.body.imgToDelete.map((img) => deleteFile(img));
    }

    if (Array.isArray(req.files)) {
      req.body.imageList = [
        ...req.body.imageList,
        ...req.files.map((obj) => obj.path),
      ];
    }
    const obj = {
      ...req.body,
      lastUpdatedBy: {
        name: fName,
        adminId: _id,
      },
    };
    const book = await updateBook(obj);
    book?._id
      ? responseClient({
          req,
          res,
          message: "The book has been updated successfully.",
        })
      : responseClient({
          req,
          res,
          message:
            "Unable to add new book in database, try again later. Thanks",
          statusCode: 400,
        });
  } catch (error) {
    next(error);
  }
};

//this controller is for deleting the book
export const deleteBookController = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const book = await deleteBook(_id);
    book.imageList.map((img) => deleteFile(img));
    book?._id
      ? responseClient({
          req,
          res,
          message: "The book has been deleted succesfully.",
        })
      : responseClient({
          req,
          res,
          message:
            "Unable to delete book from database, try again later. Thanks",
          statusCode: 400,
        });
  } catch (error) {
    next(error);
  }
};
