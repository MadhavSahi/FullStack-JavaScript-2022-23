import mongoose from "mongoose";

//it is Products collection/schema
const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Enter product name"],
        trim:true,
        maxLength:[120,"Product name should not be more than 120 chars"]
    },
    price:{
        type:Number,
        required:[true,"Plz provide product price"],
        maxLength:[5,"Not more than 5 digits"]
    },
    description:{
        type:String,
        required:[true,"Enter description"]
    },  

    //Storing media files in database is a very bad idea instead of this you should store path of files in database so that you can access them by their path and this also makes database less in size.You should move the files from client side to server side and get their path info that to be stored in the database.

    photos:[   //pics/vids/audios are always stored in 3rd party service like AWS S3 Bucket or Cloudnary or we can have folder on our server....from there we get the URL and we store that URL here...and on frontend we show the media using the URL only...user on login/signup form sends the pics/vids which user uploads as dp or anything to the backend...and backend then sends them to AWS-S3/Cloudnary...and we get URL in return
        {
            secure_url:{
                type:String,
                required:true
            }
        }
    ], //each media file path will be stored as a string in the array...

    stock:{
        type:Number,
        default:0
    },
    
    sold:{
        type:Number,
        default:0
    },

    //every product will belong to a category...example...tshirts will belong to summer category
    collectionID :{ 
        //here we are connecting 1 document to other...or schema...for that we have to use type for getting objectID and ref to use the name which we exported
        type: mongoose.Schema.Types.ObjectId, //it will refer all the fields of Ref Schema.
        ref:"Collection", //Collection schema referred
    },

},{timestamps:true});

export default mongoose.model("Product",productSchema);

//Product will be stored as products