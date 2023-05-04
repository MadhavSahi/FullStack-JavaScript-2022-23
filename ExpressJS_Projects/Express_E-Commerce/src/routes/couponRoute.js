import { Router } from "express"; //pre-installed
import { createCoupon, deleteCoupon, getAllCoupons, updateCoupon } from "../controllers/coupon.controller";
import { authorize, isLoggedIn } from "../middlewares/auth.middleware";
import AuthRoles from "../utils/authRoles";

const router=Router(); //the main configuration will be done in index.js

//for creating coupon...used 2 middlewares
//we have only used the "/" bcz it is home route...it's also something unique for POST...so we can keep it like this
router.post("/",isLoggedIn,authorize(AuthRoles.ADMIN,AuthRoles.ADMIN),createCoupon);

//for deleting coupon...used 2 middlewares...as we are getting the data from req.params...we have to use the left side of it..means we have to use :id..and NOT :couponID....it's for controller only..
router.delete("/:id",isLoggedIn,authorize(AuthRoles.ADMIN,AuthRoles.ADMIN),deleteCoupon);

//for update
router.put("/action/:id",isLoggedIn,authorize(AuthRoles.ADMIN,AuthRoles.ADMIN),updateCoupon);

//for getAllcoupons..this route is also diff...bcz "/" with get is diff from "/" with post
router.get("/",getAllCoupons);

export default router;