import User from "../models/user.schema.js";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";
import mailHelper from "../utils/mailHelper.js";

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

  //it checks if user is already there with these fields...it's mongoose query...it will find 1 user
  const existingUser = await User.findOne({ email:email });
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

  res.status(200).json({ //we r not returning this...we have just created the user in mongoDB and sending as response
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

    const user=await User.findOne({email}).select("+password"); //here first we find details from User DB of the 1 user who's email is found...and also we are selecting password bcz we need to match it with current password for Login Check...hence we r doing like this...

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

//to implement forgotPassword fxnality...so 2 controllers will be used...forgotPassword(it will send the link to user mail) and Reset Password(it will update the new password in DB)
export const forgotPassword=asyncHandler(async(req,res)=>{

    const {email}=req.body;

    //no email validation..means user didn't enter email when we said did u forgot password...
    if(!email){
      throw new CustomError("No Email Received",400);
    }

    //when user will enter email when on forgot password screen...it will be searched in DB that if it actually exist or not. 
    const user=await User.findOne({email}); //this user will be the document vala...we can do any operation with it and save it...nd that will be saved in DB. 

    //no user found validation...means the email entered by user didn't get find in DB..he entererd wrong email
    if(!user){
      throw new CustomError("User NOT Found",404);
    }

    // we wrote the method in user schema...and r returning the token there...hence we can use it here...doing it will create the forgotToken and also update the fields in user document using "this" keyword...so if it's updating something..we need to save also...then only it will be saved in DB... using .save
    const resetToken=user.generateForgotPasswordToken();

    await user.save({validateBeforeSave:false}); //validateBeforeSave is used on .save if we dont wan;t to run through all the fields validations again...as we from backend are doing this token operation...so we don't need to check all the validations again...we have done validations when we are 1st time creating.

    //now we just have to send email with the token url...so we will create our own url from req...and then send mail to user.
    //protocol is HTTP or HTTPS...host will be either local host or the website name.
    const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/auth/password/reset/${resetToken}`;

    const message=`Your password reset token is as follows \n \n ${resetUrl} \n \n.`;

    //we have used try catch for mailhelper as it sometimes fails..
    try {
      // const options={
      // these we havewritten directly inside mailHelper
      // };

      await mailHelper({
        email:user.email,
        subject:"Password RESET Mail",
        message:message,
      })
    } catch (error) {

      //see...here we have to do these 3 lines must..because..if email is not sent..then what's the purpose of storing those forgotPasswordToken and Expiry fields in DB(line 152)....hence we have to undo that thing...so to do that we will make those fields as undefined...and then save it in DB...hence it will be like previous..means without calling that fxn..

      user.forgotPasswordToken=undefined;
      user.forgotPasswordExpiry=undefined;

      user.save({validateBeforeSave:false});

      throw new CustomError(error.message || "EMAIL was not sent",500);

    }
});

export const resetPassword = asyncHandler(async(req,res)=>{

  const {token:resetToken}=req.params; //from URL we will get it.
  const {newpassword,newconfirmPassword}=req.body; //user will enter these fields in UI

  const resetPasswordToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex")

  const user = await User.findOne({
    forgotPasswordToken:resetPasswordToken,//bcz in userSchema in methods we r returning the noraml token...not the crypto hashed one....so we have to hash it here...so the original hashed and this hash will be same...bcz the token we will receive from URL...will be the normal one...
    forgotPasswordExpiry: { $gt : Date.now()}, //so to check if the expiry time of URL is passed or not.
  })

  if(!user){
    throw new CustomError("Password RESET Token is INAVLID or EXPIRED",400);
  }

  if(newpassword!==newconfirmPassword){
    throw new CustomError("Password DOESNOT Match",400);
  }

  user.password=newpassword; //everything fine...hence we will update the password field of user with new password

  //now as new password is updated...we will have to make those token and expiry fields as undefined.

  user.forgotPasswordToken=undefined;
  user.forgotPasswordExpiry=undefined;

  await user.save();

  const token = user.getJWTtoken(); //in methods...it returns the long string
  res.cookie("token",token,cookieOptions); //placing it in cookie for token access.

  res.status(200).json({
    success:true,
    user,
  });

});