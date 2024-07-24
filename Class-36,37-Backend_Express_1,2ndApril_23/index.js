//Bring Express
const express  = require("express");

// Assignmnet
const app=express();

//PORT assigning
const PORT=3000;

//route...in the callback it will always take 2 paramters...(req,res)
// "/" is for hiting the Home route.
app.get("/",(req,res)=>{

    // res.send("<h1>Heyy FSJS</h1>");//it's like FrontEnd....but we don't write frontend here like this.
    //We don;t send data like res.send("xyz")...we always use status code while sending... res.status(200).send("Hello world")
    res.status(200).send("<h1>Hey Backend</h1>");
})

app.get("/insta",(req,res)=>{

    // res.status(200).send("<h2>Hello Insta route</h2>");

    const insta={
        name:"XYZ",
        age:20,
        rollnumber:10,
        nicknames:["abc","def"],
    };
    
    // res.status(200).send({insta});//we can use .send or .json
    res.status(200).json({insta});//we can use .send or .json
    // we have pass the JSON object in {}
});

app.listen(PORT, ()=>{
    console.log("Heyy Backend");
});

// const Express= request

// console.log("Hello Backend Express Web Development FSJS 2.0");