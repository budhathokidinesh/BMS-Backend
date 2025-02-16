import { responseClient } from "../middlewares/responseClient.js";
import {
  createNewSession,
  deleteSession,
} from "../models/session/SessionModel.js";
import {
  createNewUser,
  getUserByEmail,
  updateUser,
} from "../models/user/UserModel.js";
import {
  userActivatedNotificationEmail,
  userActivationUrlEmail,
} from "../services/email/emailService.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { v4 as uuidv4 } from "uuid";
import { getJwts } from "../utils/jwt.js";
//this is for the inserting new user
export const insertUser = async (req, res, next) => {
  try {
    //to do signup process
    //recieve the user data
    //encrypt the password
    const { password } = req.body;
    req.body.password = hashPassword(password);

    //Insert user into the DB
    const user = await createNewUser(req.body);

    if (user?._id) {
      //create an unique user activation link and send to their email
      // const newSessionObj = {
      //   token: uuidv4(),
      //   association: user.obj,
      // };
      const session = await createNewSession({
        token: uuidv4(),
        association: user.email,
      });
      //This is to see session is inserted or not?
      if (session?._id) {
        const url = `${process.env.ROOT_URL}/activate-user?sessionId=${session._id}&t=${session.token}`;

        //send this url to theie email
        console.log(url);
        const emailId = await userActivationUrlEmail({
          email: user.email,
          url,
          name: user.fName,
        });
        if (emailId) {
          const message =
            "We have sent you an email with activation link. Please check your email and follow te instruction to activate your account";
          return responseClient({ req, res, message });
        }
      }
      // res.json({
      //   status: "success",
      //   message: "TO DO",
      // });
    }

    throw new Error("Unable to create an accout. Please try later. Thnaks.");
    // res.json({
    //   status: "error",
    //   message: "Unable to create an accout. Please try later. Thnaks.",
    // });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "This email already exist, please try different email or reset your password";
      error.statusCode = 400;
    }
    next(error);
  }
};

//this is activating new user
export const activateUser = async (req, res, next) => {
  try {
    const { sessionId, t } = req.body;
    console.log(sessionId, t);

    const session = await deleteSession({
      _id: sessionId,
      token: t,
    });
    if (session?._id) {
      //update user to active
      const user = await updateUser(
        { email: session.association },
        { status: "active" }
      );
      if (user?._id) {
        //respond to the frontend
        userActivatedNotificationEmail({ email: user.email, name: user.fName });
        //send email notification
        const message = "Your account has been activated, you may login now.";
        return responseClient({ req, res, message });
      }
    }
    const message = "Invalid link or token expired!";
    const statusCode = 400;
    responseClient({ req, res, message, statusCode });
  } catch (error) {
    next(error);
  }
};
//this is for the login user controller
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    //get user by email
    const user = await getUserByEmail(email);
    if (user?._id) {
      console.log(user);
      //compare password
      const isPassMatch = comparePassword(password, user.password);
      if (isPassMatch) {
        console.log("user authenticated successfully");
        //create jwts
        const jwts = await getJwts(email);

        //response jwts
        return responseClient({
          req,
          res,
          message: "Login successful",
          payload: jwts,
        });
      }
    }

    const message = "Invalid login details";
    const statusCode = 401;
    responseClient({ req, res, message, statusCode });
  } catch (error) {
    next(error);
  }
};
