import Joi from "joi";
import { responseClient } from "../responseClient.js";

// here no need try catch because it is middleware andd central error handler will manage any error if this produce
export const validateData = ({ req, res, next, obj }) => {
  //create schema or rules
  const schema = Joi.object(obj);
  // pass your data, req.body to schema
  const value = schema.validate(req.body);

  if (value.error) {
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
