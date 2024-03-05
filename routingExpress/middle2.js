// import express
const express = require('express') ;

// execute the express function and make  a app from it 
const port = 3000;
const app = express();

app.use((req,res,next)=>{
    setTimeout(() => {
        console.log("hey i am middle ware ")
        next();
    }, 10000);
    
});
app.get('/',function(req,res){    //this was the simple get res from the server now if the url get macthed only then this function will run else it will not run 
    res.send("hello vikas i am express js")
});

// now we have to listen the server 


// lets make a middle-ware middle ware is the player who run after the req was sent by client and before the req was excecuted by the server 



app.get('/',(req,res)=>{
    
    res.send("hello images there :)")
})
app.listen(port);