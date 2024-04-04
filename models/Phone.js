
import mongoose from 'mongoose';
// import connectDB from "../config/db.js";
// connectDB();
const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
});




export default mongoose.model('Phone',phoneSchema);
