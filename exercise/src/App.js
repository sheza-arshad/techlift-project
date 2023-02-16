import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
function App() {
  return (
    <div>
 
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about"  element={<About/>}/>
        </Routes>

        
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
