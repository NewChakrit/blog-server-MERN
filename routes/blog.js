const express = require("express");
const router = express.Router();
const { create } = require("../controllers/blogController");

router.get("/blog", create);

module.exports = router;
