const express = require("express");
const router = express.Router();
const {
  create,
  getAllBlogs,
  singleBlog,
} = require("../controllers/blogController");

router.get("/blog/:slug", singleBlog);
router.get("/blogs", getAllBlogs);
router.post("/create", create);

module.exports = router;
