const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const blogRoute = require("./routes/blog");

const app = express();

// connect database
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("Connected database successfully"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api", blogRoute);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Start server in port ${port}`));
