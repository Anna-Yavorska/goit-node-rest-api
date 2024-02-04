const { HttpError } = require("../../helpers");
const Contact = require("../../models/contactsModels/contacts");

async function listContacts(skip, limit) {
  return await Contact.find().skip(skip).limit(limit);
}

async function getContactById(contactId) {
  if (contactId.length === 24) {
    return await Contact.findById(contactId);
  }
  throw HttpError(404);
}

async function removeContact(contactId) {
  if (contactId.length === 24) {
    return await Contact.findByIdAndDelete(contactId);
  }
  throw HttpError(404);
}

async function addContact({ name, email, phone, favorite }) {
  return await Contact.create({ name, email, phone, favorite });
}

async function updateContact(id, data) {
  if (id.length === 24) {
    return await Contact.findByIdAndUpdate(id, data, { new: true });
  }
  throw HttpError(404);
}

async function updateStatusContact(contactId, body) {
  if (contactId.length === 24) {
    return await Contact.findByIdAndUpdate(contactId, body, { new: true });
  }
  throw HttpError(404);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};