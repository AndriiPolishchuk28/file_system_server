import path from "path";
import fs from "fs/promises";

export const createFile = async (req, res, next) => {
  const { fileName, content } = req.body;
  const filePath = path.resolve("files", fileName);
  try {
    await fs.writeFile(filePath, content);
    res.status(201).json({
      message: "File was created succesesfully",
    });
  } catch (error) {
    next(error);
  }
};
