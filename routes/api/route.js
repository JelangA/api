const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/authController");

// List User Route
router.post("/register", UserController.register);



module.exports = router;
