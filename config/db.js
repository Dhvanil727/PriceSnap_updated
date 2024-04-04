import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
    const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");      
    } catch (error) {
        console.log("error in connection");
    }
};

export default connectDB;