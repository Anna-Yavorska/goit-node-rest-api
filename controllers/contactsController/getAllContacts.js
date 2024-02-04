const contactsServices = require("../../services/contactsServices");

const getAllContacts = async (req, res, next) => {
  const { limit, page } = req.query;
  const skip = (page - 1) * limit;
  const result = await contactsServices.listContacts(skip, limit);

  res.json(result);
};

module.exports = getAllContacts;
