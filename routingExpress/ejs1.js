const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "zara" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "vikas" });
});

app.listen(3000);
