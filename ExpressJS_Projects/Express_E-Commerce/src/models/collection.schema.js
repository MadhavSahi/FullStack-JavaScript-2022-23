//with the help of mongoose we can make the schema
//mongoose is adding a superpower for MongoDB driver.
//schema is just structure of our DB...or like row ...that we want to organise our data in this way
//There can be many collections per database and many documents per collection.
//A collection/schema holds one or more BSON documents. Documents are analogous to records or rows in a relational database table. Each document has one or more fields; fields are similar to the columns in a relational database table.
import mongoose from "mongoose";

//it is a collection/schema
const collectionSchema = new mongoose.Schema( //it is like categories...summer wear , winter wear

    //with the power of mongoose...we can use object for our fields. 
    // all these objects(name,email,password) together when filled with values is called as 1 document.
    //Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
    //By default, Mongoose adds an _id property to your schemas.
    //Mongoose will refuse to save a document that doesn't have an _id
  {
    name: { //name is field...below is the value...
      type: String,
      required: [true,"Plz enter Collection name"],//validation done by mongoose...
      trim:true,
      maxLength:[  //mongoose.validator
        120,"Collection name should not be more than 120 characters"
      ],
    },
  },
  { timestamps : true } // it will add 2 properties of type Date in our schema...createdAt , updatedAt for document
);

export default mongoose.model("Collection",collectionSchema)

//collectionSchema will be saved as "collections" in DB.
// this syntax is weird but need to follow.