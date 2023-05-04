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

//update coupon is for if we want to make it active or inactive...depending upon admin wish...
//here update means we are either makeing it active or deactive.
export const updateCoupon=asyncHandler(async(req,res)=>{

        const {id:couponID}=req.params;
        const {action}=req.body; //whether to make it T or F...in schema we have made this field..

        const updatedCoupon = await Coupon.findByIdAndUpdate(//it takes 3 parameters...1st is which coupon to update,2nd is which field to update...3rd is whether to return nd run validations.

            couponID,// which coupon to update
        {
            active:action //change the active field to whatever action(T or F) is being provided.
        },
        {  //3rd param is for return the new thing and to check for validations.
                new:true,
                runValidators:true
        }
        );

        if(!updatedCoupon){
            throw new CustomError("No Coupon Found",400);
        }
        res.status(200).json({
            success:true,
            message:"Coupon is UPDATED according to your action",
            updatedCoupon,
        });

});

export const deleteCoupon=asyncHandler(async(req,res)=>{
    
    const {id:couponID}=req.params;

    const deletedCoupon = await Coupon.findByIdAndDelete(couponID);

    if(!deletedCoupon){
        throw new CustomError("No Coupon Found",400);
    }
    res.status(200).json({
        success:true,
        message:"Coupon is Deleted",
        deletedCoupon,
    });

});