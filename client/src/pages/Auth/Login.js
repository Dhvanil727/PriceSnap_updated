
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        
          email,
          password,
      
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    
    <Layout title="Login">
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Login

// import React, { useContext, useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// import { UserContext } from "../../App";
// const Login = () => {
    

//    const {state,dispatch}=useContext(UserContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const navigate = useNavigate();
  
//     // form function
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        
//           email,
//           password,
      
//         });
//         if (res && res.data.success) {
//           dispatch({type:'USER',payload:true})
//           toast.success(res.data && res.data.message);
//           navigate("/");
//         } else {
//           toast.error(res.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error("Something went wrong");
//       }
//     };
//   return (
    
//     <Layout title="Login">
//     <div className="form-container" style={{ minHeight: "90vh" }}>
//       <form onSubmit={handleSubmit}>
//         <h4 className="title">LOGIN FORM</h4>

//         <div className="mb-3">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//             id="exampleInputEmail1"
//             placeholder="Enter Your Email "
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
       
//         <button type="submit" className="btn btn-primary">
//           LOGIN
//         </button>
//       </form>
//     </div>
//   </Layout>
//   )
// }

// export default Login;