import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
       <NavLink className="navbar-brand" to="/">
       </NavLink>
 

             <NavLink className="nav-link btn" style={{textAlign: "center" , display: "block", fontSize: "3vh"}}  to="/create">
               <button className="btn btn-dark btn-lg" >Create Record</button> 
             </NavLink>

   </div>
 );
}