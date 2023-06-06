//Bring Express
const express  = require("express");

// Assignmnet
const app=express();

//PORT assigning
const PORT=3000;
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hey User !,<br> use '/post' to get Posts Data. </h1>");
})

//20 posts
const posts = [
    { post_id: 1, heading: "Post 1", description: "Post 1 DATA" },
    { post_id: 2, heading: "Post 2", description: "Post 2 DATA" },
    { post_id: 3, heading: "Post 3", description: "Post 3 DATA" },
    { post_id: 4, heading: "Post 4", description: "Post 4 DATA" },
    { post_id: 5, heading: "Post 5", description: "Post 5 DATA" },
    { post_id: 6, heading: "Post 6", description: "Post 6 DATA" },
    { post_id: 7, heading: "Post 7", description: "Post 7 DATA" },
    { post_id: 8, heading: "Post 8", description: "Post 8 DATA" },
    { post_id: 9, heading: "Post 9", description: "Post 9 DATA" },
    { post_id: 10, heading: "Post 10", description: "Post 10 DATA" },
    { post_id: 11, heading: "Post 11", description: "Post 11 DATA" },
    { post_id: 12, heading: "Post 12", description: "Post 12 DATA" },
    { post_id: 13, heading: "Post 13", description: "Post 13 DATA" },
    { post_id: 14, heading: "Post 14", description: "Post 14 DATA" },
    { post_id: 15, heading: "Post 15", description: "Post 15 DATA" },
    { post_id: 16, heading: "Post 16", description: "Post 16 DATA" },
    { post_id: 17, heading: "Post 17", description: "Post 17 DATA" },
    { post_id: 18, heading: "Post 18", description: "Post 18 DATA" },
    { post_id: 19, heading: "Post 19", description: "Post 19 DATA" },
    { post_id: 20, heading: "Post 20", description: "Post 20 DATA" },
  ];
app.get("/post",(req,res)=>{
    
    res.status(200).json({posts});
});

app.listen(PORT, ()=>{
    console.log("Server listening at ${port}");
});