import path from "path"
import fs from "fs/promises"
import HttpError from "../helpers/HttpError.js"

const folderPath = path.resolve("files")

export const createFile = async (req, res, next) => {
  const { fileName, content } = req.body
  const filePath = path.resolve("files", fileName)
  try {
    await fs.writeFile(filePath, content)
    res.status(201).json({
      message: "File was created succesesfully",
    })
  } catch (error) {
    next(error)
  }
}

export const getFiles = async (req, res, next) => {
  try {
    const listFiles = await fs.readdir(folderPath)

    if (listFiles.length === 0) {
      throw HttpError(404, "Folder is empty")
    }
    res.json(listFiles)
  } catch (error) {
    next(error)
  }
}

export const getFile = async (req, res, next) => {
  const { filename } = req.params

  try {
    const fileNames = await fs.readdir(folderPath)
    const result = fileNames.includes(filename)
    if (!result) {
      throw HttpError(404, "File not found")
    }

    const filePath = path.resolve(folderPath, filename)
    const fileContent = await fs.readFile(filePath, "utf-8")
    res.json({ content: fileContent })
  } catch (error) {
    next(error)
  }
}
