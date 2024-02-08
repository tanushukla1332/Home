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
import Contact from "./Components/ContactUsPages/ContactPage/Contact";
import BlogMain from "./Components/BlogPages/Blog/Blog";
import FirstBlog from "./Components/BlogPages/SubBlog/FirstBlogpage/FirstBlog";
import Development from './Components/DevelopmentsPages/DetailPage/DevelopmentMain/Development'
import './App.css';
import Modal from "./Components/Modal/Modal";


export default function App() {
  return (
    <>
      <Header/>
      <Modal/>
      <Container fluid className="noscroll" >  
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/development"  element={<Development/>}></Route>
          <Route path="/template"  element={<Template/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blogmain" element={<BlogMain/>}></Route>
          <Route path="/firstBlog" element={<FirstBlog/>}></Route>
        </Routes>
        <Footer/>
      </Container>
    </>
  );
}
