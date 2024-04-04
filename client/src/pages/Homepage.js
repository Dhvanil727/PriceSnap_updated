// import React from 'react'
// import Layout from '../components/Layout/Layout'
// import "../styles/Homepage.css";
// import { Link } from 'react-router-dom';
// import phones  from '../Products/Phones_List';
// import Samsung from '../Products/Samsung_list';
// import Bluetooth_devices from '../Products/Bluetooth_devices';

// const Homepage = () => {

//   return (
//     <Layout>
//       <h2>Welcome to PRICESNAP</h2>
      
//       <div className='maindiv'>
//         <h3>Category: iPhones</h3>
//       <div className="product-grid">
//         {phones.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.imageUrl} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <Link to={`/Product${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//       <h3>Category:Samsung Phones</h3>
//       <div className="product-grid">
//         {Samsung.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.imageUrl} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <Link to={`/Product${product.id}`}>View Details</Link>
//           </div>
          
//         ))}
//       </div>
//       <h3>Category:Bluetooth Earbuds and Speakers</h3>
//       <div className="product-grid">
//         {Bluetooth_devices.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.imageUrl} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <Link to={`/Product${product.id}`}>View Details</Link>
//           </div>
          
//         ))}
//       </div>
//       </div>
//     </Layout>
//   );
// };

// export default Homepage
// import React from 'react';
import React from 'react'; // Add useContext to the import statement
// import React, { useContext } from 'react'; // Add useContext to the import statement

import Layout from '../components/Layout/Layout';
import "../styles/Homepage.css";
import { Link } from 'react-router-dom';
import phones from '../Products/Phones_List';
// import Samsung from '../Products/Samsung_list';
import Bluetooth_devices from '../Products/Bluetooth_devices';
import Laptops from '../Products/Laptops';
// import { UserContext } from '../App';


// const navigateToProduct = (productId) => {
//   // Navigate to the product page with the appropriate product ID
//   // You can replace this with your actual product page URL structure
//   return `/Product${productId}`;
// };

const Homepage = () => {
  // const{state}=useContext(UserContext);
  //const navigate=useNavigate();

 const handleShowSmartphonesClick = () => {
    const smartphonesSection = document.getElementById('smartphones');
    smartphonesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowEarbudsClick = () => {
    const earbudsSection = document.getElementById('earbuds');
    earbudsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleShowLaptopsClick = () => {
    const earbudsSection = document.getElementById('laptop');
    earbudsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className='homepage'>
        <div id="image">
          <div className="button-container">
            <button onClick={handleShowSmartphonesClick}>Show Smartphones</button>
          </div>
        </div>

        <div className='category-section'>
          <h3 className="category-heading" id="sp">smartphones</h3>
          <div className="product-grid" id="smartphones">
            {phones.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/Product${product.id}`}>View Details</Link>
                {/* <Link to={state ? navigateToProduct(product.id) : '/login'}>View Details</Link> */}

              </div>
            ))}
          </div>
        </div>

        {/* <div className='category-section'>
          <h3> </h3>
          <div className="product-grid">
            {Samsung.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/Product${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div> */}

        <div id="image3">
          <div className="button-container2">
            <button onClick={handleShowEarbudsClick}>Show Bluetooth Devices</button>
          </div>
        </div>

        <div className='category-section' id="earbuds">
        <h3 className="category-heading" id="eb">Bluetooth Devices</h3>
          <div className="product-grid">
            {Bluetooth_devices.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/Product${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>

        <div id="image4">
          <div className="button-container3">
            <button onClick={handleShowLaptopsClick}>Show Laptops</button>
          </div>
        </div>

        <div className='category-section' id="laptop">
        <h3 className="category-heading" id="lp">Laptops</h3>
          <div className="product-grid">
            {Laptops.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/Product${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </Layout>
  );
};

export default Homepage;