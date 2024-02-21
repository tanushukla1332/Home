
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';


export default function Header() {


  return (
    <>
    <nav className='bg-white navmaindiv'>
    <div className='flex items-center font-medium justify-around'>
    <div>
    <img  className ='w-80 h-20 md:cursor-pointer 'src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg" alt="RazoByte Softtech - Developing Digital Solutions"></img>
    </div>
    <ul className=' md:flex hidden gap-8 mr-16 text-[18px] font-[500] py-3 items-center'>
    <Link to='/' className='no-underline  inline-block navlinkmenutitle'>
    
    <li className='hover:text-[#3B7FBF] transition border-b-2 border-white hover:border-gray-500 cusror-pointer text-[#5e5e5e]    '>Home</li></Link>
    <Link to='/About' className='no-underline   inline-block navlinkmenutitle'> <li>About</li></Link>
    <Link to='/Services' className='no-underline   inline-block navlinkmenutitle'><li>Services</li></Link>
    <Link to='/BlogMain' className='no-underline   inline-block navlinkmenutitle'><li>Blog</li></Link>
    <Link to='/Career' className='no-underline   inline-block navlinkmenutitle'><li>Career</li></Link>
    <Link to='/Portfolio' className='no-underline   inline-block navlinkmenutitle'><li>PortFolio</li></Link>
    <Link to='/Contact' className='no-underline   inline-block navlinkmenutitle'><li>Get in Touch</li></Link>
    <button className='btnmain' >Book a Session</button>
    
    </ul>

    </div>

    </nav>
     {/* <nav className='z-50 bg-white'>
    <div className='h-10vh flex  lg:py-5 '>
    <div className='flex items-center flex-1 text-3xl'>
    <img src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg" width="250px" alt="RazoByte Softtech - Developing Digital Solutions"></img>
    </div>
    <div>
    <ul className='flex gap-8 mr-16 text-[18px] font-[500]'>
    <Link to='/' className='no-underline'> <li className='hover:text-[#3B7FBF] transition border-b-2 border-white hover:border-gray-500 cusror-pointer text-[#5e5e5e]    '>Home</li></Link>
    <Link to='/About'> <li>About</li></Link>
    <Link to='/Services'><li>Services</li></Link>
    <Link to='/BlogMain'><li>Blog</li></Link>
    <Link to='/Career'><li>Career</li></Link>
    <Link to='/Portfolio'><li>PortFolio</li></Link>
    <Link to='/Contact'><li>Get in Touch</li></Link>



  
   
    
  
  
    <button className='btnmain'>Book a Session</button>
    
    </ul></div>
    </div>
  </nav> */}
     
    </>
  );
}
