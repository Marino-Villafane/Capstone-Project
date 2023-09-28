const express = require("express");
const router = express.Router();
const {getAdmin, newAdmin}= require("../controllers/adminControllers");

router.get("/admin", getAdmin);
router.post("/admin", newAdmin);

module.exports = router;