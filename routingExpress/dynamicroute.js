const express = require("express");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/profile", (req, res) => {
  res.send("hello from profile ");
});

app.get("/profile/:username", function (req, res) {
  if (req.params.username == "vikas") {
    res.send(`hey from ${req.params.username} :P`);
  } else {
    res.send(`hooga booga : ${req.params.username}`);
  }
});

app.listen(port);
