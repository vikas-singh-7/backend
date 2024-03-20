const express = require("express");
const app = express();
const port = 3000;
app.use((req, res, next) => {
  console.log("hello world");
  next();
});

app.get("/", function (req, res) {
  res.send("hello World");
});
app.get("/username", function (req, res) {
  res.send("hello username");
});

app.get("/username/:any", function (req, res) {
  res.send(`hey from ${req.params.any}`);
});

app.listen(port, () => {
  console.log("server started");
});
