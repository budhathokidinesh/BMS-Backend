import mongoose from "mongoose";

export const dbConnect = () => {
  if (!process.env.MONGO_URL) {
    throw new Error("Please provide MONGO_URL connection string");
  }
  return mongoose.connect(process.env.MONGO_URL);
};

// THIS IS FOR GENERAL APPROACH

// export const dbConnect = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("Please provide MONGO_URL connection string");
//     }
//     const con = await mongoose.connect(process.env.MONGO_URL);
//     con && console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
