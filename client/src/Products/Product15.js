import React, { useState, useEffect } from 'react';
import './Product2.css'; // Import your CSS file
import Layout from '../components/Layout/Layout'

const Product15 = () => {
  const [scrapedData, setScrapedData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/v1/scrapping/Product15`) // Replace with your scraping endpoint URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Scraped data received:', data); // Check the received data
        setScrapedData(data);
      })
      .catch(error => {
        console.error('Error fetching scraped data:', error);
        // Additional error handling, such as setting a flag for UI feedback
      });
  }, []);

  if (!scrapedData) {
    return (
      <Layout>
        <div className="center">
          <div className="loading-container">
            <div className="loading-ring"></div>
            <div>Loading...</div>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="product-container">
        <img src="/images/samsung_galaxy_zflip5.jpg" alt="Phone" className="phone-image" />
        <div className="phone-details">
          <h3>Samsung Galaxy Z Flip5 5G </h3>
          <h3> (Mint, 8GB RAM, 256GB Storage)</h3>
          <p>Amazon Price: {scrapedData.amazonPrice}</p>
          <p>Amazon Rating: {scrapedData.amazonRating}</p>
          <p>Flipkart Price: {scrapedData.flipkartPrice}</p>
          <p>Flipkart Rating: {scrapedData.flipkartRating}</p>
          <div className="buttons">
            <button className="amazon-button" onClick={() => window.open("https://amzn.in/d/15feccX", '_blank')}>Buy on Amazon</button>
            <button className="flipkart-button" onClick={() => window.open("https://www.flipkart.com/samsung-galaxy-z-flip5-mint-256-gb/p/itm3038611e95123", '_blank')}>Buy on Flipkart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product15;
