// const express=require("express");

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./routes/auth.route.js" //call anything for routes...learnt this new thing..we can export there,..but can import with our name

// import { Express } from "express";

const app=express();

//these are the express middlewares which we have to enable by compulsion to run the app.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); // for cross-origin
app.use(cookieParser()); // so that server can access user cookies on sending response...

//for routes...the most imp line..it is getting all the routes
app.use("/api/v1",routes);

//so originally..our route will be :- https://localhost:3000/api/v1/auth/signUp
//or https://localhost:3000/api/v1/auth/login....in postman...we need to check this url

app.get("/",(_req,res)=>{ //for home route..and also as we don't use req...we can use _req
    return res.status(200).send("Hello Madhav..this is Home Route");
});

app.all("*",(_req,res)=>{   //for all othe routes.
    return res.status(404).json({
        success:true,
        message:"No ROUTE FOUND",
    })
});

export default app;