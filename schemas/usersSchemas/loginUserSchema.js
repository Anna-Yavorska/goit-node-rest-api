const Joi = require("joi");

const loginUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = loginUserSchema;
