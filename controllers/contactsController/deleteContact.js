const { HttpError } = require("../../helpers");
const contactsServices = require("../../services/contactsServices");

const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports =  deleteContact;
