export const insertUser = (req, res, error) => {
  try {
    //to do signup process
    //recieve the user data
    //encrypt the password
    //Insert user into the DB

    //create an unique user activation link and send to their email

    res.json({
      status: "success",
      message: "TO DO",
    });
  } catch (error) {
    next(error);
  }
};
