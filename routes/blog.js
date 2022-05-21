const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  singleBlog,
  deleteBlog,
  editBlog,
} = require("../controllers/blogController");

const { requireLogin } = require("../controllers/authController");

router.get("/blog/:slug", singleBlog);
router.get("/blogs", getAllBlogs);

// For Admin
router.post("/create", requireLogin, createBlog);
router.put("/edit/:slug", requireLogin, editBlog);
router.delete("/blog/:slug", requireLogin, deleteBlog);

module.exports = router;
