import { FaAngleDown, FaSearch,FaAngleUp} from "react-icons/fa";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import '../Navbar/Navbar.css';
import { useState , useEffect, useRef } from "react";

const Navbar = () => {
  const [click,setClick]=useState(false)
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showServicesSection, setShowServicesSection] = useState(false);
  const[active,setActive]=useState(false)
  const [aboutmenu,setAboutMenu]=useState(false)
  const [showsubMenuEcommerce,setsubMenuEcommerce]=useState(false)
  const [showsubMenuDevelopment,setsubMenuDevelopment]=useState(false)
  const [showsubMenuDesign,setshowsubMenuDesign] =useState(false)
  const [showsubMenuDigital,setshowsubMenuDigital] =useState(false)
  const [showsubMenuGame,setshowsubMenuGame] =useState(false)
  const [showsubMenuMaintenance,setshowsubMenuMaintenace] =useState(false)
  const [showsubMenuMobile,setshowsubMenuMobile] =useState(false)
  const dropdownRef = useRef(null);

  const toggleEcommerceMenu=()=>{
    setsubMenuEcommerce(!showsubMenuEcommerce)
  }
  const toggleMobile=()=>{
    setshowsubMenuMobile(!showsubMenuMobile)
  }
  const toggleMaintenace=()=>{
    setshowsubMenuMaintenace(!showsubMenuMaintenance)
  }
  const toggleGame=()=>{
    setshowsubMenuGame(!showsubMenuGame)
  }
  const toggleDigitalMenu=()=>{
    setshowsubMenuDigital(!showsubMenuDigital)
  }
  const toggleDevelopment=()=>{
    setsubMenuDevelopment(!showsubMenuDevelopment)
  }
  
  const togglesubMneu=()=>{
    setshowsubMenuDesign(!showsubMenuDesign)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

 
 
  

const handleAboutMenu=()=>{
  setAboutMenu(!aboutmenu)
  setShowAboutSection(!aboutmenu);
}

  const handleActive=()=>{
    setActive(!active)
    setShowServicesSection(!showServicesSection)
  }


  const handleClick=()=>{
    setClick(!click)
  }
  const content= <>

  <div   className="lg:hidden z-1000 block absolute top-26 h-[90vh] w-50  right-0 bg-white backdrop-blur-lg bg-opacity-30  py-3">
  <ul className="flex flex-col gap-[25px] text-[18px] items-center ">
    <Link to='/'  className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Home</li></Link>

    
    {/* Mega Menu Start*/}
    <div className="group">
      <div className="flex items-center">
        <Link
        
          className="navlinkmenutitle no-underline flex items-center disable"
          onClick={handleAboutMenu}
        >
          <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'>
            About
          </li>
        </Link>
        {!showAboutSection && (
          <IoIosArrowForward
            className="text-[#5e5e5e] cursor-pointer"



            onClick={handleAboutMenu}
            size={25}
          />
          
        )}
      </div>
      {showAboutSection && (
        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
          <div className="flex items-center">
            <div className="w-96">
          <span className="flex items-center justify-center pt-3"> 
          {showAboutSection && (
              <IoIosArrowBack
                className="text-[#5e5e5e]  cursor-pointer"
                onClick={handleAboutMenu}
                size={25}
              />
            )}
            <h6 className="text-[#3b7fbf]   font-[550] ">AboutUs</h6>
            </span> 
              <ul className="flex flex-col items-center justify-center">
              <Link  to ="/career" className="navlinkmenutitle no-underline hover:no-underline">  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Career</li> </Link>
              <Link  to ="/clients" className="navlinkmenutitle no-underline  hover:no-underline">  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Our Clients</li> </Link>
                {/* Add other submenu items as needed */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
      {/* Mega Menu End*/} 
    {/* Mega Menu Start*/}
    <div className="group">
    <div className="flex items-center">
      <Link
        to="/"
        className="navlinkmenutitle no-underline flex items-center disable"
        onClick={handleActive}
      >
        <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'>
          Services
        </li>
      </Link>
      {!showServicesSection && (
        <IoIosArrowForward
          className="text-[#5e5e5e] cursor-pointer"
          onClick={handleActive}
          size={25}
        />
      )}
    </div>
    {showServicesSection && (
      <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
        <div className="flex items-center ">
          <div className="w-96">
        <span className="flex items-center pt-3 justify-center"> 
        {showServicesSection && (
            <IoIosArrowBack
              className="text-[#5e5e5e]  cursor-pointer"
              onClick={handleActive}
              size={25}
            />
          )}
          <h6 className="font-[550] text-[#3b7fbf] text-[20px]">Services</h6>
          </span> 
          <div className="">
          <div className="flex items-center justify-center ">
            <h6 className=" py-2">Design</h6> 
            {showServicesSection && (
              <IoIosArrowForward
                className="text-[#5e5e5e] cursor-pointer"
                onClick={togglesubMneu}
                size={25}
              />
              
            )}
            {showsubMenuDesign && (
              <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
              <div className="flex items-center justify-center">
                <div className="w-96">
              <span className="flex items-center pt-3 justify-center"> 
              {showsubMenuDesign && (
                  <IoIosArrowBack
                    className="text-[#5e5e5e]  cursor-pointer"
                    onClick={togglesubMneu}
                    size={25}
                  />
                )}
                <h6 className="text-[#3b7fbf] font-[550] ">Design</h6>
                </span> 
                  <ul className="d-flex justify-center items-center flex-col">
                  <Link  to ="/ui" className="navlinkmenutitle no-underline hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'> UI/UX Design</li> </Link>
                  <Link  to ="/" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Web Design</li> </Link>
                    {/* Add other submenu items as needed */}
                  </ul>
                </div>
              </div>
            </div>
                        )}
          </div>
          <div className="flex items-center justify-center">
          <h6 className="py-2">Ecommerece</h6> 
          { !showsubMenuEcommerce && (
            <IoIosArrowForward
              className="text-[#5e5e5e] cursor-pointer"
              onClick={toggleEcommerceMenu}
              size={25}
            />
            
          )}
          {showsubMenuEcommerce && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
            <div className="flex items-center justify-center">
              <div className="w-96">
            <span className="flex items-center pt-3 justify-center"> 
            {showsubMenuEcommerce && (
                <IoIosArrowBack
                  className="text-[#5e5e5e]  cursor-pointer"
                  onClick={toggleEcommerceMenu}
                  size={25}
                />
              )}
              <h6 className="text-[#3b7fbf]   font-[550] ">Ecommerece</h6>
              </span> 
              <ul className="flex items-center justify-center flex-col">
              <Link  to ="/career" className="navlinkmenutitle no-underline hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2' > Shopify</li> </Link>
              <Link  to ="/clients" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'> OpenKart</li> </Link>
              <Link  to ="/clients" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Woocommerce</li> </Link>
              <Link  to ="/clients" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Magento</li> </Link>
              <Link  to ="/clients" className="navlinkmenutitle no-underline  hover:no-underline" onClick={handleActive}>  <li className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] py-2'>Prestashop</li> </Link>
                {/* Add other submenu items as needed */}
              </ul>
              </div>
            </div>
          </div>
                      )}
        </div>
        <div className="flex items-center justify-center ">
        <h6 className="py-2">Development</h6> 
        {!showsubMenuDevelopment && (
          <IoIosArrowForward
            className="text-[#5e5e5e] cursor-pointer"
            onClick={toggleDevelopment}
            size={25}
          />
          
        )}
        {showsubMenuDevelopment && (
          <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
          <div className="flex items-center justify-center">
            <div className="w-96">
          <span className="flex items-center pt-3  justify-center"> 
          {showsubMenuDevelopment && (
              <IoIosArrowBack
                className="text-[#5e5e5e]  cursor-pointer"
                onClick={toggleDevelopment}
                size={25}
              />
            )}
            <h6 className="text-[#3b7fbf]   font-[550]">Development</h6>
            </span> 
            <ul className="flex items-center justify-center flex-col">
            
            <Link to='/development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline   py-2'  onClick={handleActive} ><li className="py-2">Website Development</li> </Link>

     <Link to='/CodeIgniter' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline py-2 '  onClick={handleActive}> <li className="py-2">CodeIgniter Website</li>
     </Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
      text-[15px] font-medium
     hover:no-underline  py-2 '  onClick={handleActive}> <li className="py-2">Informative Websit</li> </Link>

     <Link to='/Php' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium
     hover:no-underline  py-2 '  onClick={handleActive}> <li className="py-2">Php Development</li> </Link>

     <Link to='/htmlPage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]    text-[15px] font-medium
    hover:no-underline  py-2 '  onClick={handleActive}> <li className="py-2">Html & Css Website</li></Link>

     <Link to='/laraveldevlopment' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline  py-2 '  onClick={handleActive}> <li className="py-2">Laravel Website</li>
     </Link>
     
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-2'  onClick={handleActive}> <li className="py-2">React js Website</li> </Link>

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-2'  onClick={handleActive}> <li className="py-2">Angular js Website</li> </Link>

    <Link to='/rubyRails ' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-2'  onClick={handleActive} > <li className="py-2">Ruby on Rails</li> </Link> 
     
     <Link to='/eCommerce' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline   py-2' onClick={handleActive} ><li className="py-2">E-commerce Website</li></Link> 

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}> <li className="py-2">Payment Gateway</li> </Link> 
     
   
 
            </ul>
            </div>
          </div>
        </div>
                    )}
      </div>
      <div className="flex items-center justify-center ">
            <h6 className="py-2">Digital Marketing</h6> 
            { !showsubMenuDigital && (
              <IoIosArrowForward
                className="text-[#5e5e5e] cursor-pointer"
                onClick={toggleDigitalMenu}
                size={25}
              />
              
            )}
            {showsubMenuDigital && (
              <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
              <div className="flex items-center justify-center">
                <div className="w-96">
              <span className="flex items-center  pt-3 justify-center"> 
              {showsubMenuDigital && (
                  <IoIosArrowBack
                    className="text-[#5e5e5e]  cursor-pointer"
                    onClick={toggleDigitalMenu}
                    size={25}
                  />
                )}
                <h6 className="text-[#3b7fbf] font-[550] ">Digital Marketing</h6>
                </span> 
                  <ul  className="flex items-center justify-center flex-col">
                  <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                  text-[15px] font-medium  hover:no-underline'   onClick={handleActive} >
                   <li className="py-2">Search Engine Optimization</li>  </Link>
             
                  <Link to='/sem' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                  text-[15px] font-medium hover:no-underline   '  onClick={handleActive}>
                   <li className="py-2">Search Engine Marketing</li> </Link>
             
                  <Link to='/socialMediaOpt' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   '  onClick={handleActive} > <li className="py-2">Social Media Optimization</li> </Link>
                  <Link to='/socialMediaMarketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
                  text-[15px] font-medium hover:no-underline '  onClick={handleActive} > <li className="py-2">Social Media Marketing</li> </Link>
                  <Link to='/email' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
                  text-[15px] font-medium hover:no-underline '  onClick={handleActive} > <li className="py-2">Email Marketing</li> </Link>
                  </ul>
                </div>
              </div>
            </div>
                        )}
      </div>
          <div className="flex items-center  justify-center">
            <h6 className="py-2">Game Development</h6> 
            { !showsubMenuGame && (
              <IoIosArrowForward
                className="text-[#5e5e5e] cursor-pointer"
                onClick={toggleGame}
                size={25}
              />
              
            )}
            {showsubMenuGame && (
              <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
              <div className="flex items-center">
                <div className="w-96">
              <span className="flex items-center pt-3"> 
              {showsubMenuGame && (
                  <IoIosArrowBack
                    className="text-[#5e5e5e]  cursor-pointer"
                    onClick={toggleGame}
                    size={25}
                  />
                )}
                <h6 className="text-[#3b7fbf] font-[550] ">Game Development</h6>
                </span> 
                  <ul>
                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                  text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-2">2D</li>  </Link>
             
                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                  text-[15px] font-medium hover:no-underline   '  onClick={handleActive}> <li className="py-2">3D</li> </Link>
             
                  <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   '  onClick={handleActive} > <li className="py-2">Meta Versa</li> </Link>
                
                  </ul>
                </div>
              </div>
            </div>
                        )}
          </div>
          <div className="flex items-center justify-center ">
          <h6 className="py-2 text-center"> Maintenace Support </h6> 
          { !showsubMenuMaintenance && (
            <IoIosArrowForward
              className="text-[#5e5e5e] cursor-pointer"
              onClick={toggleMaintenace}
              size={25}
            />
            
          )}
          {showsubMenuMaintenance && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
            <div className="flex items-center justify-center">
              <div className="w-96">
            <span className="flex items-center pt-3 justify-center"> 
            {showsubMenuMaintenance && (
                <IoIosArrowBack
                  className="text-[#5e5e5e]  cursor-pointer "
                  onClick={toggleMaintenace}
                  size={25}
                />
              )}
              <h6 className="text-[#3b7fbf] font-[550] ">Maintenace Support</h6>
              </span> 
                <ul  className="flex items-center justify-center flex-col">
                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
                text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-2"> 
                Website Maintenance
              
                </li>  </Link>
           
                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
                text-[15px] font-medium hover:no-underline   '  onClick={handleActive}> <li className="py-2">Mobile App Maintenance</li> </Link>
           
                <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   '  onClick={handleActive} > <li className="py-2">Domain & Hosting Maintenance</li> </Link>
              
                </ul>
              </div>
            </div>
          </div>
                      )}
        </div>
        <div className="flex items-center  justify-center">
        <h6 className="py-1">Mobile Applications</h6> 
        {!showsubMenuMobile && (
          <IoIosArrowForward
            className="text-[#5e5e5e] cursor-pointer"
            onClick={toggleMobile}
            size={25}
          />
          
        )}
        {showsubMenuMobile && (
          <div className="absolute top-0 right-0 w-full h-screen bg-white z-50">
          <div className="flex items-center justify-center">
            <div className="w-96">
          <span className="flex items-center  pt-3 justify-center"> 
          {showsubMenuMobile && (
              <IoIosArrowBack
                className="text-[#5e5e5e]  cursor-pointer"
                onClick={toggleMobile}
                size={25}
              />
            )}
            <h6 className="text-[#3b7fbf] font-[550] ">Mobile Applications</h6>
            </span> 
              <ul  className="flex items-center justify-center flex-col">
              <Link to='/Android' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
              text-[15px] font-medium  hover:no-underline'   onClick={handleActive} > <li className="py-2"> 
         Android App
            
              </li>  </Link>
         
              <Link to='/iOS' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
              text-[15px] font-medium hover:no-underline   '  onClick={handleActive}> <li className="py-2">IOS App</li> </Link>
         
            
            
              </ul>
            </div>
          </div>
        </div>
                    )}
      </div>
          
       
    




       
          </div>
              {/* Add other submenu items as needed */}
         
          </div>
        </div>
      </div>
    )}
  </div>

      
 
 




    
     

    <Link to='/portfolio' className='no-underline 
    navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Portfolio</li>    
    </Link>
    <Link to='/blogMain' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Blogs</li></Link>
    <Link to='/contact' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Reach us</li></Link>
    </ul>
  </div>

  </>

 

  
  return (
    <>

    <nav className="z-50 bg-white navmaindiv px-4">
    <div className=" flex lg:py-3 px-[-100px]  items-center">
    <div className="flex items-center  justify-center">
    <img src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg"alt="logo" className="md:cursor-pointer h-20"/>
    </div>
    <div className= "lg:flex  md-flex flex-1 items-center justify-center  font-normal hidden">
    <ul className="flex gap-[25px] text-[18px] items-center ">
    <Link to='/'  className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Home</li></Link>

    
    {/* Mega Menu Start*/}
    <div className="group">
    <Link className="navlinkmenutitle no-underline disable">
     <span className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[18px] navlinkmenutitle' 
     onClick={handleAboutMenu}
     onMouseOver={handleAboutMenu} 
     
     >About      </span>
     {aboutmenu ? (
      <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block"   onClick={handleAboutMenu} /> 
    ) : (
      <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block"  onClick={handleAboutMenu}/> 
    )}
  
  </Link>
  {aboutmenu ?(
    <>
    <div ref={dropdownRef} className="flex-col items-center absolute  top-[103px] py-1 px-2  border-top 
    rounded-1 shadow-lg bg-gray-100 z-20 text-black duration-300 "
    onMouseLeave={handleAboutMenu} >
    <div className="grid grid-cols  md:grid-cols">
<div className=" flex flex-col justify-center items-center">
<Link to='/about'  className='no-underline navlinkmenutitle hover:no-underline'>
<li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] ' onClick={handleAboutMenu}>About Us</li>
</Link>

</div>

</div>
<div className="grid grid-cols  md:grid-cols">
<div className=" flex flex-col justify-center items-center">
<Link to='/clients'  className='no-underline navlinkmenutitle hover:no-underline'>
<li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] ' onClick={handleAboutMenu}>Our Clients</li>
</Link>

</div>

</div>
<div className="grid grid-cols  md:grid-cols">
  <div className="flex flex-col justify-center items-center">
  <Link to='/career'  className='no-underline navlinkmenutitle hover:no-underline'>
  <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] ' onClick={handleAboutMenu}>Career</li></Link>

  </div>
  
  </div>


