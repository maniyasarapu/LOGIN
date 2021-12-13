import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css" 
 

const Navbar = () => {
    return (
        <header >
        <nav className="directions">
           
              <div className="options"><Link to="/home">Home</Link></div>
          
              <div className="options"><Link to="/signup">Signup</Link></div>
           
              <div className="options"><Link to="/login">Login</Link></div>
           
             <div className="options"> <Link to="/contact">Contact</Link></div>
           
             <div className="options"> <Link to="/about">About</Link></div>
           
        </nav>
      </header>
    )
}

export default Navbar
