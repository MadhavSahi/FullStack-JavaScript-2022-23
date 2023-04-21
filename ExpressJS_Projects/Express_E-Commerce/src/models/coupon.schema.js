import mongoose from "mongoose";

//it is a collection/schema
const couponSchema = new mongoose.Schema({

    code:{
        type:String,
        required:[true,"Plz provide Coupon Code"],
    },
    discount:{
        type:Number,
        default:0
    },
    active:{
        type:Boolean,
        default:true,
    }

},{timestamps:true} );

export default mongoose.model("Coupon",couponSchema);