</div>  
    </>
  ):null}

 
    </div>



      {/* Mega Menu End*/} 


    {/* Mega Menu Start*/}
    <div className="group">
    <Link className="navlinkmenutitle no-underline disable"> 
    <span 
      className='hover:text-[#3B7FBF] cursor-pointer text-[#5e5e5e] text-[18px] navlinkmenutitle'
      onClick={handleActive}
       onMouseOver={handleActive}
    > Services</span>
    {active ? (
      <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block"  onClick={handleActive}/> 
    ) : (
      <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block"  onClick={handleActive}  /> 
    )}
  </Link>
    {active ? (
      <>
      <div ref={dropdownRef} className="flex-col items-center absolute  top-[103px] py-2 px-2  border-top 
      rounded-1 shadow-lg
     bg-gray-100 z-20 text-black duration-300 "
     onMouseLeave={handleActive}>
     <div className="grid grid-cols-4 md:grid-cols-3 gap-3">
     <div className="flex flex-col bg-[#ffff] px-1 py-2 rounded-1 inside-dev-shado-des">
     <span className="d-flex items-center gap-[100px]">
     <h6 className="text-[#3b7fbf]   font-[550] ">Design</h6> 
     <img src="Image/nav-lar-1 (3).svg" className="w-[50px]"/>
     </span> 
     <Link to='/Ui' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>UI/UX Design</Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Website Design</Link>
     <div className="flex flex-col pt-3">
     <span className="d-flex items-center ">
     <h6 className="text-[#3b7fbf] font-[550] ">Ecommerce Solutions</h6> 
     <img src="Image/cart.png" className="w-10"/>
     </span> 
  
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Shopify</Link>

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>OpenKart</Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Woocommerce</Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Magento</Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Prestashop</Link>
     </div>


   
    
 
     </div>
     
     <div className="flex flex-col  bg-[#ffff] px-1  py-2 rounded-1 inside-dev-shado-des">
     <span className="d-flex items-center gap-5">
     <h6 className="text-[#3b7fbf]  font-[550]">Development</h6> 
     <img src="Image/nav-lar-1 (2).svg" className="w-[50px]"/>
     </span> 
     <Link to='/development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive} >Website Development</Link>

     <Link to='/CodeIgniter' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>CodeIgniter Website
     </Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
      text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>Informative Website</Link>

     <Link to='/Php' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium
     hover:no-underline  '  onClick={handleActive}>Php Website</Link>

     <Link to='/htmlPage' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]    text-[15px] font-medium
    hover:no-underline '  onClick={handleActive}>Html & Css Website</Link>

     <Link to='/laraveldevlopment' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}>Laravel Website
     </Link>
     
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}> React js Website</Link>

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive}> Angular js Website</Link>

    <Link to='/rubyRails' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline '  onClick={handleActive} > Ruby on Rails</Link> 
     
     <Link to='/eCommerce' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive} >E-commerce Website</Link> 

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   text-[15px] font-medium
     hover:no-underline ' onClick={handleActive}>Payment Gateway</Link> 
     
   
 
 
     </div>
     <div className="flex flex-col  bg-[#ffff] px-1  py-2 rounded-1 inside-dev-shado-des" >
     <span className="d-flex items-center gap-4">
     <h6 className="text-[#3b7fbf]  font-[550] ">Digital Marketing</h6> 
     <img src="Image/nav-lar-1 (4).svg" className="w-[50px]"/>
     </span>
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
     text-[15px] font-medium  hover:no-underline'   onClick={handleActive} >Search Engine Optimization</Link>

     <Link to='/sem' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
     text-[15px] font-medium hover:no-underline   '  onClick={handleActive} >Search Engine Marketing</Link>

     <Link to='/socialMediaOpt' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   '  onClick={handleActive} >Social Media Optimization</Link>
     <Link to='/socialMediaMarketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Social Media Marketing</Link>
    

     <Link to='/email' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Email Marketing</Link>
   

 
     </div>
   
     <div className="flex flex-col bg-[#ffff] px-1 py-2 rounded-1 inside-dev-shado-des">
     <span className="d-flex items-center gap-2">
     <h6 className="text-[#3b7fbf] font-[550] "> Game Development</h6> 
     <img src="Image/nav-lar-1 (5).svg" className="w-[50px]"/>
     </span> 
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>2D</Link>
     <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>3D</Link>
    
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] 
     text-[15px] font-medium
     hover:no-underline '>Meta Verse</Link>
    
 
     </div>
     <div className="flex flex-col   bg-[#ffff] px-1 py-2  rounded-1  inside-dev-shado-des">
     <span className="d-flex items-center gap-5">
     <h6 className="text-[#3b7fbf]  font-[550]">Maintenace & Support</h6> 
     <img src="Image/nav-lar-1 (3).svg" className="w-[50px]"/>
     </span> 
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Website Maintenance </Link>
     <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>Mobile App Maintenance </Link>
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>Domain & Hosting Maintenance </Link>
     </div>
     <div className="flex flex-col   bg-[#ffff] p-1 rounded-1  inside-dev-shado-des">
     <span className="d-flex items-center gap-1">
     <h6 className="text-[#3b7fbf] font-[550]">Mobile Applications</h6> 
     <img src="Image/na-lar-5.svg" className="w-[50px]"/>
     </span> 
     <Link to='/Android' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Android App </Link>
     <Link to='/iOS' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline'>IOS App</Link>
    
   
 
 
     </div>
     
     </div>
     
     
     </div>
 
      </>
    ):null }
    </div>



      {/* Mega Menu End*/}    
     

    <Link to='/portfolio' className='no-underline 
    navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Portfolio</li>    
    </Link>
    <Link to='/blogMain' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Blogs</li></Link>
    <Link to='/contact' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Reach us</li></Link>
      <Link to='/contact' className='no-underline navlinkmenutitle hover:no-underline'> 
      <li className='hover:text-[#3b7fbfbe]  cusror-pointer text-[#3b7fbf] flex items-center gap-2'> 
        <MdPhoneInTalk size={30} className="rounded-5 bg-[#3b7fbf]  text-white p-1"  />8448158188
      </li>
    </Link>
    <Button className="btnmain">Get a Quote</Button>
    </ul>
    </div>

    <div>

            <button className="block sm:hidden " 
            onClick={handleClick}>
              {click ?<GrClose size={35}  />
              
              :<FiMenu size={35} />}
            </button>
          </div>
        </div>
        {click && content}
      </nav>
    </>
  );
};

export default Navbar;
