import { Router } from "express"; //pre-installed
import { forgotPassword, getProfile, login, logout, resetPassword, signUp } from "../controllers/auth.controller";
import { isLoggedIn } from "../middlewares/auth.middleware";

const router=Router(); //the main configuration will be done in index.js

router.post("/signup",signUp);

//Whenever we are sending some data to server...it;s a POST req...so Login is also a POST request...as we are sending username and password onto server for checking...hence POST req.
router.post("/login",login);

//when just hitting a route and not sending any data...then GET request.
router.get("/logout",logout);

//route for Forgot Password
router.post("/password/forgot/",forgotPassword);

// route for Reset Password...where we r sending email
router.post("/password/reset/:token",resetPassword);

router.get("/profile", isLoggedIn ,getProfile); //isloggedIn is middleware..in there...when next() will be called...it will then go to getProfile

export default router;