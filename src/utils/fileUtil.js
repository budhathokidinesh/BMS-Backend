import { log } from "console";
import { unlink } from "fs";
import { resolve } from "path";
//actually delete the file
const deleteFile = (filePath) => {
  unlink(resolve(filePath), () => {
    console.log(filePath, "has been deleted");
  });
  try {
  } catch (error) {
    console.log(error);
  }
};
//is it single or array of files to be deleted
export const deleteUploadedFiles = (req) => {
  //single file
  if (req.file) {
    deleteFile(req.file.path);
    return;
  }
  if (req.files) {
    req.files.map((f) => deleteFile(req.files.path));
  }
};
