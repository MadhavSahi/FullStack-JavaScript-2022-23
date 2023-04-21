import User from "../models/user.schema.js";
import JWT from "jsonwebtoken"
import asyncHandler from "../service/asyncHandler.js";
import config from "../config/index.js";
import CustomError from "../utils/customError.js";

//we will use these middlewares in Routes.

export const isLoggedIn=asyncHandler(async(req,res,next)=>{

    let token;

    if(req.cookie.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer") )){

        token= req.cookie.token || req.headers.authorization.split(" ")[1];
        //either the token will be in cookies...or the token is also present in Headers of Req...
        //in headers...authorization have the token with exactly - "Bearer sksfnksnkdnf"...so what we do is we get this token value from headers if user is using mobile(means we don't have accees to his cookies).....read more in auth Controller where we r sending the cookies in JSON response.

        //token = "Bearer dnfjndbajbfkadjbfkjadb";
    }

    if(!token){
        throw new CustomError("NOT Authorized to access this App/resource",400);
    }

    try {
        
        //here we r decrypting the payload from JWT token using JWT Secret...it will contain _id and role...this is the whole purpose
        const decodedJWTPayload=JWT.verify(token,config.JWT_SECRET);
        
        //here we r getting details of _id user by searching from DB...nd bringing values of name,email,role...weird synatx. 
        //and we storing it inside req body....remember..we can manipulate the req,res in middlewares.
        req.user= await User.findById(decodedJWTPayload._id , "name email role");

        next();
        //we have to release the next flag...

    } catch (error) {
        //a safety net.
        throw new CustomError("NOT Authorized to access this App/resource",400)
    }
});

//authorize must be used after isLoggedIn bcz we r updating the req in there...so only after that we will have access to .user
//this is for to check if the client is user,moderator,admin...which we defined in authRoles
//I m confused that we r getting the array in params...but in DB we r storing it just a string...so how multiple values will be checked.!!🙄
export const authorize=(...requiredRoles)=>asyncHandler(async(req,res,next)=>{
    if( ! requiredRoles.includes(req.user.role)){
        throw new CustomError("You r not authorized to access this resource");
    }
    next();
});