import { Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <>

      <Row className="justify-content-center  align-items-center px-0 bgsection py-4">
        <Col md={5} className="d-md-flex align-items-center justify-content-center">
          <div>
            <img src="Image/LOGO RAZOBYTE.png" alt="" className="img-fluid" width={220} height={50} />
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
            <img src="Image/logo1.png" alt="" className='img-fluid' />
            <img src="Image/logo4.png" alt="" className='img-fluid' />
            <img src="Image/logo5.png" alt="" className='img-fluid' />
            <img src="Image/logo6.png" alt="" className='img-fluid' />
          </div>

        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md={10} className="link ">
          <h3 className="Companytext text-light fs-4">
            <span className="text-light fs-1 ">C</span>ompany
          </h3>
          <ul className="d-md-flex">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Carrers</li>
            <li>Get in Touch</li>
          </ul>

        </Col>
      </Row>
      {/* Services section */}
      <Row className="bgsection justify-content-center align-items-center ">
        <Col md={10} className="link">
          <h3 className="Companytext3 text-light fs-4 "><span className="text-light fs-1">S</span>ervices</h3>
          <div className='d-md-flex mainServicesDiv' >
            <div className="link">
              <ul>
                <li className=" fs-5 fw-bold"> Innovative Web Design</li>
                <li>Search enginee Optimization</li>
                <li>Local Seo</li>
                <li>Technical Seo</li>
                <li>Digital Marketing Strategy</li>
              </ul>
            </div>
            <div className="link">
              <ul>
                <li className=" fs-5 fw-bold">Web Design</li>
                <li>Custom website design </li>
                <li>wordpress website design</li>
                <li>e commerce web design </li>
                <li>Ada Compliane services</li>
              </ul>
            </div>
            <div className="link">
              <ul>
                <li className="fs-5 fw-bold">Social Media Marketing</li>
                <li>Search enginee management</li>
                <li> social media advertising </li>
                <li>social media BM</li>
                <li>online reputation repair</li>
              </ul>
            </div>
            <div className="link">
              <ul>
                <li className="fs-5 fw-bold">Ecommerce Services</li>
                <li>e commerce Optimization</li>
                <li>ecommerce Seo</li>
                <li>ecommerce ppc</li>
                <li>shopify web design</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      {/* Adress section */}
      <Row className="bgsection justify-content-center align-items-center">
        <Col md={10} className="link">
          <h3 className="Companytext2 text-light fs-4"><span className="text-light fs-1">G</span> ET IN TOUCH</h3>
          <div className='d-md-flex AdresssectionText'>
            <div className='link'>
              <ul>
                <li>
                  <h4 className="text-light"><span className="text-light fs-1" style={{ opacity: '0.3' }}>G</span>urugram
                  </h4>
                </li>
                <li>Unit 337 B, Tower A, Spaze I-Tech Park, Sector 49, Sohna Road, Gurugram 1220018 Haryana
                </li>
                <li>Phone :+91-01244084508 </li>
                <li> Email : contact-us@razobyte.com</li>
                <li>Monday - Saturday (24 Hours)</li>
              </ul>
            </div>
            <div className="link">
              <ul>
                <li> <h4><span className="text-light fs-1" style={{ opacity: '0.3' }}>A</span>hmedabad
                </h4></li>
                <li> C Siddhi Vinayak Tower, Sarkhej  Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051</li>
                <li>Phone :+91-01244084508 </li>
                <li> Email : contact-us@razobyte.com</li>
                <li>Monday - Saturday (24 Hours)</li>
              </ul>
            </div>
          </div>

        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center px-5">
        <Col  md={10}>
          <div className=" d-flex justify-content-center gap-lg-3 icon my-3" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.493)', borderTop: '1px solid rgba(255, 255, 255, 0.493)' }}>
            <img src="Image/instagram (1) 1.png" alt="" className="img-fluid" />
            <img src="Image/FB logo final.png" alt=" " className="img-fluid" />
            <img src="Image/LinkedIn Logo final.png" alt="" className="img-fluid" />
            <img src="Image/Twitter_new_X_logo Final.png" alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <Row className="bgsection justify-content-center align-items-center">
        <Col md={10} className="d-md-flex  justify-content-center align-items-center text-light gap-3 last">
          <p>© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
          <p>Privacy Policy</p>
          <p className="icon-link"><a href="mailto:razobyte.com" className="text-light"> < CiMail /></a>contact-us@razobyte.com</p>
          <p className="icon-link"><a href className="text-light"><FaPhoneAlt /></a>+91-8448158188</p>
        </Col>
      </Row>


    </>

  )
}