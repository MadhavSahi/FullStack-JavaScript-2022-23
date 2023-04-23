import { Router } from "express"; //pre-installed
import { getProfile, login, logout, signUp } from "../controllers/auth.controller";
import { isLoggedIn } from "../middlewares/auth.middleware";

const router=Router(); //the main configuration will be done in index.js

router.post("/signup",signUp);
router.post("/login",login);
router.get("/logout",logout);

router.get("/profile", isLoggedIn ,getProfile); //isloggedIn is middleware..in there...when next() will be called...it will then go to getProfile



export default router;