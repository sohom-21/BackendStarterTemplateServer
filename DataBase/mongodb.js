import mongoose from "mongoose";
import {MONGODB_URI,NODE_ENV} from "../config/env.js";

if(!MONGODB_URI){
    throw new Error("MongoDB URI is missing!! please enter a proper MongoDB URI.");
}

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`connected to mongodb in ${NODE_ENV} Mode`);
        console.log(`MongoDB database is awesome!`);
    }catch (error) {
        console.error('Error connecting to MongoDB',error);
        process.exit(1);
    }
};

export default connectToMongoDB;