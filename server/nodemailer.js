// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import User from "../models/DontainInfo.js";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.email,
//         pass: process.env.password,
//     }
// });

// const sendMail = async (mailOptions) => {
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error in sending email:', error);
//     }
// };

// export const getUserDetails = async (req, res) => {
//     try {
//         const {
//             name,
//             email,
//             phone,
//             dob,
//             country,
//             state,
//             city,
//             address,
//             pincode,
//             panno
//         } = req.body;

//         const newUser = new User({
//             name,
//             email,
//             phone,
//             dob,
//             country,
//             state,
//             city,
//             address,
//             pincode,
//             panno
//         });

//         await newUser.save();

//         const mailOptions = {
//             from: process.env.email,
//             to: "kulenderannpureddy3@gmail.com",
//             subject: "New User Registered",
//             html: `
//                 <h2>New User Details:</h2>
//                 <p>Name: ${name}</p>
//                 <p>Email: ${email}</p>
//                 <p>Phone: ${phone}</p>
//                 <p>DOB: ${dob}</p>
//                 <p>Country: ${country}</p>
//                 <p>State: ${state}</p>
//                 <p>City: ${city}</p>
//                 <p>Address: ${address}</p>
//                 <p>Pincode: ${pincode}</p>
//                 <p>PAN No: ${panno}</p>
//             `
//         };

//         // Sending email with user details
//         await sendMail(mailOptions);

//         res.status(201).json("Successfully saved user and sent email notification");
//     } catch (error) {
//         console.error('Error in saving user data:', error);
//         res.status(400).json({ error: "Error in saving data" });
//     }
// };
