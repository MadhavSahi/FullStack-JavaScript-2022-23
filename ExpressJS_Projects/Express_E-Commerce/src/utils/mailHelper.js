import config from "../config/index.js";
import transporter from "../config/transporter.config.js";

//this will be used to send mail
const mailHelper=async(option)=>{

    await transporter.sendMail({
        from:config.SMTP_SENDER_MAIL,
        to:option.email, //will receive from option.
        subject:option.subject,
        text:option.message,
    });

};

export default mailHelper;