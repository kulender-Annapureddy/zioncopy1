import mongoose from "mongoose";

const DonationInfo = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        required:true
    },
    dob :{
        type:Date,
        require:true,
    },
    country: {
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true,
    }, 
    city:String,
    address:String,
    pincode:Number,
    Panno:String,
    amount:Number,
},
{timestamps:true}
)

const User = mongoose.model("User", DonationInfo);
export default User;