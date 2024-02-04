const { HttpError } = require("../../helpers");
const contactsServices = require("../../services/contactsServices");

const deleteContact = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await contactsServices.removeContact(owner, id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports =  deleteContact;
