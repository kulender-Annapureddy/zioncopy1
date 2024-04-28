import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from '../server/routes/UserRoute.js';
import mongoose from "mongoose";
// import path from 'path'


const app = express();
// const buildPath = path.join(__dirname,'..', 'build')
dotenv.config();
app.use(express.json());
app.use(cors());


app.use('/api', userRoutes);

const port = process.env.PORT || 3004;
mongoose.connect(process.env.MONGO_URL, {
    retryWrites:true,
    w:"majority"
})
.then(()=>{
    app.listen(port,'0.0.0.0', () => {
        console.log('server running on Port:', port)
        console.log("connected to database")
    })
})
.catch((error) => {
    console.log("error in connecting to database")
})
