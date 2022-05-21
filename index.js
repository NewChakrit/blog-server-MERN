const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");

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
app.use("/api", authRoute);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Start server in port ${port}`));
