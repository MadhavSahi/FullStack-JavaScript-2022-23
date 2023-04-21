import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import  JWT  from "jsonwebtoken";
import config from "../config/index.js";
import crypto from "crypto";
import AuthRoles from "../utils/authRoles.js";


const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Enter Name plz"],
        maxLength:[30,"Username should not be more than 30 chars"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Enter Email plz"],
        maxLength:[100,"Email should not be more than 100 chars"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Enter password greater than 6 chars"],
        select:false //so this will not bring the password when mongoose brings the data of document...we have to select password explicitly if we want.
    },
    role:{
        type:String,
        enum: Object.values(AuthRoles) , //enum means we have to select from these particular options only which we will write.... Object.values will make an array of the values of keys
        default: AuthRole.USER, // if someone doesn't pass role...then default "User" will be selected
    },

    //Forgot password Implementation...it is done using Cryptography
    // we have to pass 2 tokens...see below for understanding
    //it's not an inbuilt thing...we will write the fxnality for it using tokens package..
    // we have to install few packages to make it work.

    forgotPasswordToken : String, //random Token is generated in methods with the help of crypto and hashing... 1 copy of token is stored in our DB..and 1 is sent to user email when user clicks on forgot password...when user clicks on email link...that token is checked and compared..we match it with our DB token...if it is matched(logic in controller)...then user is allowed to change pw...for a particular time period...which is done with the help of below..

    forgotPasswordExpiry : Date, // so that user can only change pw within few minutes.

},{timestamps:true});


//mongoose provides inbuilt Hooks...example :- pre hook for to do something just before saving in DB...we will encrypt our password just before saving...with the help of bcrypt package...like triggers in SQL..or middleware

// it happens on the 1st save only...not on the modifying.
userSchema.pre("save", async function(next){ //just before saving the document...run this fxn

    if(! this.isModified("password")){ // means user is NOT entering password for the very first time or NOT modifying the existing one
        return next();// we are releasing the next flag...means get out of this hook...or don't do anything
    }

    //will work when user is entering pw for 1st time or modifying when forgot pw.
    this.password = await bcrypt.hash(this.password,10); //we are encrypting the password with the help of bcrypt...and we are using Salt value as 10...means rotation will be done 10 times...so it will take long time...hence we used async await...and we have to use normal fxn...because we have to use "this" keyword to access password...it's like rule of mongoose hooks to use "this" keyword and normal fxns.
    next();
})

//creating custom method for password checking/comparing...when in some other file object of User will be made.
// for Login...we have to check pw for user entered pw and pw stored in DB...but we have stored the hashed pw in DB...but in cryptography...for a string having same rotations...encrypted string will be same...so will work accordingly by creating our own method for checking/comparing password...we will encrypt the user entered password and compare it in DB.

// .methods is given by mongoose....we will use these methods in our controller
userSchema.methods={

    //compare password
    comparePassword : async function(enteredPassword){//entered pw is the password entered by user while login
        return await bcrypt.compare(enteredPassword,this.password); //it will return true false depending upon whether password matched or not.
    },

    //generate JWT token :- - JSON Web Token :- When the user successfully logins into our App..we give them a token in Cookies that means they can roam around in our app...they are authenticated user....2 things are provided........JWT_SECRET and JWT_EXPIRY
    getJWTtoken : function(){
        JWT.sign({ _id : this._id } , config.JWT_SECRET , { expiresIn : config.JWT_EXPIRY})
        //JWT.sign will generate a long encrypted string of _id...which can only be decrypted using JWT_SECRET.....so we decrypt that string using SECRET and we will have the access to _id....the only purpose of sending _id as payload was bcz then we can use this _id to retrieve data of that user and show it on frontend...This _id is from MongoDB document. JWT_EXPIRY is the time till token is valid....don't get into too much of rabbit hole...just read this para...enough
    },

    //to implement forgot password fxnality....have explained above in schema.
    generateForgotPasswordToken : function(){
        const forgotToken = crypto.randomBytes(20).toString("hex"); //generated random token string

        this.forgotPasswordToken = crypto.createHash("sha256").update(forgotToken).digest("hex"); //remember...stored the hashed token value in DB and also updated the value of forgotToken

        this.forgotPasswordExpiry = Date.now() + 20*60*1000; //to setup expiry time for token.
        
        return forgotToken; //we are returning forgotToken to backend bcz we have to compare the Token values of DB and user mail one...it will be done in controller.
    },

};

export default mongoose.model("User",userSchema);

//User in DB will be users