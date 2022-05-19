const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  singleBlog,
  deleteBlog,
  editBlog,
} = require("../controllers/blogController");

router.get("/blog/:slug", singleBlog);
router.get("/blogs", getAllBlogs);
router.post("/create", createBlog);
router.put("/edit/:slug", editBlog);
router.delete("/blog/:slug", deleteBlog);

module.exports = router;
