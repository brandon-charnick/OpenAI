const express = require("express");
const { createImage } = require("../controllers/openaiController");
const router = express.Router();

router.get("/create-image", createImage);

module.exports = router;
