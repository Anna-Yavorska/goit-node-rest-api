const Joi = require("joi");
const subscriptionValues = ["starter", "pro", "business"];

const updateUserSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionValues)
    .required(),
});

module.exports = updateUserSubscriptionSchema;
