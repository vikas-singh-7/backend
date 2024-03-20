const { render } = require("ejs");
const express = require("express");
const port = 3000;

const app = express();
app.use((req, res, next) => {
  // middleware :P used inbetween server start and any res
  console.log("server started :P");
  next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("about",{name:"vikas"});
});
app.listen(port);
// app.get("/", (req, res) => {
//   res.send("hello world :)");
// });
