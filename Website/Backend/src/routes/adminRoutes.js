const express = require("express");
const router = express.Router();
const {getAdmin, newAdmin, login}= require("../controllers/adminControllers");

router.get("/admin", getAdmin);
router.post("/admin", newAdmin);
router.get("/login", login);

module.exports = router;