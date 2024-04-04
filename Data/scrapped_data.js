import Scrap_data from "../models/scrapped_model.js";

const newData = new Scrap_data({
    name: 'Apple 11',
    amazonPrice: 50000,
    flipkartPrice: 45000,
    amazonRating: 4.5,
    flipkartRating: 3.8,
  });
  
  // Save the new data to the database
  newData.save()
    .then(savedData => {
      console.log('Data saved successfully:', savedData);
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });