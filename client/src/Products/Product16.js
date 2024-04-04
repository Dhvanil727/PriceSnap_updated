import React, { useState, useEffect } from 'react';
import './Product2.css'; // Import your CSS file
import Layout from '../components/Layout/Layout'

const Product16 = () => {
  const [scrapedData, setScrapedData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/v1/scrapping/Product16`) // Replace with your scraping endpoint URL
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
        <img src="/images/acer_aspire7amdr5.jpg" alt="Phone" className="phone-image" />
        <div className="phone-details">
          <h3>Acer Aspire 7 AMD Ryzen 5  </h3>
          <h3> Hexa Core 5500U 15.6 inches</h3>
          <p>Amazon Price: {scrapedData.amazonPrice}</p>
          <p>Amazon Rating: {scrapedData.amazonRating}</p>
          <p>Flipkart Price: {scrapedData.flipkartPrice}</p>
          <p>Flipkart Rating: {scrapedData.flipkartRating}</p>
          <div className="buttons">
            <button className="amazon-button" onClick={() => window.open("https://amzn.in/d/bZZqbWa", '_blank')}>Buy on Amazon</button>
            <button className="flipkart-button" onClick={() => window.open("https://www.flipkart.com/acer-aspire-7-amd-ryzen-5-hexa-core-r5-5500u-8-gb-512-gb-ssd-windows-11-home-4-graphics-nvidia-geforce-gtx-1650-a715-42g-a715-42g-r2ne-gaming-laptop/p/itmaae437ea23dce", '_blank')}>Buy on Flipkart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product16;
