const express = require("express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateContactFavorite,
} = require("../../controllers/contactsController");
const { validateBody } = require("../../helpers");
const {
  createContactSchema,
  updateContactSchema,
  updateContactFavoriteSchema,
} = require("../../schemas/contactsSchemas");

const {authMiddleware} = require("../../middlewares/authMiddleware")

const contactsRouter = express.Router();

contactsRouter.get("/", authMiddleware, getAllContacts);

contactsRouter.get("/:id", authMiddleware, getOneContact);

contactsRouter.delete("/:id", authMiddleware, deleteContact);

contactsRouter.post("/", authMiddleware, validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", authMiddleware, validateBody(updateContactSchema), updateContact);

contactsRouter.patch(
  "/:id/favorite",
  authMiddleware,
  validateBody(updateContactFavoriteSchema),
  updateContactFavorite
);

module.exports = contactsRouter;
