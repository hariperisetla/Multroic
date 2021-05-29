const { Router } = require("express");
const authController = require("../controllers/authController");
const Avatar = require("../models/Avatar");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

// const {
//     resetPasswordRequestController,
//     resetPasswordController,
//   } = require("../controllers/authController");

const router = Router();

//   router.post("/auth/signup", signUpController);
router.post(
  "/auth/requestResetPassword",
  authController.resetPasswordRequestController
);
router.get(
  "/auth/requestResetPassword",
  authController.resetPasswordRequestController_get
);
router.post(
  "/auth/passwordReset/:token/:id",
  authController.resetPasswordController
);
router.get(
  "/auth/passwordReset/:token/:id",
  authController.resetPasswordController_get
);


module.exports = router;
