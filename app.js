const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongo")
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
