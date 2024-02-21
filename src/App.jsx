import Navbar from "./Components/Navbar2/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Components/HomePages/Home/Home";
import About from "./Components/AboutUspages/About/About";
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Fotter';
import Portfolio from "./Components/PortFoliPages/Portfolio/Portfolio";
import Career from "./Components/CareerPages/Career/Career";
import Template from "./Components/PortFoliPages/Template/Template";
import Contact from "./Components/ContactUsPages/ContactPage/Contact";
import BlogMain from "./Components/BlogPages/Blog/Blog";
import FirstBlog from "./Components/BlogPages/SubBlog/FirstBlogpage/FirstBlog";
import ServicesMain from './Components/ServicesPages/ServicesMain/Services'
import './App.css';
import Modal from "./Components/Modal/Modal";
import SEO from "./Components/ServicesPages/SEO/SEO";
import SocialMedia from "./Components/ServicesPages/SocialMedia/SocialMedia";
import SocialMediaOpt from "./Components/ServicesPages/Social-Media-optimization/SocialMediaOptimization";
import Development from "./Components/DevelopmentsPages/Development";
import Laraveldevlopment from "./Components/DevelopmentsPages/Laraveldevelopment/Laraveldevlopment";



export default function App() {
  return (
    <>
      <Navbar/>
      <Modal/>
      <Container fluid className="noscroll" >  
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/seo" element={<SEO/>}/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/development"  element={<Development/>}></Route>
          <Route path="/template"  element={<Template/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blogmain" element={<BlogMain/>}></Route>
          <Route path="/firstBlog" element={<FirstBlog/>}></Route>
          <Route path="/socialMedia" element={<SocialMedia/>}></Route>
          <Route path="/laraveldevlopment" element={<Laraveldevlopment/>}></Route>
        </Routes>
        <Footer/>
      </Container>
    </>
  );
}
