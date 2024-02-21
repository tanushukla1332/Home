import { FaAngleDown, FaSearch,FaAngleUp } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci';
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";


import '../Navbar/Navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [click,setClick]=useState(false)
  const[Dropicon,setDropIcon]=useState(false)

  const handleDropClick=()=>{
    setDropIcon(!Dropicon)
  }


  const handleClick=()=>{
    setClick(!click)
  }
  const content= <>
  <div className="lg:hidden z-1000 block absolute top-26 w-full left-0 right-0 bg-slate-400 backdrop-blur-lg bg-opacity-30 h-auto">
  <ul className="text-center text-xl p-10">
  <Link to='/' className='no-underline hover:no-underline'> <li className=' cusror-pointer text-white hover:bg-[#3b7fbf] mb-3'>Home</li></Link>
  <Link to='/about' className='no-underline hover:no-underline'> <li className=' cusror-pointer text-white mb-3 hover:bg-[#3b7fbf]'>About</li></Link>
  {/* Mega Menu Start*/}
  <div className="group">
  <a href="/Services" className="navlinkmenutitle no-underline hover:no-underline"> <span className=' cusror-pointer text-white text-[18px] navlinkmenutitle hover:bg-[#3b7fbf]'> Services</span></a>
  
  <div className="hidden group-hover:flex flex-col absolute left-0 top-20 py-3 w-full bg-gray-100 z-20 text-black duration-300 ">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
  <div className="flex flex-col  items-center">
  <h6 className="text-[#3b7fbf]">Design Marketing</h6>
  <Link to='/seo' className='no-underline  cusror-pointer text-white '>SEO</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-white '>SEM</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>SMO</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>SMM</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>Email Marketing</Link>


  </div>
  <div className="flex flex-col  items-center">
  <h6 className="text-[#3b7fbf]">Design</h6>
  <Link to='/seo' className='no-underline  cusror-pointer text-white  '>UI/UX Designs</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-[#5e5e5e] '>Graphic Design </Link>
  <Link to='/' className='no-underline  cusror-pointer text-[#5e5e5e] '>Video Editing</Link>

  </div>
  <div className="flex flex-col items-center">
  <h6 className="text-[#3b7fbf]">Development</h6>
  <Link to='/development' className='no-underline  cusror-pointer text-white'>App Development</Link>
  <Link to='/laraveldevlopment' className='no-underline  cusror-pointer text-white '>e- Commerce</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white  '>Software development</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white  '>Website development</Link>



  </div>
  <div className="flex flex-col  items-center">
  <h6 className="text-[#3b7fbf]">Support and Maintainence</h6>
  <Link to='/seo' className='no-underline  cusror-pointer text-white  '>Website M</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-white  '>Mobile App M</Link>
 
  <Link to='/' className='no-underline  cusror-pointer text-white  '>Domain and Hosting</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white  '>VPS M</Link>


  </div>
  <div className="flex flex-col  items-center">
  <h6 className="text-[#3b7fbf]">Game Development</h6>
  <Link to='/seo' className='no-underline  cusror-pointer text-white  '>2D</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-white  '>3D</Link>
 
  <Link to='/' className='no-underline  cusror-pointer text-white  '>Meta Verse</Link>
 

  </div>
  
  </div>
  
  
  </div>
  </div>



    {/* Mega Menu End*/}    
   
  
  
  
  
  
  
  
  
  
  
  
  
  <Link to='/portfolio' className='no-underline hover:no-underline
 '> <li className=' cusror-pointer text-white  my-3 hover:bg-[#3b7fbf] '>Portfolio</li>
  
  
  
  
  
  </Link>




  <Link to='/blogMain' className='no-underline hover:no-underline'> <li className=' cusror-pointer text-white mb-3 hover:bg-[#3b7fbf]'>Blogs</li></Link>
  <Link to='/career' className='no-underline hover:no-underline'> <li className=' cusror-pointer text-white mb-3  hover:bg-[#3b7fbf]'>Career</li></Link>

  <Link to='/contact' className='no-underline hover:no-underline'> <li className=' cusror-pointer text-white  hover:bg-[#3b7fbf] '>Get in Touch</li></Link> 
  
  </ul>
  </div>

  </>
 

  
  return (
    <>

    <nav className="z-50 bg-white navmaindiv">
    <div className=" flex lg:py-3 px-[-100px]  items-center" >
    <div className="flex items-center  justify-center">
    <img src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg"alt="logo" className="md:cursor-pointer h-20 w-200 "/>
    </div>
    <div className= "lg:flex  md-flex flex-1 items-center justify-center  font-normal hidden">
    <ul className="flex gap-[40px] text-[18px] items-center ">
    <Link to='/'  className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Home</li></Link>

    
    {/* Mega Menu Start*/}
    <div className="group">
    <a href="/about" className="navlinkmenutitle no-underline">
     <span className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[18px] navlinkmenutitle'>About
     {Dropicon ? (
      <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block" /> 
    ) : (
      <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block" /> 
    )}
  
     </span></a>
    
    <div className="hidden group-hover:flex flex-col absolute left-[140px] top-12 py-3 w-50 z-20 text-black duration-300   items-center ">
    <div className="grid grid-cols  md:grid-cols">
    <div className="flex flex-col  items-center">
    <Link to='/career'  className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Career</li></Link>
  
    </div>
    
    </div>
    
    
    </div>
    </div>



      {/* Mega Menu End*/} 


    {/* Mega Menu Start*/}
    <div className="group">
    <Link href="/Services" className="navlinkmenutitle no-underline"> 
    <span className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[18px] navlinkmenutitle onClick={handleDropClick}'> Services</span>
    {Dropicon ? (
      <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block" /> 
    ) : (
      <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block" /> 
    )}
  
    </Link>
    <div className="hidden group-hover:flex flex-col absolute left-0 top-20 py-3 w-full bg-gray-100 z-20 text-black duration-300 ">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
    <div className="flex flex-col  items-center">
    <h6 className="text-[#3b7fbf]">Design Marketing</h6>
    <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>SEO</Link>
    <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>SEM</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>SMO</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>SMM</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Email Marketing</Link>


    </div>
    <div className="flex flex-col  items-center">
    <h6 className="text-[#3b7fbf]">Design</h6>
    <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>UI/UX Designs</Link>
    <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Graphic Design </Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Video Editing</Link>
  
    </div>
    <div className="flex flex-col items-center">
    <h6 className="text-[#3b7fbf]">Development</h6>
    <Link to='/development' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>App Development</Link>
    <Link to='/laraveldevlopment' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>e- Commerce</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Software development</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Website development</Link>
  


    </div>
    <div className="flex flex-col  items-center">
    <h6 className="text-[#3b7fbf]">Support and Maintainence</h6>
    <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Website M</Link>
    <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Mobile App M</Link>
   
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Domain and Hosting</Link>
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>VPS M</Link>


    </div>
    <div className="flex flex-col  items-center">
    <h6 className="text-[#3b7fbf]">Game Development</h6>
    <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>2D</Link>
    <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>3D</Link>
   
    <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Meta Verse</Link>
   

    </div>
    
    </div>
    
    
    </div>
    </div>



      {/* Mega Menu End*/}    
     
    
    
    
    
    
    
    
    
    
    
    
    
    <Link to='/portfolio' className='no-underline 
    navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Portfolio</li>
    
    
    
    
    
    </Link>




    <Link to='/blogMain' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Blogs</li></Link>
   
    <Link to='/contact' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Get in Touch</li></Link> 
    <Link to='/contact' className='no-underline navlinkmenutitle'> 
  <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] flex items-center gap-2'> 
    <MdPhoneInTalk size={30} className="rounded-5 bg-[#3b7fbf]  text-white p-1"  /> +91-8448158188 
  </li>
</Link>

    <Link to='/BlogMain' className='no-underline navlinkmenutitle '> <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '><FaSearch className="sm:hidden md:flex"/></li></Link>
    
    </ul>
    </div>

    <div>
            <button className="block sm:hidden transition-none" onClick={handleClick}>
              {click ?<ion-icon name="close-outline" lassName='text-xl'/>:<ion-icon name="menu-outline"/>}
            </button>
          </div>
        </div>
        {click && content}
      </nav>
    </>
  


  );
};

export default Navbar;
