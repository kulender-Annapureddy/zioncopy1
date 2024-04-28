import mongoose from "mongoose";

const NewsletterInfo = new mongoose.Schema({
    name:String,
    email:String,
});
const News = mongoose.model("News", NewsletterInfo);
export default News;