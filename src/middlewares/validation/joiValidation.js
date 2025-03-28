import Joi from "joi";
import { responseClient } from "../responseClient.js";
import { deleteUploadedFiles } from "../../utils/fileUtil.js";

// here no need try catch because it is middleware andd central error handler will manage any error if this produce
export const validateData = ({ req, res, next, obj }) => {
  //create schema or rules
  const schema = Joi.object(obj);
  // pass your data, req.body to schema
  const value = schema.validate(req.body);

  if (value.error) {
    console.log(req.file, req.files);
    if (req.file || Array.isArray(req.files)) {
      //proceed to deleting the upload file
      deleteUploadedFiles(req);
    }
    return responseClient({
      req,
      res,
      message: value.error.message,
      statusCode: 400,
    });
  }
  next();
  //if pass got next() or response error from here
};
