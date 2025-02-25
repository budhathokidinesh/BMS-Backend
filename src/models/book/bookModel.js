import bookSchema from "./bookSchema.js";

//insert new book
export const createNewBook = (bookObj) => {
  return bookSchema(bookObj).save();
};
//get all books for public
export const getAllPublicBooks = () => {
  return bookSchema.find({ status: "active" });
};
//this is for admin only
export const getAllBooks = (filter) => {
  return bookSchema.find(filter);
};

//this is for updating the book
export const updateBook = ({ _id, ...rest }) => {
  return bookSchema.findByIdAndUpdate(_id, rest);
};

//this is for deleting the book
export const deleteBook = (_id) => {
  return bookSchema.findByIdAndDelete(_id);
};
