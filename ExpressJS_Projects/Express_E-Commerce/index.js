import mongoose from "mongoose";

import app from "./src/app.js";

// import { config } from "dotenv";

import config from "./src/config/index.js";



//DB connection
// mongoose.connect('mongodb://127.0.0.1:27017/myapp')

//create method for DB connection.
//call the method.

//better approach is use an IFFY fxn. "()()"

//we have to use async await bcz DB connection takes time so to deal with the latency issues we have to use it.
//try catch is necessary bcz DB connection might fail...so good practice to have.
(async()=>{
    try {
        await mongoose.connect(config.MONGODB_URL);

        // ecommerce is the DB name which will be created in MongoDB
        console.log("MongoDB Connected !");

        //this is for when we have a DB connection but our Express App is not connecting to DB...
        // to handle these cases we have to use app.on method for error event...so that we are always sure that our app is working well
        app.on("error",()=>{ //error is the event name.
            console.log("Error: ",err);
        });

        const onListening=()=>{
            console.log(`Listening on PORT ${config.PORT}`);
        }

        app.listen(config.PORT,onListening); //imp step...this should come at last when everything is ready.

    } catch (error) { //this catch is for when DB doesn't connect due to latency...as DB is on another continent
        console.log("Error is: ",error);
        throw error;
    }
})()

