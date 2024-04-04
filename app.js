import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors'
import Phone from "./models/Phone.js"
import Scrap_data from "./models/scrapped_model.js";
import puppeteer from 'puppeteer';
import scrapping_logic from "./scrapping/scrapping_logic.js"
//configure env
dotenv.config();

//database config
connectDB();
//rest object
// import "./Data/Phones_data.js"
// import "./Data/scrapped_data.js"
const app=express();

//middlewares 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//routes
app.use("/api/v1/auth",authRoutes);

app.get("/api/v1/phones", async (req, res) => {
  try {
    // Fetch phone data from the database (using your model or other method)
    // For example, if you have a Phone model:
    const phoneData = await Phone.find(); // Adjust based on your model and database structure

    res.json(phoneData);
  } catch (error) {
    console.error('Error fetching phone data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.use("/api/v1/scrapping",scrapping_logic);

//rest api
app.get("/",function(request,response){
    response.send({
        meassage:"Welcome to our app"
    });
});
const PORT=process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("Server started on port 3001");
});

























// app.get("/api/v1/scrape1", async (req, res) => {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         const urls = [
//             "https://www.amazon.in/dp/B09G9BL5CP", // Amazon URL
//             "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f", // Flipkart URL
//             //  "https://amzn.in/d/7cyn1qC", // Amazon URL
//             // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
//         ];
        
//         // Amazon scraping logic
//         await page.goto(urls[0]);
//         await page.waitForSelector('.a-price-whole'); // Wait for the price element
//         const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
//         // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
//         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
//         if (!amazonRating) {
//             amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
//         }
        
//         // Flipkart scraping logic
//         await page.goto(urls[1]);
//         await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
//         const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
//         const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
//         browser.close();
//         console.log("Data fetched successfully");
//         res.json({
//             amazonPrice: "₹" + amazonPrice,
//             amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
//             flipkartPrice: flipkartPrice,
//             flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
//         });
//     } catch (error) {
//         console.error('Error scraping:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get("/api/v1/scrape", async (req, res) => {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         const urls = [
//             "https://www.amazon.in/dp/B09G9BL5CP", // Amazon URL
//             "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f" // Flipkart URL
//         ];

//         // Amazon scraping logic
//         await page.goto(urls[0]);
//         await page.waitForSelector('.a-price-whole'); // Wait for the price element
//         const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text

//         // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
//         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
//         if (!amazonRating) {
//             amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
//         }

//         // Flipkart scraping logic
//         await page.goto(urls[1]);
//         await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
//         const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
//         const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text

//         browser.close();
//         console.log("Data fetched successfully");
//         res.json({
//             amazonPrice: "₹" + amazonPrice,
//             amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
//             flipkartPrice: flipkartPrice,
//             flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
//         });
//     } catch (error) {
//         console.error('Error scraping:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });





// app.get("/api/v1/scraped-data", async (req, res) => {
//     try {
//       // Fetch scraped data from the database
//       const scrapedData = await Scrap_data.findOne({ _id: '65fecc77cc931cea1616129c' }); // Replace 'your_id_here' with the desired ID to search for
  
//       if (scrapedData) {
//         res.json(scrapedData);
//       } else {
//         res.json({ message: 'Scraped data not found in the database' });
//       }
//     } catch (error) {
//       console.error('Error fetching scraped data:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });











//   app.post("/api/v1/store-data", async (req, res) => {
//     try {
//       // Parse the incoming JSON data from the request body
//       const scrapedData = req.body;
  
//       // Store the scraped data in the database using Mongoose
//       const newScrapedData = await Scrap_data.create(scrapedData);
  
//       // Respond with a success message or any relevant data
//       res.status(200).json({ message: 'Scraped data stored successfully', data: newScrapedData });
//     } catch (error) {
//       console.error('Error storing scraped data:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//scraping
// app.get("/api/v1/scrape", async (req, res) => {
//   try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
//       const urls = [
//           "https://amzn.in/d/8xBZk9b",
//           "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f"
//       ];
      
// // class="a-size-base a-color-base" rating class amazon
//       // Scraping logic for Amazon
//       await page.goto(urls[0]);
//       await page.waitForSelector("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole");
//       const amazonPrice = await page.evaluate(() => {
//           const price1 = document.querySelector("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole");
//           return price1.innerHTML;
//       });

//       await page.waitForSelector("#productTitle");
//       const amazonTitle = await page.evaluate(() => {
//           const heading = document.querySelector("#productTitle");
//           return heading.innerHTML;
//       });

//       // Scraping logic for Flipkart
//       await page.goto(urls[1]);
//       await page.waitForSelector("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._30jeq3._16Jk6d");
//       const flipkartPrice = await page.evaluate(() => {
//           const price1 = document.querySelector("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._30jeq3._16Jk6d");
//           return price1.innerHTML;
//       });

//       browser.close();
//       console.log("data fetched");
//       res.json({
//           amazonTitle: amazonTitle,
//           amazonPrice: "₹" + amazonPrice,
//           flipkartPrice: flipkartPrice
//       });
//   } catch (error) {
//       console.error('Error scraping:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get("/api/v1/scrape2", async (req, res) => {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         const urls = [
//             "https://amzn.in/d/7cyn1qC", // Amazon URL
//             "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6&cmpid=product.share.pp&lid=LSTMOBGMUHCGYAU8WX6DNWMWX" // Flipkart URL
//         ];

//         // Amazon scraping logic
//         await page.goto(urls[0]);
//         await page.waitForSelector('.a-price-whole'); // Wait for the price element
//         const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text

//         // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
//         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
//         if (!amazonRating) {
//             amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
//         }

//         // Flipkart scraping logic
//         await page.goto(urls[1]);
//         await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
//         const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
//         const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text

//         browser.close();
//         console.log("Data fetched successfully");
//         res.json({
//             amazonPrice: "₹" + amazonPrice,
//             amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
//             flipkartPrice: flipkartPrice,
//             flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
//         });
//     } catch (error) {
//         console.error('Error scraping:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });