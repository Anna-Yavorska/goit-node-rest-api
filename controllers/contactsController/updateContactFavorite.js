const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers");

const updateContactFavorite = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await contactsServices.updateStatusContact(
    owner,
    id,
    req.body
  );
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = updateContactFavorite;
