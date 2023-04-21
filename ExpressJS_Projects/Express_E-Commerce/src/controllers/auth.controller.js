import User from "../models/user.schema.js";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";

export const cookieOptions = {
  //with this we make our cookie read-only for user...httpOnly flag is very imp.
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

//signUp user
export const signUp = asyncHandler(async (req, res) => {
  //we r here again making it async await...vese no need but we did...the main async await is handled in asyncHandler.

  //get data from user(Frontend...req)
  const { name, email, password } = req.body; //it's an object

  //validation...this is just a validation for empty fields.
  if (!name || !email || !password) {
    throw new CustomError("Please add all fields", 400); //we made a custom error class and used it here
    //we can also use inbuilt error also....new thing...remember
  }

  //now if we receive all the data properly...we have to store it in DB...

  //it checks if user is already there with these fields...it's mongoose query.
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("User already exists", 400); //throw is return basically.
  }

  //to store the values of new user
  const user = await User.create({
    //it will create the document in MongoDB...and also give _id
    name, // we can also write name:name..but as it's new Version of JS..we can write as this
    email,
    password,
  });
  //we have sored data in DB..that thing is done...now we have just created user object with some values.

  const token = user.getJWTtoken; //generated the JWT token from methods.

  user.password = undefined; //this is safety..bcz when creating user...the SELECT FALSE doesn;t work...hence it will have the original value of password in user object.
  //Don't get confused...this small user is the object we made here...there only we r setting pw as undefined...In DB "User" the right password is stored
  // SELECT FALSE works afterwards...when doing Query call(find)...but on doing CREATE...it returns password

  //to accept/send cookies from/to user on sending response
  //store this token in user's cookies....bcz server can't directly access cookies of user..hence we install cookie-parser for this purpose.
  res.cookie("token", token, cookieOptions); //cookieOptions help to make cookies as read only for user.
                                                //user will be able to see the token..but can't change anything.
                                                //these cookies are responsible for having JWT Token and hence Login...from server we will check this token in user cookies..which will help server to login activity.

  res.status(200).json({ //we r not returning this...we have just created the user in mongoDB
    success: true,
    token,
    user,
  });
});

//For LOGIN
export const login=asyncHandler(async(req,res)=>{

    const {email,password}=req.body;

    //validation
    if(!user || !password){
        throw new CustomError("Plz enter both fields", 400);  
    }

    const user=await User.findOne({email}).select("+password"); //here first we find details from User DB of the user who's email is found...and also we are selecting password bcz we need to match it with current password for Login Check...hence we r doing like this...

    //findOne will select all the fields associated with the DB...and store it in user object made here.

    //user made here is now storing all the details from DB.


    if(!user){ //no user found for this email.
        throw new CustomError("Invalid Credentials", 400);
    };

    const isPasswordMatched= await user.comparePassword(password);

    if(isPasswordMatched){
        const token=user.getJWTtoken();//generated the JWT token from methods.
        user.password=undefined; //read above 
        res.cookie("token",token,cookieOptions);

        return res.status(200).json({ //we have to return when doing these...means findOne
            success: true,
            token,
            user,
          });   //although we r storing token in user cookie...but still we r sending the token here also....bcz user can be accessing the app through phone where cookies are not stored..but token is required to check authentication...hence we r sending here...so in middleware we can check if the user is authenticated if having Token by sending from here.  
    }

    //when pw doesn't match
    throw new CustomError("Password Incorrect", 400);

});

export const logout=asyncHandler(async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    //for logout we just remove the JWT Token from user's cookies....hence user can not roam around in our app.
    //cookies are the only thing through which we authenticate user...imp concept.
    //in cookie we are only storing Token...and if we remove Token...it means whole cookies are removed...so cookies are deleted.

    res.status(200).json({ //we don't need to return...as we r just logging out the user...
        success:true,
        message:"Logged OUT",
    })
});


//to get user profile...just wrote to make understand middleware concept.
export const getProfile=asyncHandler(async(req,res)=>{

    const {user}=req; //we will get this req.user after login middleware..middlewares will b injected in Routes..

    if(!user){
        throw new CustomError("User not found", 400);
    };

    res.status(200).json({
        success:true,
        user,
    });

});
