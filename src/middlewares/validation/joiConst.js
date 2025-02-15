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
