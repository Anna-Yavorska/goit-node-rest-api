const router = require("express").Router();
const {
  registration,
  login,
  logout,
  getInfo,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/usersController");
const { validateBody } = require("../../helpers");
const { authMiddleware, upload } = require("../../middlewares");

const {
  createUserSchema,
  loginUserSchema,
  updateUserSubscriptionSchema,
} = require("../../schemas/usersSchemas");

router.post("/register", validateBody(createUserSchema), registration);

router.post("/login", validateBody(loginUserSchema), login);

router.post("/logout", authMiddleware, logout);

router.get("/current", authMiddleware, getInfo);

router.patch(
  "",
  authMiddleware,
  validateBody(updateUserSubscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authMiddleware, upload.single("avatar"), updateAvatar)
module.exports = router;
