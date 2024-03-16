const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/contact/:username", (req, res) => {
  // dynamic routing
  res.send(`hey from ${req.params.username}`);
});

app.get("/contact", (req, res) => {
  res.render("contactus", { he: "vikas", she: "zara" });
});

app.listen(3000, () => {
  console.log("server started ");
});
