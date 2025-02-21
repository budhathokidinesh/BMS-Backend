import { decode } from "jsonwebtoken";
import { getSession } from "../models/session/SessionModel.js";
import { getOneUser, getUserByEmail } from "../models/user/UserModel.js";
import {
  createAccessJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
} from "../utils/jwt.js";
import { responseClient } from "./responseClient.js";

export const userAuthMiddleware = async (req, res, next) => {
  //get accessJWT
  const { authorization } = req.headers;

  let message = "Unauthorized";
  if (authorization) {
    const token = authorization.split(" ")[1];

    //check if valid
    const decoded = verifyAccessJWT(token);
    console.log(decoded);
    if (decoded.email) {
      //check if exist in session table
      const tokenSession = await getSession({ token });
      if (tokenSession?._id) {
        //get user by email
        const user = await getUserByEmail(decoded.email);
        if (user?._id && user.status === "active") {
          //return the user
          req.userInfo = user;
          return next();
        }
      }
    }
    message = decoded === "jwt expired" ? decoded : "Unauthorized";
  }
  //   message ="jwt expired" ? decoded : "Unauthorized";
  responseClient({ req, res, message, statusCode: 401 });
};

//check the user role is admin
export const adminAuthMiddleware = (req, res, next) => {
  try {
    req.userInfo.role === "admin"
      ? next()
      : responseClient({
          req,
          res,
          message: "You do not have acess to this resources",
          statusCode: 401,
        });
  } catch (error) {
    next(error);
  }
};
export const renewAccessJWTMiddleware = async (req, res, next) => {
  //get accessJWT
  const { authorization } = req.headers;

  let message = "Unauthorized";
  if (authorization) {
    const token = authorization.split(" ")[1];

    //check if valid
    const decoded = verifyRefreshJWT(token);

    if (decoded.email) {
      //check if exist in session table
      const user = await getOneUser({
        email: decoded.email,
        refreshJWT: token,
      });
      if (user?._id) {
        // create new accessJWT
        const token = await createAccessJWT(decoded.email);
        // return accessJWT
        return responseClient({
          req,
          res,
          message: "Here is the accessJWT",
          payload: token,
        });
      }
    }
  }
  //   message ="jwt expired" ? decoded : "Unauthorized";
  responseClient({ req, res, message, statusCode: 401 });
};
