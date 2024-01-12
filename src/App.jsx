import { useState } from "react";
import Header from "./Components/Navbar/Navbar";
import { Route,Routes } from "react-router";
import Home from "./Components/HomePages/Home/Home";
import About from "./Components/AboutUsPages/About/About";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Fotter'

import './App.css'


export default function App() {
  
 

  

  return (
    <>
    <Header />
    <Container fluid>
 
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />}/>
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />


    </Container>
      </>
        
  );
}