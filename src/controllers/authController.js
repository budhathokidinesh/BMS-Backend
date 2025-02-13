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
      res.json({
        status: "success",
        message: "TO DO",
      });
      return;
    }
    //create an unique user activation link and send to their email

    res.json({
      status: "error",
      message: "Unable to create an accout. Please try later. Thnaks.",
    });
  } catch (error) {
    next(error);
  }
};
