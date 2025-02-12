import userSchema from "./UserSchema.js";

//insert new user
export const createNewUser = (userObj) => {
  return userSchema(user).save();
};
