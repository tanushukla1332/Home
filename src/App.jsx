import Navbar from "./Components/Navbar2/Navbar/Navbar";
import UI from "./Components/ServicesPages/UiDesign/UI";
import { Route, Routes } from "react-router";
import Home from "./Components/HomePages/Home/Home";
import About from "./Components/AboutUspages/About/About";
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Fotter';
import Portfolio from "./Components/PortFoliPages/Portfolio/Portfolio";
import Career from "./Components/AboutUspages/CareerPages/Career";
import Template from "./Components/PortFoliPages/Template/Template";
import Contact from "./Components/ContactUsPages/ContactPage/Contact";
import BlogMain from "./Components/BlogPages/Blog/Blog";
import FirstBlog from "./Components/BlogPages/SubBlog/FirstBlogpage/FirstBlog";
import ServicesMain from './Components/ServicesPages/ServicesMain/Services'
import './App.css';
import ModalExample from "./Components/Modal/Modal";
import SEO from "./Components/ServicesPages/SEO/SEO";
import SocialMedia from "./Components/ServicesPages/SocialMedia/SocialMedia";
import Development from "./Components/DevelopmentsPages/Development";
import Clients from "./Components/ContactUsPages/OurClientsPage/Clients/Clients";
import Laraveldevlopment from "./Components/DevelopmentsPages/Laraveldevelopment/Laraveldevlopment";
import CodeIgniter from "./Components/DevelopmentsPages/Codeigniter/CodeIgniter";
import Php from "./Components/DevelopmentsPages/PhpDevelopment/Php";
import HtmlPage from "./Components/DevelopmentsPages/HtmlDevelopment/Htmlpage";
import RubyRails from "./Components/DevelopmentsPages/RubyRails/RubyRails";
import SEM from "./Components/ServicesPages/SEM/SEM";
import SocialMediaOpt from "./Components/ServicesPages/Social-Media-optimization/SocialMediaOptimization";
import ECommmerce from "./Components/ServicesPages/E-Commerce/E-commerce";
import Email from "./Components/ServicesPages/Email-Marketing/Email";
import SocialMediaMarketing from "./Components/ServicesPages/SM-Marketing/SocalMedIaMarketing";
import Android from "./Components/ServicesPages/Android/Android";
import IOS from "./Components/ServicesPages/IosDeveloper/IOS";
import { useEffect } from "react";

import { useLocation } from "react-router";
import { Helmet } from "react-helmet";





export default function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
    <Helmet>
        <title>Razobyte</title>
        <meta name="description" content="This is my Inital page" />
        <meta name="keywords"content="Home page content" />
      </Helmet> 
      
      <Navbar/>
    
      <ModalExample/>
      <Container fluid className="noscroll" >  
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/seo" element={<SEO/>}/>
          <Route path="/sem" element={<SEM/>}/>
          <Route path="/socialMediaOpt" element={<SocialMediaOpt/>}/>
          <Route path="/eCommerce" element={<ECommmerce/>}/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/development"  element={<Development/>}></Route>
          <Route path="/template"  element={<Template/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blogmain" element={<BlogMain/>}></Route>
          <Route path="/firstBlog" element={<FirstBlog/>}></Route>
          <Route path="/socialMedia" element={<SocialMedia/>}></Route>
          <Route path="/laraveldevlopment" element={<Laraveldevlopment/>}></Route>
          <Route path="/clients" element={<Clients/>}></Route>
          <Route path="/codeIgniter" element={<CodeIgniter/>}></Route>
          <Route path="/php" element={<Php/>}></Route>
          <Route path="/htmlPage" element={<HtmlPage/>}></Route>
          <Route path="/rubyRails" element={<RubyRails/>}></Route>
          <Route path="/uI" element={<UI/>}></Route>
          <Route path="/email" element={<Email/>}></Route>
          <Route path="/socialMediaMarketing" element={<SocialMediaMarketing/>}></Route>
          <Route path="/Android" element={<Android/>}></Route>
          <Route path="/iOS" element={<IOS/>}></Route>
        </Routes>
        <Footer/>
      </Container>
    </>
  );
}
