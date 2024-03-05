// get express first

const express = require("express");
const app = express();   // aded all the powers of express to app variable 
app.get('/',(req,res)=>{    // we use app.get method which is often use wehn our server got a url from fronedn and if frontend url matched it res and send to frontend
    res.send("hey rajput vikas ! hows u doing BRO ")
});

app.get('/images',function(req,res){
    res.send("images are here my BUDDY :P")
})
app.get('/about',function(req,res){
    res.send("about page :P")
})
app.get('/contact',function(req,res){
    res.send("hey i am contact page  :P")
})

// now we need to listen the server 

app.listen(3000);

// app.get('/', (req, res) => {
//     res.send("hello guys vikas here , i am learning backend <br> hey cinnamon <br> how r u noobie ")
//   })