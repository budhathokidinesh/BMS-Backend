import { responseClient } from "../middlewares/responseClient.js";
import { createNewUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcrypt.js";

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

      // res.json({
      //   status: "success",
      //   message: "TO DO",
      // });
      const message =
        "We have sent you an email with activation link. Please check your email and follow te instruction to activate your account";
      return responseClient({ req, res, message });
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
