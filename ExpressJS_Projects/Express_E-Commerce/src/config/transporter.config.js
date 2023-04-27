import nodemailer from "nodemailer";
import config from "./index.js";

//SMTP is the main transport in Nodemailer for delivering messages. SMTP is also the protocol used between different email hosts, so its truly universal. Almost every email delivery provider supports SMTP based sending, even if they mainly push their API based sending. APIs might have more features but using these also means vendor lock-in while in case of SMTP you only need to change the configuration options to replace one provider with another and you’re good to go.

//this is the main thing...hence we setup it here.
const transporter=nodemailer.createTransport({
    host: config.SMTP_MAIL_HOST,
    port: config.PORT,
    //secure: false, // upgrade later with STARTTLS...true for PORT 465...false for others
    auth: {
      user: config.SMTP_MAIL_USERNAME,
      pass: config.SMTP_MAIL_PASSWORD,
    },
  });
  
  export default transporter;