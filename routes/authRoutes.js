const { Router } = require("express");
const authController = require("../controllers/authController");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.get("/profile/avatars", requireAuth, checkUser, authController.avatars_get);
router.post("/profile/avatars", requireAuth, checkUser, authController.avatars_post);
router.get(
    "/auth/confirmEmail/:token/:id",
    authController.confirmEmail_get
  );
  router.get(
    "/auth/requestConfirm/", requireAuth, checkUser, 
    authController.requestConfirm_get
  );

module.exports = router;
