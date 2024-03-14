import { Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <>

      <Row className="justify-content-center  align-items-center px-0 bgsection pt-3">
        <Col md={5} className="d-md-flex align-items-center justify-content-center">
          <div>
            <img src="Image/LOGO RAZOBYTE.png" alt="" className="img-fluid w-50" />
            <p className="text-light pt-3">Your trusted partner for comprehensive IT and digital solutions.
              With a passion for technology and a dedication to excellence,
              we empower businesses to thrive in the digital age.</p>
            <button className="fsbtn">Get in Touch</button>
          </div>
        </Col>
        <Col md={5} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.493)' }}>
          <div className='d-flex align-items-center'>
            <div>
              <img src="Image/google 1.png" alt="" className="img-fluid" />
            </div>
            <div className="d-block align-items-center Rating ">
              <img src="Image/rating 1.png" alt="" style={{ marginBottom: '0px' }} />
              <p className="google-rating-text">Google Rating</p>
            </div>
            <div className="d-flex align-items-center justify-content-center Border">
              <div className='partner'>
                <img src="Image/social 1.png" alt="" className="img-fluid" style={{ paddingBottom: '5px', paddingLeft: "5px" }} />
                <p className="text-white fs-5" >partner</p>
              </div>
            </div>
            <div className='Fb d-none'>
              <img src="Image/Group 568.png" alt="" className="img-fluid"
              />
            </div>
          </div>
          <div className='d-md-flex align-items-center justify-content-center d-none'>
            <img src="Image/logo-footer (1).png" alt="" className='img-fluid w-50' />
            <img src="Image/logo-footer (2).png" alt="" className='img-fluid w-50' />
            <img src="Image/logo5.png" alt="" className='img-fluid w-50' />
            <img src="Image/logo6.png" alt="" className='img-fluid w-50' />
          </div>

        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md ={10} >
        <h3 className="Companytext3 text-light hed3">
        <span className="text-light hed1 text-white">C</span>ompany</h3>
          <ul className="d-flex para text-white justify-start link ml-[100px] ">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Carrers</li>
            <li>Reach us</li>
          </ul>

        </Col>
      </Row>
      {/* Services section */}
      <Row className="bgsection justify-content-center align-items-center ">
        <Col md={10} >
          <h3 className="Companytext3 text-light hed3 mt-[-20px]">
          <span className="text-light hed1">S</span>ervices</h3>
          <div className='d-flex justify-start ml-[100px]'>
           <div className='d-md-flex  justify-center'>
           <div className="items-center justify-center">
           <ul className='para text-white link'>
             <li className="hed3 fw-bold text-white"> Design</li>
             <li>UI/UX Design</li>
             <li>Website Design</li>
             <li className=" pt-2 text-white hed3 fw-bold">Ecommerce
             </li>
             <li>Shopify</li>
             <li>OpenKart</li>
             <li>WooCommerce</li>
             <li>Magneto</li>
             <li>PrestaShop</li>
           </ul>
         </div>
         <div className="flex justify-center">
           <ul className='para text-white link'>
             <li className=" hed3 text-white fw-bold text-white">Development
             </li>
             <li>Webiste Development</li>
             <li>CodeIgniter Website</li>
             <li>Php Website</li>
             <li>Html & Css Website</li>
             <li>Laravel Website</li>
             <li>React js Website</li>
           <li>Ruby on Rails</li>
           <li>E-Commerce Website</li>

           </ul>
         </div>
           </div>
           <div className='d-md-flex  justify-center'>
           <div className="flex items-center justify-center">
           <ul className='para text-white link'>
             <li className="text-white hed3 fw-bold">Digital Marketing</li>
             <li>Search Enginee Optimization</li>
             <li>Search Enginee Marketing</li>
             <li>Social Media Optimization </li>
             <li>social Media Marketing</li>
             <li>Email Maketing</li>
             <li className="pt-2 text-white hed3 fw-bold">Mobile Application's</li>
             <li>Android App</li> 
             <li>Ios App</li>


           </ul>
         </div>
         <div className="flex items-center justify-center">
           <ul className='para text-white link'>
             <li className="hed3 fw-bold  text-white ">Maintenace & Support</li>
             <li>Website Maintenace </li>
             <li>Mobile App Maintenace</li>
             <li>Domain & Hosting Maintenace</li>
             <li>Payment Gateway</li>
             <li className=" pt-2 hed3 fw-bold text-white">Game Development</li>
             <li>2D</li>
             <li>3D</li>
             <li>Meta Versa</li>
           
           </ul>
         </div>
           </div>
         
           
           
          </div>
   
        </Col>
      </Row>
      {/* Adress section */}
      <Row  className=' bgsection justify-content-center align-items-center'>
      
      <Col md={10}>
      <h3 className="Companytext2 text-light hed3"><span className="text-light hed1">G</span>ET IN TOUCH</h3>
      <div className='flex justify-center ml-[20px]'>
      <div className='col-md-5 flex flex-col justify-center'>
              <h3 className="text-light hed3"><span className="text-light hed1" style={{ opacity: '0.3' }}>G</span>urugram
                  </h3>
                <p className='text-white para'>Unit 337 B, Tower A, Spaze I-Tech Park,  Sector 49, Sohna Road, Gurugram 1220018 Haryana
                </p>
                <p className='text-white para'>Phone :+91-01244084508 </p>
                <p className='text-white para'> Email : contact-us@razobyte.com</p>
                <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                </div>
                <div className='col-md-5 flex flex-col justify-center'>
                <h3 className="text-light hed3"><span className="text-light hed1" style={{ opacity: '0.3' }}>A</span>hemdabad
                    </h3>
                  <p className='text-white para'>C Siddhi Vinayak Tower, Sarkhej
                  Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051
                  </p>
                  <p className='text-white para'>Phone :+91-01244084508 </p>
                  <p className='text-white para'> Email : contact-us@razobyte.com</p>
                  <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                  </div>
      </div>
      </Col>
      </Row>
    
      <Row className="bgsection justify-content-center align-items-center ">
        <Col  md={10}>
          <div className="d-flex justify-content-center icon my-3" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.493)', borderTop: '1px solid rgba(255, 255, 255, 0.493)' }}>
            <img src="Image/instagram (1) 1.png" alt="" className="img-fluid" />
            <img src="Image/FB logo final.png" alt=" " className="img-fluid" />
            <img src="Image/LinkedIn Logo final.png" alt="" className="img-fluid" />
            <img src="Image/Twitter_new_X_logo Final.png" alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md={10}>
          <div className='d-sm-flex  justify-content-center align-items-center text-light last gap-3'>
          <p>© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
          <p>Privacy Policy</p>
          <p className='d-flex align-items-center gap-1'><a href="mailto:razobyte.com" className="text-light"><CiMail  size={20}/></a>contact-us@razobyte.com</p>
          <p className='d-flex align-items-center gap-1'><a href className="text-light"><FaPhoneAlt size={20}/></a>+91-8448158188</p>
          </div>
        </Col>
      </Row>


    </>

  )
}