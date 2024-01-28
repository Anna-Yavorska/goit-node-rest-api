const express = require("express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateContactFavorite,
} = require("../../controllers/contactsController");
const { validateBody } = require("../../helpers/contactsHelpers");
const {
  createContactSchema,
  updateContactSchema,
  updateContactFavoriteSchema,
} = require("../../schemas/contactsSchemas");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateContactFavoriteSchema),
  updateContactFavorite
);

module.exports = contactsRouter;
