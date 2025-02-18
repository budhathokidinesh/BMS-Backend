import userSchema from "./UserSchema.js";

//insert new user
export const createNewUser = (userObj) => {
  return userSchema(userObj).save();
};

//this is for update the user after finding the user in session table
export const updateUser = (filter, update) => {
  return userSchema.findOneAndUpdate(filter, update, { new: true });
};
//this is for the fetting user by email(email: is type string)
export const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};
//sthis is get user by email and token
export const getOneUser = (filter) => {
  return userSchema.findOne(filter);
};
