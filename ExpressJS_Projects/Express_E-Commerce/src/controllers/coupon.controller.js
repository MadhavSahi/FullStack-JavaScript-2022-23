import Coupon from "../models/coupon.schema.js"
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";

//to create the coupon in DB and store there.
export const createCoupon=asyncHandler(async(req,res)=>{

    const {code,discount}=req.body;

    if(!code || !discount){
        throw new CustomError("Plz provide code and discont",400);
    }
    //also we can add for if code already exists.

    const coupon= await Coupon.create({
        code,
        discount
    });

    res.status(200).json({
        success:true,
        message:"Coupon saved successfully",
        coupon,
    })

});

//to get all the coupons from DB...we can use .find({})...it will fetch all the coupons.
export const getAllCoupons=asyncHandler(async(req,res)=>{
    
    const allCoupons = await Coupon.find({});

    if(!allCoupons){
        throw new CustomError("No Coupons found",400);
    }

    res.status(200).json({
        success:true,
        message:"Found all the Coupons",
        allCoupons,
    })

});

//similarly we can write for update coupon and delete coupon.