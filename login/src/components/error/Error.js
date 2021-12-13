import React from "react";
import './Error.css'
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className="er">
      <h1>We are sorry,page not found</h1>
      <p>the page you are looking for might have been removed </p>
      <button><Link to="/home">Home</Link></button>
    </div>
  );
};

export default Error;
