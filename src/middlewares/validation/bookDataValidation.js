import {
  _ID_REQ,
  EXPECTEDAVAILABLE,
  ISBN_REQ,
  LONG_STR_REQ,
  SHORT_STR_REQ,
  STATUS_REQ,
  STR_ARRAY,
  YEAR_REQ,
} from "./joiConst.js";
import { validateData } from "./joiValidation.js";

//this validation is for new books
export const newBookDataValidation = (req, res, next) => {
  const obj = {
    title: SHORT_STR_REQ,
    year: YEAR_REQ,
    author: SHORT_STR_REQ,
    expectedAvailable: EXPECTEDAVAILABLE,
    // imgUrl: LONG_STR_REQ,
    isbn: ISBN_REQ,
    genre: SHORT_STR_REQ,
    description: LONG_STR_REQ,
  };
  validateData({ req, res, next, obj });
};
//this is for update book validation
export const updateBookDataValidation = (req, res, next) => {
  console.log(req.body);
  const obj = {
    _id: _ID_REQ,
    status: STATUS_REQ,
    title: SHORT_STR_REQ,
    year: YEAR_REQ,
    author: SHORT_STR_REQ,
    imgUrl: LONG_STR_REQ,
    genre: SHORT_STR_REQ,
    expectedAvailable: EXPECTEDAVAILABLE,
    description: LONG_STR_REQ,
    imageList: LONG_STR_REQ.allow(""),
    imgToDelete: STR_ARRAY,
  };
  validateData({ req, res, next, obj });
};
