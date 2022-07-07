// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { FaAlignRight } from "react-icons/fa";
// import MySociety from "../images/logo_mySociety.svg";





// export default class Navbar extends Component {
//   state = {
//     isOpen: false
//   };
//   handleToggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };
//   render() {
//     return (
//       <nav className="navbar">
//         <div className="nav-center">
//           <div className="nav-header">
//             <Link to="/" style={{height:1,width:10}}>
//               <img src={MySociety} alt="Beach Resort"  height={45}  />
             
//             </Link>
           
//             <button
//               type="button"
//               className="nav-btn"
//               onClick={this.handleToggle}
//             >
//               <FaAlignRight className="nav-icon" />
//             </button>
//           </div>
//           <ul
//             className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
//             <li >
//             <Link to="/" style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,}} >MySociety</Link>
//             </li>
//           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//           <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/">About</Link>
//             </li>
           
//             <li>
//               <Link to="/rooms">Flats</Link>
//             </li>
            
//             <li>
//               <Link to="/Contact">Contact Us</Link>
//             </li>
           
//             <li>
//               <Link to="/">Log In</Link>
//             </li>
//             <li>
//               <Link to="/">Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }



import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import MySociety from "../images/logo_mySociety.svg";
import { useAuth } from './auth';

export default function Navbar() {
  const state = {
    isOpen: false
  };
  const auth = useAuth()
  const navigate = useNavigate()

  const handleToggle = () => {
    this.setState({ isOpen: !state.isOpen });
  };
  
  const handleLogout = () =>{
    auth.logoutUser()
    navigate("/")
  }

  // const handleMyFlats = () =>{
  //   auth.getMyFlats()
  // }

  // const hanleAllFlats = () => {
  //   auth.getAllFlats()
  // }


  

  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to={localStorage.getItem("userId")?"/home":"/"} style={{height:1,width:10}}>
              <img src={MySociety} alt="Beach Resort"  height={55}  />
            
            </Link>
          
            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={state.isOpen ? "nav-links show-nav" : "nav-links"}>  
            <li >
            <Link to="/home" style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,}} >MySociety</Link>
            </li>        
            {localStorage.getItem("userId") && (
              <>
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
              
            {localStorage.getItem("Role")==="Buyer" && (
              <li>
              <Link to="/rooms" >Flats</Link>
            </li>
            )}
            

            {localStorage.getItem("Role")==="Seller" && (<>
              <li>
              <Link to="/addflat">Add Flat</Link>
            </li>

            <li>
              <Link to="/myflats" >MyFlats</Link>
            </li>
            </>)}

            <li>
              <Link to="/selectrole">Switch Role</Link>
            </li>
            
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </li>
              </>
            )}
            {!localStorage.getItem("userId") && (
              <li>
              <Link to="/">Log In/Sign Up</Link>
            </li>
            )}
          </ul>
        </div>
      </nav>

    </div>
  )
}
  