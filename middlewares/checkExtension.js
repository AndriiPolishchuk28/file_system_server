import HttpError from "../helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
  const { fileName } = req.body;
  const EXTENSIONS = ["txt", "html", "css", "doc", "sass"];
  const index = fileName.lastIndexOf(".");
  const fileExtension = fileName.slice(index + 1);
  const existExtension = EXTENSIONS.includes(fileExtension);
  if (!existExtension) {
    next(
      HttpError(400, `This app dont accept that ${fileExtension} extension`)
    );
  }
  next();
};
