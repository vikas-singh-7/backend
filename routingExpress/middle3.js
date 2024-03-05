const express = require("express");
const port = 3000;

const app = express();
app.use((req, res, next) => {
  if (false) {
    console.log("error");
  } else {
    console.log("passed ");
    next();
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port);
