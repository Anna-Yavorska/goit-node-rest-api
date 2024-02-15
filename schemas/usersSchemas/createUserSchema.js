const Joi = require("joi");

const createUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

module.exports = createUserSchema;
