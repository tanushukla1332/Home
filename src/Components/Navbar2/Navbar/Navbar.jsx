import { FaAngleDown, FaSearch,FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";


import '../Navbar/Navbar.css';
import { useState , useEffect, useRef } from "react";

const Navbar = () => {
  const [click,setClick]=useState(false)
  const[active,setActive]=useState(false)
  const [aboutmenu,setAboutMenu]=useState(false)
  const [Clientmenu,setClienttMenu]=useState(false)
  const dropdownRef = useRef(null);


  
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

 
  const handleClientdata=()=>{
    setClienttMenu(!Clientmenu)
  }
  

const handleAboutMenu=()=>{
  setAboutMenu(!aboutmenu)
}

  const handleActive=()=>{
    setActive(!active)
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
  <h5 className="text-[#3b7fbf] text-center">Design Marketing</h5>
  <Link to='/seo' className='no-underline  cusror-pointer text-white '>SEO</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-white '>SEM</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>SMO</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>SMM</Link>
  <Link to='/' className='no-underline  cusror-pointer text-white '>Email Marketing</Link>


  </div>
  <div className="flex flex-col  items-center">

  
  <h6 className="text-[#3b7fbf] text-center ">Design</h6>
  <Link to='/seo' className='no-underline  cusror-pointer text-white  '>UI/UX Designs</Link>
  <Link to='/SEM' className='no-underline  cusror-pointer text-[#5e5e5e] '>Graphic Design </Link>
  <Link to='/' className='no-underline  cusror-pointer text-[#5e5e5e] '>Video Editing</Link>

  </div>
  <div className="flex flex-col items-center">
  <h5 className="text-[#3b7fbf] ">Development</h5>
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
    <Link to="/about" className="navlinkmenutitle no-underline">
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
    <div className="hidden group-hover:flex flex-col absolute
    top-15 py-3  z-20 text-black duration-300   items-center ">
    <div className="grid grid-cols  md:grid-cols">
    <div className="flex flex-col  items-center">
    <Link to='/career'  className='no-underline navlinkmenutitle hover:no-underline'>
    <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Career</li></Link>
  
    </div>
    
    </div>
    
    
    </div>
    </div>



      {/* Mega Menu End*/} 


    {/* Mega Menu Start*/}
    <div className="group">
    <Link  to ="/" className="navlinkmenutitle no-underline"> 
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
      <div ref={dropdownRef} className="flex-col items-center absolute  top-[103px] py-1 px-2  border-top 
      rounded-1 shadow-lg
     bg-gray-100 z-20 text-black duration-300 "
     onMouseLeave={handleActive} >
     <div className="grid grid-cols-4 md:grid-cols-3 gap-2">
     <div className="flex flex-col  bg-[#ffff] p-3 rounded-1 inside-dev-shado-des" >
     <span className="d-flex items-center gap-3">
     <h6 className="text-[#3b7fbf] ">Design Marketing</h6> 
     <img src="Image/nav-lar-1 (4).svg" className="w-[50px]"/>
     </span>
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]   
     text-[15px] font-medium  hover:no-underline'   onClick={handleActive} >SEO</Link>

     <Link to='/sem' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  
     text-[15px] font-medium hover:no-underline   '  onClick={handleActive} >SEM</Link>

     <Link to='/socialMediaOpt' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium hover:no-underline   '  onClick={handleActive} >SMO</Link>
     <Link to='/socialMedia' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] text-[15px] font-medium  hover:no-underline   '  onClick={handleActive}>SMM</Link>

     <Link to='/email' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Email Marketing</Link>
     <Link to='/socialMediaMarketing' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline '  onClick={handleActive} >Social Media Marketing</Link>

 
     </div>
     <div className="flex flex-col bg-[#ffff] p-3 rounded-1  inside-dev-shado-des">
     <span className="d-flex justify-center items-center gap-5"><h6 className="text-[#3b7fbf] ">Design</h6> 
     <img src="Image/nav-lar-1 (3).svg" className="w-[50px]"/>
     </span> 
     <Link to='/uI' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] 
     text-[15px] font-medium
     hover:no-underline   ' onClick={handleActive} >UI/UX Designs</Link>

     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]
     text-[15px] font-medium hover:no-underline'  onClick={handleActive}>Graphic Design</Link>

   

     </div>
     <div className="flex flex-col  bg-[#ffff] p-3 rounded-1 inside-dev-shado-des">
     <span className="d-flex items-center gap-3"><h6 className="text-[#3b7fbf] ">Development</h6> 
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
   
     <div className="flex flex-col bg-[#ffff] p-3 rounded-1 inside-dev-shado-des">
     <span className="d-flex items-center"><h6 className="text-[#3b7fbf] "> Game Development</h6> 
     <img src="Image/nav-lar-1 (2).svg" className="w-[50px]"/>
     </span> 
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>2D</Link>
     <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>3D</Link>
    
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] 
     text-[15px] font-medium
     hover:no-underline '>Meta Verse</Link>
    
 
     </div>
     <div className="flex flex-col   bg-[#ffff] p-3 rounded-1  inside-dev-shado-des">
     <span className="d-flex items-center"><h6 className="text-[#3b7fbf] "> Support and Maintenance</h6> 
     <img src="Image/na-lar-5.svg" className="w-[50px]"/>
     </span> 
     <Link to='/seo' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Website M</Link>
     <Link to='/SEM' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Mobile App M</Link>
    
     <Link to='/' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline  '>Domain and Hosting</Link>
  
 
 
     </div>
     <div className="flex flex-col   bg-[#ffff] p-3 rounded-1  inside-dev-shado-des">
     <span className="d-flex items-center"><h6 className="text-[#3b7fbf] ">Mobile and  Maintenance</h6> 
     <img src="Image/na-lar-5.svg" className="w-[50px]"/>
     </span> 
     <Link to='/Android' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>Android Devloper</Link>
     <Link to='/iOS' className='no-underline hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[15px] font-medium
     hover:no-underline '>IOS Developer</Link>
    
   
 
 
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
   
    {/* Mega Menu Start*/}
    <div className="group">
    <Link to="/contact" className="navlinkmenutitle no-underline">
     <span className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e]  text-[18px] navlinkmenutitle' 
     onClick={handleClientdata}
     onMouseOver={handleClientdata}
     >Get in Touch  </span>
     {Clientmenu ? (
      <FaAngleDown className="text-[#5e5e5e] ml-1 inline-block"      onClick={handleClientdata} /> 
    ) : (
      <FaAngleUp className="text-[#5e5e5e] ml-1 inline-block"       onClick={handleClientdata}/> 
    )}
  
    </Link>
    
    <div className="hidden group-hover:flex flex-col items-center absolute 
    top-15 py-3 z-20 text-black duration-300   items-center ">
    <div className="grid grid-cols md:grid-cols">
    <div className="flex flex-col  items-center">
    <Link to='/clients'  className='no-underline navlinkmenutitle  hover:no-underline'>
    <li className='hover:text-[#3B7FBF]  cusror-pointer text-[#5e5e5e] '>Our Clients</li></Link>
  
    </div>
    
    </div>
    
    
    </div>
    </div>



      {/* Mega Menu End*/} 
   
    <Link to='/contact' className='no-underline navlinkmenutitle hover:no-underline'> 
  <li className='hover:text-[#3b7fbfbe]  cusror-pointer text-[#3b7fbf] flex items-center gap-2'> 
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
