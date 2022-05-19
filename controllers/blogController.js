const slugify = require("slugify");
const Blogs = require("../models/blogs");
const { v4: uuidv4 } = require("uuid");

exports.createBlog = (req, res) => {
  const { title, content, author } = req.body;
  let slug = slugify(title);

  // validate
  if (!slug) {
    slug = uuidv4();
  }
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Please input your title." });
      break;
    case !content:
      return res.status(400).json({ error: "Please input your content." });
      break;
  }

  // Submit data
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: "Can't save duplicate article titles." });
    }
    res.json(blog);
  });
};

exports.getAllBlogs = (req, res) => {
  Blogs.find({}).exec((err, blogs) => {
    res.json(blogs);
  });
};

exports.singleBlog = (req, res) => {
  const { slug } = req.params;
  Blogs.findOne({ slug }).exec((err, blog) => {
    res.json(blog);
  });
};

exports.editBlog = (req, res) => {
  const { slug } = req.params;
  const { title, content, author } = req.body;
  Blogs.findOneAndUpdate(
    { slug },
    { title, content, author },
    { new: true }
  ).exec((err, blog) => {
    if (err) console.log(err);

    res.json(blog);
  });
};

exports.deleteBlog = (req, res) => {
  const { slug } = req.params;
  Blogs.findOneAndRemove({ slug }).exec((err, blog) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: "The blog has been deleted." });
  });
};
