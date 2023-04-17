//with the help of mongoose we can make the schema
//schema is just structure of our DB...or like row ...that we want to organise our data in this way
//There can be many collections per database and many documents per collection.
//A collection/schema holds one or more BSON documents. Documents are analogous to records or rows in a relational database table. Each document has one or more fields; fields are similar to the columns in a relational database table.
import mongoose from "mongoose";

//it is a collection
const collectionSchema = new mongoose.Schema(

    //with the power of mongoose...we can use object for our fields. 
  {
    name: { //name is field...below is the value...name is 1 document.
      type: String,
      required: ["true","Plz enter name"],//validation done by mongoose
      trim:true,

    },
  },
  { timestamps : true } // it will add 2 properties of type Date in our schema...createdAt , updatedAt
);
