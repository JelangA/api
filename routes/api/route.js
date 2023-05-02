const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/authController");
const BarangController = require("../../controllers/barangController");

//auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

//barang
router.get("/barang", BarangController.getAll);



module.exports = router;
