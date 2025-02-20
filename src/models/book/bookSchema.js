import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive", //active
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
    },

    addedBy: {
      name: {
        type: String,
      },
      adminId: {
        type: mongoose.Types.ObjectId,
      },
    },
    lastUpdatedBy: {
      name: {
        type: String,
      },
      adminId: {
        type: mongoose.Types.ObjectId,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", bookSchema); // It will be converted into books
