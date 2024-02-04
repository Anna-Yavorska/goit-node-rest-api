const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers");

const updateContactFavorite = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.updateStatusContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = updateContactFavorite;
