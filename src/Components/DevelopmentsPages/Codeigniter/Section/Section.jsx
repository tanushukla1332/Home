import {Row,Col} from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';
import './Section.css'
import Blog from '../../../Blog/Blog2';

export default function Section(title){
    return(
        <>
        <Row className='justify-center items-center py-5'>
        <Col md={10} >
        <h3 className='hed2  text-center'>Why Choose CodeIgniter for Your Website?</h3>
        <p className='para text-md-center text-sm-justify'>We specialize in crafting cutting-edge websites using the robust CodeIgniter framework. With our expertise and dedication, we bring your digital vision to life, delivering tailor-made solutions that empower your online presence. Explore our CodeIgniter website development services to unlock unparalleled possibilities for your business.</p>
        <div className='flex flex-col justify-content-center align-items-center'>
        <div className='flex items-center justify-center gap-5'>
        <div className='code-firstdiv-section'> 
        <img src="Image/codeigniter-firstSection1 (6).png" alt=""  className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>Streamlined  Development   
        Process</h3>
        </div>
        <div className='code-firstdiv-section'>
        <img src="Image/codeigniter-firstSection1 (5).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>High Performance</h3>
        </div>
        <div className='code-firstdiv-section d-md-flex flex-col d-none '> 
        <img src="Image/codeigniter-firstSection1 (4).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>Extensive  Library Support</h3>
        </div>
   

        </div>
        <div className='flex items-center justify-center gap-[50px] pt-5'>
        <div className='code-firstdiv-section'>
        <img src="Image/codeigniter-firstSection1 (3).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>Enhanced  Security 
        Features</h3>
        </div>
        <div className='code-firstdiv-section'>
        <img src="Image/codeigniter-firstSection1 (2).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf]'>Scalability</h3>
        </div>
        <div className='code-firstdiv-section d-md-flex flex-col d-none '>
        <img src="Image/codeigniter-firstSection1 (1).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf]'>MVC Architecture</h3>
        </div>
   

        </div>
        </div>
        

        </Col>
        </Row>
        <Row className='bg-[#5aa1e333] justify-center items-center'> 
        <Col md={10} xs={10} lg={10}>
        <div className='flex flex-col justify-content-center align-items-center py-5'>
        <h2 className='text-center hed2 pb-3'>What we Offer</h2>
        <div className='flex items-center justify-center gap-5'>
        <div className='code-firstdiv-section bg-white d-md-flex flex-col d-none '> 
        <img src="Image/codeigniter-second-sec (6).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf] '>Custom CodeIgniter 
        Website Development</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src="Image/codeigniter-second-sec (5).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>CodeIgniter  Web 
        App Development</h3>
        </div>
        <div className='code-firstdiv-section  bg-white' > 
        <img src="Image/codeigniter-second-sec (4).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf] '>CodeIgniter Migration 
        and Upgradation</h3>
        </div>
   

        </div>
        <div className='flex items-center justify-center gap-[50px] pt-5'>
        <div className='code-firstdiv-section  bg-white d-md-flex flex-col d-none '>
        <img src="Image/codeigniter-second-sec (1).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>CodeIgniter Integration 
        Services</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src="Image/codeigniter-second-sec (2).png" alt="" className='img-fluid w-20' />
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf] '>CodeIgniter Maintenance 
        and Support</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src="Image/codeigniter-second-sec (3).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf]'>Technology Advancements 
        in CodeIgniter</h3>
        </div>
   

        </div>
        </div>
        <div className='flex justify-center items-center text-center para pb-5'>
        Stay ahead of the curve with CodeIgniter's latest advancements, ensuring your website is equipped with the most innovative features and 
functionalities. Our team at Razobyte continuously updates their skills to leverage the latest developments in CodeIgniter, offering you unmatched 
solutions that align with industry standards and trends.
        </div>
        </Col>
        </Row>
      
      

      
        
       
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
        <h3 className='hed2 text-center text-[#3b7fbf]'>CodeIgniter Development Services – The Benefits</h3>
        <p className='para text-md-center pb-3 ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply of the printing and typesetting industry.</p>
       
      <div className='d-flex flex-col '>
      <div className='d-md-flex  d-none gap-5'>
      <div className='d-flex gap-2 w-50'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Lightweight and Fast</p>
      </div> 
  
      
      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex gap-2 w-50 '>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Versatile and Flexible</p>
      </div>

   
      

      </div>
      <div className='d-md-flex  d-none  gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Easy to Learn and Implement</p>
      </div>
      </div>
    
      

      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Extensive Documentation</p>
      </div>
      </div>
   

      </div> 
      <div className='d-md-flex d-none  gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Active Community Support</p>
      </div>
      </div>
      
      

      </div> 
      <div className='d-md-flex  d-none gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Seamless Integration with Third-party Libraries</p>
      </div>
      </div>
     
      

      </div>
      </div>

        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md ={10}>
        <h3 className='hed2 text-center'>Latest Versions and Features</h3>
        <p className='para text-md-center py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply of the printing and typesetting industry.</p>
        <div className='d-md-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex flex-col items-center CodeIgniter-section  hover:text-[#ffff]'>
        <img src="Image/cod-3 (1).png" alt=""  className='img-fluid w-[100px]'/>
        <h3 className='text-center font-[600] text-[22px]'>Embracing CodeIgniter 4</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='d-flex flex-col items-center CodeIgniter-section hover:text-[#fff]'>
        <img src="Image/cod-3 (6).png" alt=""  className='img-fluid w-[70px]'/>
        <h3 className=' text-center font-[600] text-[22px]'>Enhanced Routing System</h3>
        <p className='text-[15px]  fs-sm-6  font-[500]  text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='d-flex flex-col items-center CodeIgniter-section  hover:text-[#ffff]'>
        <img src="Image/cod-3 (5).png" alt=""  className='img-fluid w-[90px]'/>
        <h3 className='text-center font-[600] text-[22px]'>Improved Security 
        Measures</h3>
        <p className='text-center text-[15px]  fs-sm-6  font-[500]'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
       
        

        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-5'>
        <div className='d-flex flex-col items-center CodeIgniter-section'>
        <img src="Image/cod-3 (2).png" alt=""  className='img-fluid w-[80px]'/>
        <h3 className=' text-center font-[600] text-[22px]' >Modernized Templating 
        System</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='d-flex flex-col items-center CodeIgniter-section'>
        <img src="Image/cod-3 (3).png" alt=""  className='img-fluid w-[70px]'/>
        <h3 className=' text-center font-[600] text-[22px]'>Simplified Configuration</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='d-flex flex-col items-center CodeIgniter-section'>
        <img src="Image/cod-3 (4).png" alt=""  className='img-fluid w-[90px]'/>
        <h3 className='text-center font-[600] text-[22px]'>Powerful Query Builder</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
       
        

        </div>


        </Col>
        </Row>
        <Row className='d-md-flex justify-content-center  align-items-center py-4 mb-5'
        style={{ background: "linear-gradient(to bottom, rgba(59,127,191,95%), rgba(78,207,255,80%)), url('Image/lar-4.png')"}}>
        <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
        <div> 
        <h3 className='hed2 text-white text-center'>Expert CodeIgniter Developers at Razobyte</h3>
        <p className='para text-white text-md-center text-sm-justify'>Entrust your CodeIgniter projects to our team of seasoned developers who possess extensive experience and expertise in harnessing the full potential 
        of the CodeIgniter framework. With a keen eye for detail and a passion for innovation, our developers ensure that your website not only meets but 
        exceeds your expectations, delivering unparalleled results that drive your business forward.</p>
        </div>
        <div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 my-3'>
        <div className='laravel-section6'>
        <h3 className='hed3'>API Based Web Application</h3>
        <p className='para  text-md-center text-sm-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6 my-3 '>
        <h3 className='hed3'>Third-party Integration</h3>
        <p className='para  text-md-center text-sm-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 my-3'>
        <div className='laravel-section6'> 
        <h3 className='hed3'>App Upgrade Services</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6'>
        <h3 className='hed3'>App Migration Services</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        </div>

        </Col>

        </Row>
       
        <Row className='Codesectionbg d-flex justify-content-center align-items-center py-5'>
        <Col md={10} className=' d-flex flex-col align-items-center justify-center'>
        <div>
        <h3 className='hed2 text-white text-center'>Following The Best Practices</h3>
        <p className='para  text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply</p>
    
        </div>
   
        <div className='d-flex justify-content-center align-items-center py-3 gap-md-3 gap-2'>
        <div className='Code-section-3 d-md-flex d-none'>
        <img src="Image/cod-4 (8).png" alt=""  className='img-fluid  w-20'/>
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Default Application 
        Structure</h3>
        </div>
        <div className='Code-section-3 '>
        <img src="Image/cod-4 (7).png" alt=""  className='img-fluid  w-20' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>ORM Library/Third 
        Party Data Access</h3>
        </div>
        <div className='Code-section-3'>
        <img src="Image/cod-4 (6).png" alt=""  className='img-fluid w-20'  />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>JavaScript or CSS 
        Libraries</h3>
        </div>
        <div className='Code-section-3'>
        <img src="Image/cod-4 (5).png" alt=""  className='img-fluid w-20'/>
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Custom Web Developm
        ent and Caching</h3>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center py-3 gap-md-3 gap-2'>
        <div className='Code-section-3 d-md-flex d-none'>
        <img src="Image/cod-4 (4).png" alt=""  className='img-fluid w-20' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Custom Template 
        Engine</h3>
        </div>
        <div className='Code-section-3'> 
        <img src="Image/cod-4 (3).png" alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Validate Your Inputs</h3>
        </div>
        <div className='Code-section-3'>
        <img src="Image/cod-4 (2).png" alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>SEO-friendly URLs</h3>
        
        </div>
        <div className='Code-section-3'>
        <img src="Image/cod-4 (1).png" alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Store Configuration 
Information</h3>
        
        </div>
        </div>
   

        </Col>
  
        </Row>
        <Blog title="Blogs"/>
        </>
    )
}