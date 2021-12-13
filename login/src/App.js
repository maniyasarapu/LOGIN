import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Error from "./components/error/Error";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={ <About />}/>
          
          <Route path="/error" element={ <Error />}/>
           
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
