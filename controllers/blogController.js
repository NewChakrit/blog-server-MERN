const slugify = require("slugify");
const Blogs = require("../models/blogs");

exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  // validate
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
