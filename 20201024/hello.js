// Require module
const express = require("express");
const path    = require("path");

const app      = express();
// const app1     = express();
// const app2     = express();
// const app3     = express();


// Setting End-point (API)
app.get("/", function(request,response){
    response.send("Hello World!");
   // response.json("Hello World!");
});

app.get("/test",function(req,res){
    res.send("This is test page.");
});

app.get("/this-is-a-book",(req,res)=>{
    res.send("This is a book ~~~~");
});


// User parameters
// 1. req.query 
// 2. req.params
// 3. req.body (future)

// Using query_string 
app.get("/books/100031",(req,res)=>{
    let payload = req.query;
    let name    = req.query.name;

    res.send("Hello " + name + "! This is books 100031");

    // console.log(payload);

    // res.send(payload);
    // res.send("Books end-point");
});

// Using params 
app.get("/dep/:depNo/memebers/:memNo",(req,res)=>{
    let depNo   = req.params.depNo;
    let memNo   = req.params.memNo;
    let params  = req.params;
    let payload = req.query;

    console.log(payload);
    console.log(params);

    // res.send("Hello ! Your number is depNo :" + depNo + ", memNo :" + memNo);
    res.json("QQ");
});



// response data type
app.get("/response-data",(req,res) => {
    
    //// res.send
    // res.send("This is response data page.");


    //// res.json
    // let data = {
    //     "name":"jeff",
    //     "age" : 18
    // };

    // res.json(data);
    // res.send(data);
    // res.send([1,2,3,4,5]);

   
    // res.sendFile 
    // let fileName = path.join(__dirname,"sample.png");
    // console.log(fileName);
    // res.sendFile(fileName);
    // res.send("ok");

    
    // res.redirect
    // res.redirect("/test");
    res.redirect("https://google.com.tw");


});


// port
let portNum = 8088;
app.listen(portNum,function(){
    console.log("Server is running at http://localhost:" + String(portNum));
});
