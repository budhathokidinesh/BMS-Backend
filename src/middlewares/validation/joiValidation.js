import Joi from "joi";
import { responseClient } from "../responseClient.js";

// here no need try catch because it is middleware andd central error handler will manage any error if this produce
export const validateData = (req, res, next) => {
  //create schema or rules
  const schema = Joi.object({
    fName: Joi.string().min(5).max(30).required(),
    lName: Joi.string().min(5).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phone: Joi.number(),
    password: Joi.string().min(6).required(),
  });
  // pass your data, req.body to schema
  const value = schema.validate(req.body);
  console.log(value);

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
