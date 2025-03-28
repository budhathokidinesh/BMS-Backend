import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
import cors from "cors";
import morgan from "morgan";
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
import { errorHandler } from "./src/middlewares/errorHandler.js";

//this is for uploading files
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//api endpoints
import authRoute from "./src/routes/authRoute.js";
import userRoute from "./src/routes/userRoute.js";
import booksRoute from "./src/routes/booksRoute.js";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/books", booksRoute);

//server status
app.get("/", (req, res) => {
  const message = "server is live";
  responseClient({ req, res, message });
});

//DB connection
import { dbConnect } from "./src/config/dbConfig.js";
import { responseClient } from "./src/middlewares/responseClient.js";

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log("server is running at http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));

app.use(errorHandler);
