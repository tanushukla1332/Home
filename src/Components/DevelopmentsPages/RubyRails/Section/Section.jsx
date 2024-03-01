import {Row,Col,Button,Carousel} from 'react-bootstrap';
import './Section.css'
import { IoMdArrowForward } from "react-icons/io";
import { GiCheckMark } from 'react-icons/gi';

export default function Section(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center gap-5 py-5'>
        <Col md={5}>
        <h3 className='hed3 fs-2'>Ruby on Rails Development 
        Company</h3>
        <p className='para text-justify'>When searching for the ideal framework for your next website , Ruby on Rails spell productivity, promising a seamless journey from concept to execution. The speciality of Rails lies in its unwavering commitment to the principle of convention over configuration. By ignoring established conventions, Rails effectively streamlines the development process, saving developers from the burden of repetitive tasks and superfluous configurations.
        Imagine a world where developers are liberated from the shackles of repetitive setup procedures, where the focus shifts from trivialities to the heart of the matter: solving business problems. This is exactly what Ruby on Rails offers—an environment where creativity flourishes, and innovation thrives.
        With its intuitive syntax and ingrained conventions, Rails becomes more than just a framework; it becomes a catalyst for progress. Developers find themselves moving forward, their pace accelerated by the efficiency of Rails. What once seemed impossible now becomes achievable, as Rails paves the way for faster time-to-market and reduced development costs.
        </p>


        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'
        style={{backgroundImage:"url('Image/blue.png')",backgroundSize:"500px 300px",backgroundRepeat:"no-repeat",backgroundPosition:"top"}}>
        <img src="Image/Ruby-1.png" alt=""  className='img-fluid'/>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'
        style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(Image/Ruby-2.jpg)",
            height:"70vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"
          }}>
        <Col md >
        <div>
        <h2 className='hed2 text-white text-center'>Hire Ruby on Rails Developers</h2>
        <p className='para text-white text-center'>Engage with extremely capable ROR Developers for scalable web and mobile apps and reduce development costs with superior prototypes. Engage 
        with extremely capable ROR Developers for scalable web and mobile apps and reduce development costs with superior prototypes.</p>
      <div  className='d-flex justify-content-center align-items-center'>
      <Button className='btn-hire-developers '> Hire ROR Developers <IoMdArrowForward size={25} /></Button>
      </div>
        </div>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
        <h3 className='hed2 text-center' >Avant-garde CodeIgniter Development Capabilities</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply of the printing and typesetting industry.</p>

        <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
        <div className='php-section1 my-3'>
        <img src="Image/Ruby-3 (2).png" alt="" className='img-fluid' style={{maxWidth:"100px"}} />
        <h3 className='hed3 pt-2 text-center' style={{color:"#3b7fbf"}}>Ruby on Rails Consulting</h3>
        <p  className='para  text-center pt-2' >Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem</p>
        </div>
        <div className='php-section1'>
        <img src="Image/Ruby-3 (3).png" alt="" className='img-fluid ' style={{maxWidth:"100px"}} />
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>CodeIgniter Web 
        Development</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem</p>
        </div>
        <div className='php-section1 bg-[#3b7fbf]' >
        <img src="Image/Ruby-3 (4).png" alt="" className='img-fluid ' style={{maxWidth:"100px"}} />
        <h3 className='hed3  pt-2 text-center text-white'>E-commerce
        Development</h3>
        <p  className='para text-center  pt-2 text-white'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem</p>
        </div>
        </div>
        <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
        <div className='php-section1'>
        <img src="Image/Ruby-3 (5).png" alt="" className='img-fluid' style={{maxWidth:"100px"}} />
        <h3 className='hed3 pt-2 text-center' style={{color:"#3b7fbf"}}>Rails MVP Development </h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem</p>
        </div>
        <div className='php-section1'>
        <img src="Image/Ruby-3 (6).png" alt="" className='img-fluid ' style={{width:"100px"}} />
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>Rails Ecommerce 
        Development</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem</p>
        </div>
        <div className='php-section1'>
        <img src="Image/Ruby-3 (1).png" alt="" className='img-fluid ' style={{width:"100px"}} />
        <h3 className='hed3  pt-2 text-center' style={{color:"#3b7fbf"}}>Rails Upgradation 
        Services</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem</p>
        </div>
        </div>
       
        
        
      
 


        </Col>

        </Row>
        <Row className='d-flex justify-content-center align-items-center  bg-[#5aa1e333]'>
        <Col md={10}>
        <h3 className='hed2 text-center pt-5'>Ruby on Rails Exclusive Features</h3>
        <p className='para text-center pb-3' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply of the printing and typesetting industry.</p>
       
      <div className='d-flex flex-col '>
      <div className='d-flex gap-5'>
      <div className='d-flex gap-2 w-50'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Development at the speed of time</p>
      </div> 
      <div className='d-flex  gap-2 w-50'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para font-[550] fs-md-6 fs-6'>Time and money-saving approach</p>
    
      </div>
      
      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex gap-2 w-50 '>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Active community for problem redressal</p>
      </div>
    
      <div className='d-flex w-50'>
      <div className='d-flex  gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para font-[550] fs-md-6 fs-6'>Web 2.0 apps powered by AJAX and REST designs</p>
      </div>
      

      </div>
      

      </div>
      <div className='d-flex  gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Transactional systems based on robust APIs</p>
      </div>
      </div>
      <div className='d-flex w-50'>
      <div className='d-flex  gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para font-[550] fs-md-6 fs-6'>Self-documenting and easily readable URLs</p>
      </div>
      

      </div>
      

      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      SEO friendly and robust web apps</p>
      </div>
      </div>
      <div className='d-flex w-50'>
      <div className='d-flex  gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para font-[550] fs-md-6 fs-6'>Switch ready multiple database support</p>
      </div>
      

      </div>
      

      </div> 
      
     
      </div>

        </Col>
        <img src="Image/RUBY-LAST.svg" alt=""  className='img-fluid px-0'/>
        </Row>
        <Row className='d-md-flex justify-content-center  align-items-center py-5'
        style={{ background: "linear-gradient(to bottom, rgba(59,127,191,95%), rgba(78,207,255,80%)), url('Image/lar-4.png')"}}>
        <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
        <div> 
        <h3 className='hed2 text-white text-center'>Benefits of Ruby on Rails Development Services</h3>
        <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
        of the printing and typesetting industry.</p>
        </div>
        <div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'>
        <h3 className='hed3 '>Cost Saving</h3>
        <p className='para text-sm-justify  fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6  d-md-flex d-none'>
        <h3 className='hed3'>Rapid Development</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'> 
        <h3 className='hed3'>Possibilities</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6'>
        <h3 className='hed3'>Extreme Scalability</h3>
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
        <Row className='d-md-flex justify-content-center  align-items-center py-5'>
        
        <Col md ={10}>
        <h3 className='hed2 text-center'>Our Ruby on Rails Tech Stack</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.Lorem Ipsum is simply</p>
        <div className='Ruby-buttons  gap-3
        '>
        <Button>Ruby Framewroks</Button>
        <Button>Database</Button>
        <Button>Development Tools</Button>
        <Button> TDD Tools</Button>
        <Button>Deployment Environments</Button>
        </div>
        <Carousel  className='Rubyindicators'>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-5 py-5 '>
        <div  className='d-flex flex-col align-items-center justify-content-center Ruby-section1' >
        <img src="Image/Ruby-4 (2).png" alt="" className='img-fluid' />
        <p className='para'> Ruby on Rails</p> 
        </div>
        <div className='d-flex flex-col align-items-center justify-content-center Ruby-section1'>
        <img src="Image/Ruby-4 (1).png" alt="" className='img-fluid' />
        <p className='para'>Sinatra</p> 
        </div>
        
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-5 py-5'>
        <div  className='d-flex flex-col align-items-center justify-content-center Ruby-section1' >
        <img src="Image/Ruby-4 (2).png" alt="" className='img-fluid' />
        <p className='para'> Ruby on Rails</p> 
        </div>
        
        
        </div>
        </Carousel.Item>
       
        </Carousel>
      
        </Col>
        </Row>
        <Row className='d-md-flex justify-content-center  align-items-center py-5'
        style={{ background: "linear-gradient(to bottom, rgba(78,207,255),rgba(59,127,191)"}}>
        <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
        <div> 
        <h3 className='hed2 text-white text-center'>Hire Ruby on Rails Developers from Radixweb</h3>
        <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
        of the printing and typesetting industry.</p>
        </div>
        <div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'>
        <h3 className='hed3 text-[#3b7fbf] '>Rails Programmers</h3>
        <p className='para text-sm-justify  fs-6'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='laravel-section6'>
        <h3 className='hed3  text-[#3b7fbf]'>Development Process</h3>
        <p className='para text-sm-justify  fs-6'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='laravel-section6  d-md-flex d-none'>
        <h3 className='hed3 text-[#3b7fbf]' >Time Zone Alignment</h3>
        <p className='para text-center fs-6'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'> 
        <h3 className='hed3 text-[#3b7fbf]' >RubyGems Expertise</h3>
        <p className='para text-center fs-6'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='laravel-section6'> 
        <h3 className='hed3 text-center text-[#3b7fbf]'>Rapid product 
        development</h3>
        <p className='para text-center fs-6 '>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
        <div className='laravel-section6'> 
        <h3 className='hed3 text-[#3b7fbf]'>24/7 availability</h3>
        <p className='para text-center fs-6'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and text.</p>
        </div>
       

        </div>
        </div>

        </Col>
        <img src="Image/Ruby-Last2.svg" alt="" className='img-fluid px-0' />
        </Row>
        </>
    )
}