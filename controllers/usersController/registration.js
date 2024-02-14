const User = require("../../models/usersModels/users");
const HttpError = require("../../helpers/HttpError");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const registration = async (req, res, next) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  try {
    const result = await User.create({
      email,
      password: hashedPassword,
      avatarURL,
      verificationToken,
    });

    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
      email: result.email,
      subscription: result.subscription,
    });
  } catch (error) {
    if (error.code === 11000) {
      throw HttpError(409, "Email in use");
    }
    throw error;
  }
};

module.exports = registration;
