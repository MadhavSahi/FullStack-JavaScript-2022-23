import dotenv from "dotenv";
// we are using this package and hence we can make .env file...
// to use it we use process.env

dotenv.config(); //this is necessary

const config = {
  // this is how it is done.
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce",
  JWT_SECRET: process.env.JWT_SECRET || "mysecret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "10d",

  //for S3 from aws-sdk and also aws account we need to create all these of our own.
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  S3_REGION: process.env.S3_REGION ,

  //for nodemailer and mailtrap
  SMTP_MAIL_HOST:process.env.SMTP_MAIL_HOST,
  SMTP_MAIL_PORT:process.env.SMTP_MAIL_PORT,
  SMTP_MAIL_USERNAME:process.env.USERNAME,
  SMTP_MAIL_PASSWORD:process.env.SMTP_MAIL_PASSWORD,
  SMTP_SENDER_MAIL:process.env.SMTP_SENDER_MAIL,

};

export default config;
