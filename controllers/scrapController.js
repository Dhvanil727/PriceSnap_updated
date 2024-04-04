import puppeteer from 'puppeteer';

export const Product1_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/8U55ukU", // Amazon URL
            "https://www.flipkart.com/apple-iphone-15-pro-max-black-titanium-256-gb/p/itmd170cfc1dec9e", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0]);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
        let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1]);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Product2_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/1yDs7Bo", // Amazon URL
            "https://www.flipkart.com/apple-iphone-15-pro-blue-titanium-1-tb/p/itme90f8c7fd0ad7", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0]);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
        let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1]);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Product3_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/42ymvSs", // Amazon URL
            "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0]);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
        let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1]);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product4_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/iBqskFu", // Amazon URL
            "https://www.flipkart.com/apple-iphone-15-plus-black-128-gb/p/itme3a53984760fb", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0]);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
        let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1]);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const Product5_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://www.amazon.in/dp/B09G9BL5CP", // Amazon URL
            "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0]);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
        let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1]);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product6_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://www.amazon.in/dp/B0CS5Y7H6T", // Amazon URL
            "https://www.flipkart.com/samsung-galaxy-s24-ultra-5g-titanium-black-512-gb/p/itmfde5d3afe6bda", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
        const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
        const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
            flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Product7_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://www.amazon.in/dp/B0CS5Z4GD3", // Amazon URL
            "https://www.flipkart.com/samsung-galaxy-s24-ultra-5g-titanium-violet-256-gb/p/itmd4f51262e3e6b", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product8_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://www.amazon.in/dp/B0BTYVTMT6", // Amazon URL
            "https://www.flipkart.com/samsung-galaxy-s23-5g-cream-256-gb/p/itm745d4b532623e", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product9_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://www.amazon.in/dp/B0BYJ6ZMTS", // Amazon URL
            "https://www.flipkart.com/oneplus-nord-buds-2-earbuds-25db-active-noise-cancellation-bluetooth-headset/p/itm1564d0b502ff6", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product10_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/hi9mnxE", // Amazon URL
            "https://www.flipkart.com/oneplus-nord-buds-2r-ear-earbuds-dual-mic-ai-crystal-clear-call-bluetooth-headset/p/itm2560f6f9b1d5b", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product11_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/fDuvRra", // Amazon URL
            "https://www.flipkart.com/oneplus-buds-z2-active-noise-cancellation-bluetooth-headset/p/itm88b7c4b3f5397", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product12_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/8pTj6Ck", // Amazon URL
            "https://www.flipkart.com/boat-stone-350-hulk-10-w-bluetooth-speaker/p/itm5c44d02545050", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product13_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/1jdHnr9", // Amazon URL
            "https://www.flipkart.com/boat-stone-650-10-w-bluetooth-speaker/p/itm3d7a934f4b632", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const Product14_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/bOTgb7U", // Amazon URL
            "https://www.flipkart.com/samsung-galaxy-z-fold5-phantom-black-512-gb/p/itm4d14abce6dc2f", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Product15_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/15feccX", // Amazon URL
            "https://www.flipkart.com/samsung-galaxy-z-flip5-mint-256-gb/p/itm3038611e95123", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const Product16_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/bZZqbWa", // Amazon URL
            "https://www.flipkart.com/acer-aspire-7-amd-ryzen-5-hexa-core-r5-5500u-8-gb-512-gb-ssd-windows-11-home-4-graphics-nvidia-geforce-gtx-1650-a715-42g-a715-42g-r2ne-gaming-laptop/p/itmaae437ea23dce", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Product17_controller=async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const urls = [
            "https://amzn.in/d/2ZHWYvS", // Amazon URL
            "https://www.flipkart.com/acer-nitro-v-intel-core-i5-13th-gen-13420h-16-gb-512-gb-ssd-windows-11-home-6-graphics-nvidia-geforce-rtx-4050-anv15-51-gaming-laptop/p/itm1cae1dc4ec6c8", // Flipkart URL
            //  "https://amzn.in/d/7cyn1qC", // Amazon URL
            // "http://dl.flipkart.com/dl/oneplus-11-5g-eternal-green-256-gb/p/itm668119d115289?pid=MOBGMUHCGYAU8WX6"
        ];
        
        // Amazon scraping logic
        await page.goto(urls[0],60000);
        await page.waitForSelector('.a-price-whole'); // Wait for the price element
        const amazonPrice = await page.$eval('.a-price-whole', element => element.textContent); // Get the price text
        
        // Some pages might load ratings dynamically, so we'll try to fetch them from another suitable element
         let amazonRating = await page.$eval('.a-size-base.a-color-base', element => element.textContent); // Try fetching from original class
        if (!amazonRating) {
            amazonRating = await page.$eval('.a-icon-star-small', element => element.textContent); // Try fetching from another suitable class
        }
        
        // Flipkart scraping logic
        await page.goto(urls[1],60000);
        await page.waitForSelector('._30jeq3._16Jk6d'); // Wait for the price element
       const flipkartPrice = await page.$eval('._30jeq3._16Jk6d', element => element.textContent); // Get the price text
       const flipkartRating = await page.$eval('._3LWZlK', element => element.textContent); // Get the rating text
        
        browser.close();
        console.log("Data fetched successfully");
        res.json({
            amazonPrice: "₹" + amazonPrice,
            amazonRating: amazonRating ? amazonRating.trim() : 'Rating not available', // Trim to remove leading and trailing spaces
          flipkartPrice: flipkartPrice,
            flipkartRating: flipkartRating.trim() // Trim to remove leading and trailing spaces
        });
    } catch (error) {
        console.error('Error scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};