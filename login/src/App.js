import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Error from "./components/error/Error";
import Navbar1 from "./components/Navbar1/Navbar1";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
        <Route path="/home" element={<Home />} />

          <Route path="/" element={<Signup />} />

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
