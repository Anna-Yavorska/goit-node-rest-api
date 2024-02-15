const HttpError = require("./HttpError.js");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      if (error.message === '"email" is required') {
        next(HttpError(400, "Missing required field email"));
      } else {
        next(HttpError(400, error.message));
      }
    }

    next();
  };

  return func;
};

module.exports = validateBody;
