import express from "express";
import { responseClient } from "../middlewares/responseClient.js";
import { verifyAccessJWT } from "../utils/jwt.js";
import { getSession } from "../models/session/SessionModel.js";
import { getUserByEmail } from "../models/user/UserModel.js";
const router = express.Router();

router.get("/profile", async (req, res) => {
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

          return responseClient({
            req,
            res,
            message: "User pfofile",
            payload: user,
          });
        }
      }
    }
    message = decoded === "jwt expired" ? decoded : "Unauthorized";
  }
  //   message ="jwt expired" ? decoded : "Unauthorized";
  responseClient({ req, res, message, statusCode: 401 });
});
export default router;
