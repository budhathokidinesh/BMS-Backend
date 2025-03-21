// multer setup
import path from "path";
import multer from "multer";
import fs from "fs";
// const upload = multer({ dest: "uploads/" });
const __dirname = path.resolve();
const fpDestination = "public/imgs";

//this is storing image in disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //check if directory exists or not? if not create one
    !fs.existsSync(fpDestination) &&
      fs.mkdirSync(fpDestination, { recursive: true });
    cb(null, fpDestination);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filePath = uniqueSuffix + "_" + file.originalname;

    cb(null, filePath);
  },
});

//filter to allow images only
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|jif|webp/;
  const extName = path.extname(file.originalname).toLowerCase();
  const isAllowedExt = allowedFileTypes.test(extName);
  const mimetype = allowedFileTypes.test(file.mimetype);
  if (isAllowedExt && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("only jpeg|jpg|png|jif|webp are allowed "), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2Mb
});
