import express from "express";
import { createFile } from "../controllers/filesControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createFileSchema } from "../schemas/filesSchemas.js";
import { checkExtension } from "../middlewares/checkExtension.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

export default filesRouter;
