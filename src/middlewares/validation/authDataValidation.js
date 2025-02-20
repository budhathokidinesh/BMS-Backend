import Joi from "joi";
import { validateData } from "./joiValidation.js";
import {
  EMAILREQ,
  FNAMEREQ,
  LNAMEREQ,
  OTP,
  PASSWORDREQ,
  PHONE,
  SESSIONIDREQ,
  TREQ,
} from "./joiConst.js";

//this is for the new user validatiom
export const newUserDataValidation = (req, res, next) => {
  const obj = {
    fName: FNAMEREQ,
    lName: LNAMEREQ,
    email: EMAILREQ,
    phone: PHONE,
    password: PASSWORDREQ,
  };
  validateData({ req, res, next, obj });
};

//this is for the activation validation
export const userActivationDataValidation = (req, res, next) => {
  const obj = {
    sessionId: SESSIONIDREQ,
    t: TREQ,
  };
  validateData({ req, res, next, obj });
};

//this is for login data validation
export const loginDataValidation = (req, res, next) => {
  const obj = {
    email: EMAILREQ,
    password: PASSWORDREQ,
  };
  validateData({ req, res, next, obj });
};
//this is for reset password validation
export const newPasswordResetValidation = (req, res, next) => {
  const obj = {
    email: EMAILREQ,
    password: PASSWORDREQ,
    otp: OTP,
  };
  validateData({ req, res, next, obj });
};
