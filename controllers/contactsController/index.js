const { controllerWrapper } = require("../../helpers");
const createContact = require("./createContact ");
const deleteContact = require("./deleteContact");
const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const updateContact = require("./updateContact");
const updateContactFavorite = require("./updateContactFavorite");

module.exports = {
  createContact: controllerWrapper(createContact),
  deleteContact: controllerWrapper(deleteContact),
  getAllContacts: controllerWrapper(getAllContacts),
  getOneContact: controllerWrapper(getOneContact),
  updateContact: controllerWrapper(updateContact),
  updateContactFavorite: controllerWrapper(updateContactFavorite),
};
