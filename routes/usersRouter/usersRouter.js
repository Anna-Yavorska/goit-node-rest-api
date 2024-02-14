const router = require("express").Router();
const {
  registration,
  login,
  logout,
  getInfo,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/usersController");
const { validateBody } = require("../../helpers");
const { authMiddleware, upload } = require("../../middlewares");

const {
  createUserSchema,
  loginUserSchema,
  updateUserSubscriptionSchema,
  verifyEmailUserSchema,
} = require("../../schemas/usersSchemas");

router.post("/register", validateBody(createUserSchema), registration);

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateBody(verifyEmailUserSchema), resendVerifyEmail);

router.post("/login", validateBody(loginUserSchema), login);

router.post("/logout", authMiddleware, logout);

router.get("/current", authMiddleware, getInfo);

router.patch(
  "",
  authMiddleware,
  validateBody(updateUserSubscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authMiddleware, upload.single("avatar"), updateAvatar);
module.exports = router;
