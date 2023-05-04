import Collection from "../models/collection.schema.js";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";


//create collection
export const createCollection=asyncHandler(async(req,res)=>{
    const {name}=req.body;
    
    if(!name){
        throw new CustomError("No Collection entered",400);
    }

    const collection=await Collection.create({
        name
    })

    res.status(200).json({ //DB entry creation.
        success:true,
        message:"Collection was created successfully.",
        collection,
    })
});

//update collection
export const updateCollection=asyncHandler(async(req,res)=>{

    const {name}=req.body; //this will be the new name which user will be entering.

    const {id:collectionID}=req.params; //this is the old collection name which user is editing...we will not be getting it from req.body(as it will have new updated name)....but we can get it from URL...as we have seen many where that wherever we click we get that id in URL..
    
    if(!name){
        throw new CustomError("No Collection entered",400);
    }

    const updatedCollectionName=await Collection.findByIdAndUpdate(collectionID,{ //it will just find in DB
        name:name //or name,....means in DB..change the name field with value of Righ vali value.
    },{
        new:true,
        runValidators:true,
    });
    
    res.status(200).json({ 
        success:true,
        message:"Collection name was UPDATED successfully.",
        updatedCollectionName,
    })
});

//delete collection
export const deleteCollection=asyncHandler(async(req,res)=>{

    const {id:collectionID} = req.params; //same concept...on deletion...we will be getting that field name from URL...hence getting it from there.

    const deletedCollection = await Collection.findById(collectionID);

    if(!deletedCollection){
        throw new CustomError("No Collection Found To be DELETED",400);
    }

    await deleteCollection.remove(); //sir did this but confused that how removing from here is deleting it in DB actually....why we didn't remove from DB.

    res.status(200).json({ 
        success:true,
        message:"Collection DELETED successfully.",
    })

});

//get all collections
export const getAllCollections=asyncHandler(async(req,res)=>{

    const collections = await Collection.find({}); //this will get all the collections name.

    if(!collections){
        throw new CustomError("No collections found",400);
    }

    res.status(200).json({
        success:true,
        collections
    });

});
