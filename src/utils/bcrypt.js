import bcrypt from "bcryptjs";
const saltRound = 15;

//this is for encrypting the password
export const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRound);
};

//this is for comparing the password
export const comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};
