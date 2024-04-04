
import mongoose from 'mongoose';

const scrapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amazonPrice: {
    type: Number,
    required: true,
  },
  flipkartPrice: {
    type: Number,
    required: true,
  },
  amazonRating: {
    type: Number,
    default: 0,
  },
  flipkartRating: {
    type: Number,
    default: 0,
  }
});




export default mongoose.model('Scrap_data',scrapSchema);
