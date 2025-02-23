import Joi from "joi";
//this is for the new iser
export const FNAME = Joi.string().min(5).max(30);
export const FNAMEREQ = FNAME.required();

export const LNAME = Joi.string().min(5).max(30);
export const LNAMEREQ = LNAME.required();

export const EMAIL = Joi.string().email({ minDomainSegments: 2 });
export const EMAILREQ = EMAIL.required();

export const PHONE = Joi.number();

export const PASSWORD = Joi.string().min(6);
export const PASSWORDREQ = PASSWORD.required();

//this is for the new user activation
export const SESSIONID = Joi.string().min(10).max(30);
export const SESSIONIDREQ = SESSIONID.required();

export const T = Joi.string().min(10).max(40);
export const TREQ = T.required();

//this is for const
export const OTP = Joi.number().min(999).max(9999).required();

//this is for book validation(this is generalize validation)
export const SHORT_STR = Joi.string().min(1).max(100);
export const SHORT_STR_REQ = SHORT_STR.required();

export const LONG_STR = Joi.string().min(1).max(5000);
export const LONG_STR_REQ = LONG_STR.required();

export const YEAR = Joi.number()
  .integer()
  .min(1900)
  .max(new Date().getFullYear());
export const YEAR_REQ = YEAR.required();
// export const ISBN = Joi.number().integer().min(1000000000).max(10000000000000);
export const ISBN = Joi.string()
  .pattern(/^\d{10}$|^\d{13}$/)
  .message({
    "string.pattern.base": "ISBN should be either 10 or 13 numbers",
  });
export const ISBN_REQ = ISBN.required();
