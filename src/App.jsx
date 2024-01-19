import Header from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Components/HomePages/Home/Home";
import About from "./Components/AboutUspages/About/About";
import Services from "./Components/Services/Services";
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Fotter';
import Portfolio from "./Components/PortFoliPages/Portfolio/Portfolio";
import Career from "./Components/CareerPages/Career/Career";
import Template from "./Components/PortFoliPages/Template/Template";

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Container fluid className="noscroll" >  
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career"  element={<Career/>}></Route>
          <Route path="/template"  element={<Template/>}></Route>
        </Routes>
        <Footer />
      </Container>
    </>
  );
}
