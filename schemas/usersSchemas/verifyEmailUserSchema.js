const Joi = require("joi");

const verifyEmailUserSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = verifyEmailUserSchema;
