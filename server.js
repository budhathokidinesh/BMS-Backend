import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import { errorHandler } from "./src/middlewares/errorHandler.js";

//middlewares
import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//api endpoints
import authRoute from "./src/routes/authRoute.js";
app.use("/api/v1/auth", authRoute);

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
