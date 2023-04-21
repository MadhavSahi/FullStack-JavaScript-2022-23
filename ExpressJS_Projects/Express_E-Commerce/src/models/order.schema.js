import mongoose from "mongoose";
import orderStatus from "../utils/orderStatus";


const orderSchema = new mongoose.Schema({ //it's the user cart..

    //a bit tricky to understand...

    product:{  //which products user have added to cart..it will be an array of products and their details which we will get from product schema...it is basically what's inside cart
        //when dealing with multiple items...type will be of array...HAVEN'T understood much..probably have to look at this again.
        type:[ 
            {
                productId :{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Product",
                },
                count:Number,//total number of individual item products in cart...means 2 or 3 or more units of 1 product
                price:Number, //individual price of item
            }
        ],
        required: true,
    },
    user:{ //user who has placed the cart order
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    address:{ //for where to ship the cart order
        type:String,
        required:true,
    },
    phonenumber:{ //contact details of user for this cart order shipping.
        type:String,
        required:true,
    },
    amount :{  //total amount of cart
        type:Number,
        required:true,        
    },

    coupon:String, //any discount coupon for the user on this cart order

    transactionID:String, //we get it from stripe or razorpay on successful transaction

    status:{  //order tracking
        type:String,
        enum:Object.values(orderStatus),
        default:orderStatus.ORDERED,
    }

} , {timestamps:true});

export default mongoose.model("Order",orderSchema);