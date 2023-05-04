import { Router } from "express";

import authRoutes from "./auth.route.js"; //call anything for authRoutes...learnt this new thing..we can export there,..but can import with our name

import couponRoutes from "./couponRoute.js";

import collectionRoutes from "./collection.route.js";

const router=Router();

router.use("/auth", authRoutes)  //it will be like /auth/login or /auth/signUp
router.use("/coupon", couponRoutes);
router.use("/collection", collectionRoutes);

export default router;