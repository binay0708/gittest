require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/androoniDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (req, res) {
  res.render("user");
});
app.get("/writer", function (req, res) {
  res.render("writer");
});
app.get("/writer/review", function (req, res) {
  res.render("review");
});
app.get("/writer/review/reviewpage", function (req, res) {
  res.render("reviewpage");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
