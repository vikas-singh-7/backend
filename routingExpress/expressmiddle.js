// import express frist

const express = require('express'); // get express in express now thie express varuable is a function 

const app = express();   // call this function 

// now we have all the powers of the express 

// make  a middleware  what the zebra is middleware , well it is the function which will run before the url or route function get excecute 

app.use(function(req,res,next){
    setTimeout(() => {
        console.log("server gets request")
        next();
    }, 1000);
});

app.use((req,res,next)=>{
    setTimeout(() => {
        console.log("validating the req ")
    next();
    }, 3000);
})

app.get('/',(req,res)=>{
    res.send("hey i found the of  response form server ")
})


app.listen(3000)