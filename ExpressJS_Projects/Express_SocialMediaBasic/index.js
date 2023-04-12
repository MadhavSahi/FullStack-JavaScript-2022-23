// console.log("Hey");

const express= require("express");

const app=express();

const format=require("date-format");

const PORT = process.env.PORT || 5000 ;
// we need to mention like this because on production...every platform uses it's own PORT number to host the backend app for safety purposes...so we can't mention our PORT...it's a security issue...and .env files keep the sensitive information....site will have it's own .env file for these things so we don;t need to create .env files here for PORT.
// And we need to change script to node index.js because the Dev-Dependencies will be removed on production..and nodemon is mainly used for local testing...hence we need to change it.


app.get("/",(req,res)=>{  // "/" is for hiting the Home route.
    res.status(200).send("HuIIIIIII");
});

app.get("/api/vi/instagram",(req,res)=>{

    const instaJSON={
        name:"MadhavSahi",
        followers:10,
        following:20,
        date:format("dd-MM-yyyy hh:mm:ss" , new Date()),
    };

    res.status(200).json(instaJSON);
});
app.get("/api/vi/facebook",(req,res)=>{

    const instaJSON={
        name:"xyz",
        followers:100,
        following:200,
        date:format("dd-MM-yyyy hh:mm:ss" , new Date()),
    };

    res.status(200).json(instaJSON);
});

app.get("/api/vi/linkedin",(req,res)=>{

    const instaJSON={
        name:"MadhavSahi",
        followers:30,
        following:40,
        date:format("dd-MM-yyyy hh:mm:ss" , new Date()),
    };

    res.status(200).json(instaJSON);
});

app.get("/api/vi/:token",(req,res)=>{ // ":" is used for when u need to grab something from the URL...in URL we don't need to type ":"...it is for ourselves if we want to grab it or not.
    const paramname=req.params.token;
    const paramJSON={
        param:paramname,
    };
    res.status(200).json(paramJSON);
})
//we had to put this method at bottom...bcz otherwise the other routes will not be working....
//it works also as top to bottom.



app.listen(PORT,()=>{  //the imp step. 
    console.log("Hey backend");
});
