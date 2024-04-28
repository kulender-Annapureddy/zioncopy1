import News from "../models/NewsLetter.js";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

const transporter = nodemailer.createTransport({
    service:"gamil",
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth: {
        user:process.env.email,
        pass:process.env.password,
    },
    tls: {
        rejectUnauthorized:false
    }
});

const sendMail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('sub Email sent successfully');
    } catch (error) {
        console.error("Error in send sub email:", error);
    }
}

export const NewsLetterSub = async(req, res) => {
  try {
    const { 
        name,
        email,
    } = req.body;
    const newNewsletter = new News ({
        name,
        email,
    });
    await newNewsletter.save();
    const mailOptions = {
        from:process.env.email,
        to:'kulenderannapureddy3@gmail.com',
        subject:("New Subscriber for Newsletter"),
        html:`
          <h2>New Subscriber Details</h2>
          <table border='1' >
            <tr>
                <th>Name</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${email}</td>
            </tr>
            <table/>
        `
    };
    await sendMail(mailOptions);
    res.status(201).json("successfully subscribed");
  } catch (error) {
    console.error("error in saving subscriber data");
    res.status(400).json({error: "error in saving subscribe data"});
  }
};