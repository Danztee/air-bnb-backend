const express = require("express");
const router = express.Router();

const { createHome } = require("../controllers/homeController");

router.route("/").post(createHome);

module.exports = router;
