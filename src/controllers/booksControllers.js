import { createNewBook } from "../models/book/bookModel.js";
import { responseClient } from "../middlewares/responseClient.js";

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
