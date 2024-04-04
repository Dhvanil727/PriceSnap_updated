// import React, { createContext, useReducer } from "react";

import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2";
import Product3 from "./Products/Product3";
import Product4 from "./Products/Product4";
import Product5 from "./Products/Product5";
import Product6 from "./Products/Product6";
import Product7 from "./Products/Product7";
import Product8 from "./Products/Product8";
import Product9 from "./Products/Product9";
import Product10 from "./Products/Product10";
import Product11 from "./Products/Product11";
import Product12 from "./Products/Product12";
import Product13 from "./Products/Product13";
import Product14 from "./Products/Product14";
import Product15 from "./Products/Product15";
import Product16 from "./Products/Product16";
import Product17 from "./Products/Product17";
// import Logout from "./pages/Auth/Logout";
// import { initialState, reducer } from "./reducer/UseReducer";




// export const UserContext = createContext(initialState);
// const Routing = () => {
//   return (
//     <>
//    <Routes>
   
//       <Route path="/" element={<Homepage />}/>
//       <Route path="/register" element={<Register />}/>
//       <Route path="/login" element={<Login />}/>
//       <Route path="/logout" element={<Logout />}/>
//       <Route path="/about" element={<About />}/>  
//       <Route path="/contact" element={<Contact />}/>
//       <Route path="/policy" element={<Policy />}/>
//       <Route path="/product1" element={<Product1 />}/>
//       <Route path="/product2" element={<Product2 />}/>
//       <Route path="/product3" element={<Product3 />}/>
//       <Route path="/product4" element={<Product4 />}/>
//       <Route path="/product5" element={<Product5 />}/>
//       <Route path="/product6" element={<Product6 />}/>
//       <Route path="/product7" element={<Product7 />}/>
//       <Route path="/product8" element={<Product8 />}/>
//       <Route path="/product9" element={<Product9 />}/>
//       <Route path="/product10" element={<Product10 />}/>
//       <Route path="/product11" element={<Product11 />}/>
//       <Route path="/product12" element={<Product12 />}/>
//       <Route path="/product13" element={<Product13 />}/>
//       <Route path="/product14" element={<Product14 />}/>
//       <Route path="/product15" element={<Product15 />}/>
//       <Route path="*" element={<Pagenotfound />}/>
//    </Routes>
//     </>
//   );
// };

function App() {
  return (
    <>
   <Routes>
   
      <Route path="/" element={<Homepage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/about" element={<About />}/>  
      <Route path="/contact" element={<Contact />}/>
      <Route path="/policy" element={<Policy />}/>
      <Route path="/product1" element={<Product1 />}/>
      <Route path="/product2" element={<Product2 />}/>
      <Route path="/product3" element={<Product3 />}/>
      <Route path="/product4" element={<Product4 />}/>
      <Route path="/product5" element={<Product5 />}/>
      <Route path="/product6" element={<Product6 />}/>
      <Route path="/product7" element={<Product7 />}/>
      <Route path="/product8" element={<Product8 />}/>
      <Route path="/product9" element={<Product9 />}/>
      <Route path="/product10" element={<Product10 />}/>
      <Route path="/product11" element={<Product11 />}/>
      <Route path="/product12" element={<Product12 />}/>
      <Route path="/product13" element={<Product13 />}/>
      <Route path="/product14" element={<Product14 />}/>
      <Route path="/product15" element={<Product15 />}/>
      <Route path="/product16" element={<Product16 />}/>
      <Route path="/product17" element={<Product17 />}/>
      <Route path="*" element={<Pagenotfound />}/>
   </Routes>
    </>
  );
}



// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       <Routing />
//     </UserContext.Provider>
//   );
// }

export default App;
