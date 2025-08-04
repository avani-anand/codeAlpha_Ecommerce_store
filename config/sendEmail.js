import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.RESEND_API_KEY){
    console.log("Provide RESEND_API_KEY in the .env file")
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async({sendTo, subject, html })=>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'Binkeyit <onboarding@resend.dev>',   // verified from address
            to: sendTo,
            subject: subject,
            html: html,
        });

        if (error) {
            console.error("Resend error: ", error);
            return null;
        }

        return data
    } catch (error) {
        console.log("SendEmail Catch error => ",error)
        return null
    }
}

export default sendEmail
