// first get the express , what is express , well it is the framework for the node js 
// why express express is used to make routes for our application 
// so we install it npm i express 
// we require it by require('express')
// we make a express variable  // this variable whic is returned by require('express) gives us a complete express thing 

// we make a app variable by calling express
// then we take app and we call get function of app  said okay app.get('/',(req,res)=>{
//     req.send("message")
// })

// app.listen(3000)

// we make a server :P 


const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send("hello guys vikas here , i am learning backend <br> hey cinnamon <br> how r u noobie ")
})

app.listen(3000)

// we install  a package called nodemon whcih re run our server when we make a change in our express server 

// so install nodemon and then run our server again by nodemon file name 
// if it give error make sure to use npx nodemon filename 
