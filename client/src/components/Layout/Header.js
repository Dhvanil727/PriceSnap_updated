import React from "react";
import { NavLink,Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { UserContext } from "../../App";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" >
            <GiShoppingCart  style={{ fontSize: '40px' }}/> Pricesnap
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  
                 
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category"
                  className="nav-link "
                  
                  
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/Cart" className="nav-link">
                  Cart(0)
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
// import React, { useContext } from "react";
// import { NavLink,Link } from "react-router-dom";
// import { GiShoppingCart } from "react-icons/gi";
// import { UserContext } from "../../App";

// const Header = () => {
//   const{state,dispatch}=useContext(UserContext);
//   const RenderMenu=()=>{
//     if(state){
//       return(
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   to="/"
//                   className="nav-link"
                  
                 
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/category"
//                   className="nav-link "
//                  >
//                   Category
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/logout" className="nav-link">
//                   Logout
//                 </NavLink>
//               </li>
             
//             </ul>
//       )
//     }
//     else{
//       return(
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   to="/"
//                   className="nav-link"
                  
                 
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/category"
//                   className="nav-link "
                  
                  
//                 >
//                   Category
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/register" className="nav-link" >
//                   Register
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/login" className="nav-link">
//                   Login
//                 </NavLink>
//               </li>
//             </ul>
//       )
//     }
//   }
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link to="/" className="navbar-brand" >
//             <GiShoppingCart  style={{ fontSize: '40px' }}/> Pricesnap
//             </Link>
//             <RenderMenu/>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;