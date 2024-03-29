const contactsServices = require("../../services/contactsServices/contactsServices");

const createContact = async (req, res, next) => {
  const { _id: owner } = req.user;

  const result = await contactsServices.addContact({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = createContact;
