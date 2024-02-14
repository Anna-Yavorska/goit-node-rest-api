const { HttpError } = require("../../helpers");
const User = require("../../models/usersModels/users");
const { sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${userverificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
