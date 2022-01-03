import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar1.css" 


const Navbar1 = () => {
    return (
        <div>
        <header >
        <nav className="directions">
           
              <div className="options"><Link to="/home">Home</Link></div>
          
              <div className="options"><Link to="/signup">Signup</Link></div>
           
              <div className="options"><Link to="/login">Login</Link></div>
           
        </nav>
      </header>
    </div>
    )
}

export default Navbar1
