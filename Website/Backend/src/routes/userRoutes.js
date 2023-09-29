const express = require("express");
const router = express.Router();
const { getUser, newUser, userLogin } = require("../controllers/userControllers");

router.get("/users", getUser);
router.post("/users/register", newUser)
router.post("/users/login", userLogin)


module.exports = router;