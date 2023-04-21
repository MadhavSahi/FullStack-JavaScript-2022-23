import formidable from "formidable";
import {s3FileDelete,s3FileUpload} from "../service/imageUpload.js";
import config from "../config";
import CustomError from "../utils/customError";
import asyncHandler from "../service/asyncHandler";
import mongoose from "mongoose";
import Product from "../models/product.schema.js";
import fs from "fs";

//formidable/multer/express-upload are the pckages which are used to store files which user uploads from frontend onto the DB...
//We have used formidable...it gives access to both fields and files.

export const addProduct=asyncHandler(async(req,res)=>{

    const form=formidable({multiples:true,keepExtensions:true}); //these r basic steps to start with formidable

    form.parse(req,async function(err,fields,files){ //it gives access to error,fields,files.
        if(err){
            throw new CustomError(err.message || "Something went wrong",500);
        }
        let productId=new mongoose.Types.ObjectId().toHexString();//this id will be storing as _id

        console.log(fields,files);

        if(
            !fields.name ||  //coming from frontend
            !fields.price || 
            !fields.description ||
            !fields.collectionID
        ){
            throw new CustomError("Plz enter all the fields",500);
        }

        let imageArrayResponse= Promise.all()( //resolving the promise
            Object.keys(files).map(async(file,index)=>{ //files will be in array
                const element = file[fileKey]; //each file will have access to fileKey...imp.
                console.log(element);
                const data = fs.readFileSync(element.filepath); //fs means file system..it comes pre-installed in express...we have to use readFileSync so that we can get filepath..also imp.

                const upload=await s3FileUpload({ //here v r uploading the files onto AWS S3 bucket.
                    //these 4 fields are necessary to give.

                    bucketname:config.S3_BUCKET_NAME, //our AWS Bucket name
                    key:`product/${productId}/photo_${index+1}.png`, //this is v.imp as it will tell how the    file should be saved in our bucket.
                    body:data, //body means the actual file
                    contentType:element.mimetype, //this is for extension
                })
                //productID=1282hsjs
                //1:products/1282hsjs/photo_1.png
                //2:products/1282hsjs/photo_2.png

                return { //will have to pass the location of AWS S3 bucket in secure_url
                    secure_url:upload.Location
                }
            })
        )

        let imageArray=await imageArrayResponse;

        const product=await Product.create({ //creating entry in DB..

            _id:productId,//as v will store this as _id and not the auto-generated from MongoDB. 
            photos:imageArray, //as we returned secure_url to imageResponseArray which further is in ImageArray
            ...fields //all other fields...used spread
        });

        if(!product){
            throw new CustomError("Product failed to be created in DB",500);
        }

        res.status(200).send({ //sending the response.
            success:true,
            product,
        })


    })
});

export const getAllProducts = asyncHandler(async(req,res)=>{

    const products=await Product.find({}); //it will select all products from DB.

    if(!products){
        throw new CustomError("No PRODUCTS Found",404);
    }

    res.status(200).json({
        success:true,
        products,
    });

});

export const getOneProductbyID = asyncHandler(async(req,res)=>{

    const {id:productId }=req.params; //the same concept of params URl.

    const product=await Product.findById(productId);

    if(! product){
        throw new CustomError("No Product Found",404);
    };  

    res.status(200).json({
        success:true,
        product,
    });

})
