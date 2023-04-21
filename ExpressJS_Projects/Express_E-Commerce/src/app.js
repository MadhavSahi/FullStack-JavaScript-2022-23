// const express=require("express");

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


// import { Express } from "express";

const app=express();

//these are the express middlewares which we have to enable by compulsion to run the app.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); // for cross-origin
app.use(cookieParser()); // so that server can access user cookies on sending response...

export default app;