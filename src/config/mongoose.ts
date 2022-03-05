import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/API_Tracks";
mongoose.connect(MONGO_URI);