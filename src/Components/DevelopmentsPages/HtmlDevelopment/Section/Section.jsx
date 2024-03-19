
import {Row,Col} from 'react-bootstrap';
import './Section.css';
import { FaCheck } from "react-icons/fa6";
import Blog from '../../../Blog/Blog2';



export default function Section(title){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center gap-5 py-5'>
        <Col md={5}>
        <h3 className='hed3 text-md-justify'>Redefining Web Solutions with 
        CakePHP Framework</h3>
        <p className='para text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>


        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'
        style={{backgroundImage:"url('Image/blue.png')",backgroundSize:"500px 300px",backgroundRepeat:"no-repeat",backgroundPosition:"top"}}>
        <img src="Image/Html-2.png" alt=""  className='img-fluid'/>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'
        style={{background:"linear-gradient(to bottom, #3b7fbf, #4ECFFF)"}}>
        <Col md={10}>
        <h3 className='hed2 text-center text-white' >CakePHP Development Services – Our Offerrings</h3>
        <p className='para text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>

        <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
        <div className='html-section1 my-3'>
        <h3 className='hed3 pt-2 text-center' style={{color:"#3b7fbf"}}>CakePHP Template Design</h3>
        <p  className='para  text-center pt-2' >Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section1'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>CakePHP Plug-in 
        Development</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section1 my-3'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>CakePHP Web App 
        Development</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        </div>
        <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
        <div className='html-section1'>
        <h3 className='hed3 pt-2' style={{color:"#3b7fbf"}}>CakePHP Migration 
        Services</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section1 '>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>CakePHP Website 
        Development</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section1'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>CakePHP Maintenance 
        Services</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        </div>
       
        
      
 


        </Col>

        </Row>
        <Row className='d-md-flex  d-none justify-content-center align-items-center py-5'
         style={{backgroundColor:"rgba(90,167,227,20%)",backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundPosition:"right",backgroundSize:"350px"
        }}>
        <h2 className='hed2 text-center' style={{color:"#3b7fbf"}}>On-demand CakePHP Migration Services</h2>
        <p className='para text-black text-center'>We specialize in arranging robust migration support to move your existing business processes to new-age frameworks without the risk of data breach 
        or losing relevant information</p>
        <Col md={10}>
        <div>
        <h3 className='hed3 font-medium'style={{color:"#3b7fbf"}} >Our CakePHP developers are adept at migrating old CakePHP versions to the latest:</h3>
        <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex gap-3 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>Python 2.0 to 3.0</p>
        </div>
        <div className='d-flex gap-3 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>Python 1.3 to 2.0</p>
        </div>

       

        </div>

        </div>
        <div>
        <h3 className='hed3 font-medium text-center'style={{color:"#3b7fbf"}} >We also assist in migration other frameworks to CakePHP:</h3>
        <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>PHP to CakePHP</p>
        </div>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>CodeIgniter to Python</p>
        </div>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>Zend PHP to CakePHP</p>
        </div>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>Yii to CakePHP</p>
        </div>

       

        </div>

        </div>
        <div>
        <h3 className='hed3 font-medium text-center'style={{color:"#3b7fbf"}} >In case, you want to discard CakePHP, we offer:</h3>
        <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>CakePHP to Laravel</p>
        </div>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>CakePHP to Django</p>
        </div>
        <div className='d-flex gap-2 justify-center'>
        <FaCheck  className='text-[#3b7fbf] bg-[#ffffff5e] rounded' size={22}/>
         <p className='para'>Python to Drupal</p>
        </div>

       

        </div>

        </div>


        </Col>

        </Row>
        <Row className='d-flex justify-content-center align-items-center gap-5 py-4'>
        <Col md={10}>
        <div>
        <h3 className='hed3 text-center'>Extensive Expertise on Latest Frameworks</h3>
        <p className='para text-center fs-md-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4'>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (12).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3  fs-6 fs-md-6  pt-md-2' style={{color:"#3b7fbf"}}>Node js</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (11).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>Angular js</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (10).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>React js</h3>
        </div>
        <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (9).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>.Net Core</h3>
        </div>
        <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (8).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6  fs-md-6 pt-md-2'  style={{color:"#3b7fbf"}}>Laravel</h3>
        </div>
        
        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (7).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Rxweb.io</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (6).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Mean</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/Html-5 (1).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Roby no Rails</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (2).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Expree js</h3>
        </div>
        
        </div>
        
        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/Html-5 (2).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Lonic</h3>
        </div>
        </div>
        
        
        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (1).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Vue.js</h3>
        </div>
      
    
      
        
        
        
        
        </div>
        
        
        </div>
        

      
        </Col>
        </Row>
        <Row className='laravelsection9 d-flex justify-content-center align-items-center p-4'>
        <Col md={10}>
        <div className='pt-3'>
        <h3 className='hed2 text-white text-center'>CakePHP Development To Address Business Concerns</h3>
        <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>
    
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center gap-md-5 gap-1'>
        <div className='htmlSection1'>
        <img src="Image/Html-6 (6).png" alt=""  className='img-fluid w-20 '/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Debugging Issues</h3>
        </div>
        <div className='htmlSection1 d-md-flex d-none'>
        <img src="Image/Html-6 (5).png" alt=""  className='img-fluid w-20' />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Customer-centric 
        Model</h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-6 (4).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Flexible Templates</h3>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-md-5'>
        <div className='htmlSection1'>
        <img src="Image/Html-6 (3).png" alt=""  className='img-fluid  w-20'/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Domain Expertise</h3>
        </div>
        <div className='htmlSection1 d-md-flex d-none'>
        <img src="Image/Html-6 (2).png" alt=""  className='img-fluid  w-20' />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Protect Assets</h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-6 (1).png" alt=""  className='img-fluid  w-20'  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Maximizing Returns</h3>
        </div>
        </div>
        </div>

        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-4'>
        <Col md={10}>
        <div>
        <h3 className='hed2 text-center'>Our CakePHP Framework Development Methodology</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry.</p>
        </div>
        <img src="Image/Html-6.png" alt="" className='img-fluid' />
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'
        style={{background:"linear-gradient(to bottom, #3b7fbf, #4ECFFF)"}}>
        <Col md={10}>
        <h3 className='hed2 text-center text-white' >Features of CakePHP Framework</h3>
        <p className='para text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>

        <div className='d-md-flex  justify-content-center align-items-center gap-2 p-3'>
        <div className='html-section2 my-3'>
        <h3 className='hed3 pt-2 text-center' style={{color:"#3b7fbf"}}>Reusable Codes</h3>
        <p  className='para  text-center pt-2' >Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section2'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>MVC Build</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section2'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>Database Management</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        </div>
        <div className='d-md-flex  d-none justify-content-center align-items-center gap-2 p-3'>
        <div className='html-section2'>
        <h3 className='hed3 pt-2' style={{color:"#3b7fbf"}}>Hassle Free System</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section2'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>Free Usage</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='html-section2'>
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>No Download</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        </div>
       
        
      
 


        </Col>

        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}  className='d-flex justify-content-center align-items-center flex-col'>
        <div className='pt-3'>
        <h3 className='hed2  text-center'>Our Differentiators</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>
    
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='htmlSection1 d-md-flex d-none'>
        <img src="Image/Html-7 (6).png" alt=""  className='img-fluid  w-20'  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Speedy Delivery</h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-7 (5).png" alt=""  className='img-fluid  w-20'  />

        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>
        Agile Development
       
        </h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-7 (4).png" alt=""  className='img-fluid w-20'  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Skilled Developers</h3>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='htmlSection1 d-md-flex d-none'>
        <img src="Image/Html-7 (1).png" alt=""  className='img-fluid w-20 '  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Competitive Pricing</h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-7 (2).png" alt=""  className='img-fluid w-20 '  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Active Support</h3>
        </div>
        <div className='htmlSection1'>
        <img src="Image/Html-7 (3).png" alt=""  className='img-fluid w-20'  />
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Global Clientele</h3>
        </div>
        </div>
        </div>

        </Col>
        </Row>
        <Blog title="Blogs"/>
        
        
        
        
     
       
        </>
    )
}