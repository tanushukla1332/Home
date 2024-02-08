import { Row, Col } from 'react-bootstrap';
import '../SectionContact/Section.css'

export default function Section() {
    return (
        <>
            <Row className='d-md-flex justify-content-center align-items-center py-5'
                style={{ backgroundImage: "url('Image/blue.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right 20px", backgroundSize: "40%" }}>
                <Col md={10}>
                    <div className='main-content-div1 d-md-flex justify-content-center align-items-center gap-5'>
                        <div className='map-image-div'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.17879838281!2d77.03960357450099!3d28.413861293978993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23cd1acc602b%3A0x204ebd76ab048452!2sRazobyte%20Softech!5e0!3m2!1sen!2sin!4v1706015585799!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                        style={{ border: "0px", boxShadow: "2px 2px 2px  2px rgba(0,0,0,0.2)" }}
                        ></iframe>
                            
                        </div>
                        <div className='adress-text' >
                            <h4>India</h4>
                            <h5>Gurugram</h5>
                            <p>Unit 337 B, Tower A, Spaze I-Tech Park, Sector 49, Sohna  Road,
                                Gurugram 1220018 Haryana 
                                Phone :+91-01244084508  <br/>
                                Email : Contact-Us@Razobyte.Com
                            </p>
                        </div>
                    </div>
                    </Col>
                
            </Row>
            <Row className='d-md-flex justify-content-center align-items-center py-5'
          >
            <Col md={10}>
                <div className='main-content-div1 d-md-flex justify-content-center align-items-center gap-5'>
                    <div className='map-image-div'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.17879838281!2d77.03960357450099!3d28.413861293978993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23cd1acc602b%3A0x204ebd76ab048452!2sRazobyte%20Softech!5e0!3m2!1sen!2sin!4v1706015585799!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                    style={{ border: "0px", boxShadow: "2px 2px 2px  2px rgba(0,0,0,0.2)" }}
                    ></iframe>
                    </div>
                    <div className='adress-text'>
                    <h4>India</h4>
                    <h5>Ahemdabad</h5>
                    <p>C Siddhi Vinayak Tower, Sarkhej Gandhinagar  Hwy, Near DCP Office, Ahmedabad, Gujarat 380051 
                    Phone :+91-01244084508  <br/>
                    Email : Contact-Us@Razobyte.Com</p>
                    </div>
                </div>
                </Col>
            
        </Row>




        </>
    )
}