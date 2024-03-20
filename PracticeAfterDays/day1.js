const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "zara", frnd: "rajput vikas" });
});
app.get("/more", (req, res) => {
  res.render("index", { name: "cinnamonGirl", frnd: "LyingNoob" });
});

app.listen(port, () => {
  console.log("server started ");
});

// steps ::->

// first get the express install npm i express
// second require the express
// require("express")
// store the result of require in a variable
// const express=require("express")
//now call the express function ( call the function which is returned by require express )  const app = express()
// now make the route path
// app.get("/",(req,res)=>{res.send("hello world")})

// if you want to render a ejs you can , by first setting up the engine app.set("view engine","ejs")

// now make  a views folder and make ejs files , "ejs are embedding javascripts file they are like html but they are not htmls " , ejs are dyamics means they can show df data to df persons

// to show ejs on a path we do likr '

// app.get("path/",(req,res)=>{res.render("index.ejs",{name:"",other:""})})

// remember to show a dynamic values in ejs we did like in <h1>hey i am <%= name %> </h1>
// this name is now dynamic we can assign it values by doing like app.set("/",(req,res)=>{res.render("index.ejs")})