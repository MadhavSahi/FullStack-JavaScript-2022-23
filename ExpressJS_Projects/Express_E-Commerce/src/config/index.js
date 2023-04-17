import dotenv from "dotenv";
// we are using this package and hence we can make .env file...
// to use it we use process.env

dotenv.config();//this is necessary

const config={

    // this is how it is done.
    PORT: process.env.PORT || 5000,
    MONGODB_URL : process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce"
}

export default config;