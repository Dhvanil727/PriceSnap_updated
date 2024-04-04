import Phone from '../models/Phone.js'; // Ensure the file extension is included

// Sample phone data
const phonesData = [
  {
    name: 'OnePlus 11R 5G',
    description: 'Sonic Black, 8GB RAM, 128GB Storage',
    ratings: 4.5,
    price: 39999,
  },
  {
    name: 'Phone 4',
    description: 'This is the description for Phone 2.',
    ratings: 4.0,
    price: 499.99,
  },
  // Add more phone data as needed
];

// Add phones to the database
Phone.insertMany(phonesData)
.then(() => {
  console.log('Sample phones added to the database');
  // mongoose.connection.close(); // Close the connection after data insertion
})
.catch(error => {
  console.error('Error adding sample phones to the database:', error);
  
});


//need to export this and use it in routes and all follow all steps from chatgpt
// server/scripts/dataInsertion.js
// import mongoose from 'mongoose';
// import connectDB from "./config/db.js";
// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// connectDB();