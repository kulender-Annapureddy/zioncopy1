import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import User from "../models/DontainInfo.js";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.email,
        pass: process.env.password,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendMail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error in sending email:', error);
    }
};

export const getUserDetails = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            dob,
            country,
            state,
            city,
            address,
            pincode,
            panno,
            amount
        } = req.body;

        const newUser = new User({
            name,
            email,
            phone,
            dob,
            country,
            state,
            city,
            address,
            pincode,
            panno,
            amount
        });

        await newUser.save();

        const mailOptions = {
            from: process.env.email,
            to: "kulenderannapureddy3@gmail.com",
            subject: ("New User Registered"),
            html: `
            <h2>New User Registered ${name}</h2>
            <table border='1' >
            <tr>
                <th>Name</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${email}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${phone}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>${dob}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>${country}</td>
            </tr>
            <tr>
                <th>State</th>
                <td>${state}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>${city}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>${address}</td>
            </tr>
            <tr>
                <th>Pincode</th>
                <td>${pincode}</td>
            </tr>
            <tr>
                <th>PAN No</th>
                <td>${panno}</td>
            </tr>
            <tr>
                <th>Donation Amount</th>
                <td>${amount}</td>
            </tr>
        </table>
            `
        };

        // Sending email with user details
        await sendMail(mailOptions);

        res.status(201).json("Successfully saved user and sent email notification");
    } catch (error) {
        console.error('Error in saving user data:', error);
        res.status(400).json({ error: "Error in saving data" });
    }
};
