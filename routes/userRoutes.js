const express = require("express");
const {
  registerUser,
  loginUser,
  resetPassword,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", authMiddleware, resetPassword);

module.exports = router;
