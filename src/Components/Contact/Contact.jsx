import {Row,Col,Form,FormGroup,FormControl,FormLabel,FormCheck,Button} from 'react-bootstrap'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin,  FaFacebook, FaInstagram } from "react-icons/fa";
import CountUp from 'react-countup';


export default function Contact({clients}) {

    
    
    return (
    
        <Row style={{ background: "#3B7FBF" }} className='py-5 px-0' >
        <h2 className=' hed2 text-resize-lg  text-center formlayout text-light mb-5'>Let's Talk To Our Experts</h2>
        <Col md={5} className='mb-3  py-3'>

            <div className='justify-content-center align-items-center'>

                <Form className='Form p-4'
                >
                    <FormGroup >
                        <FormLabel>Name</FormLabel>
                        <FormControl type='text' placeholder='Enter your name' required />
                    </FormGroup>
                    <FormGroup >
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl type='email' placeholder='Enter your email' required />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Phone</FormLabel>
                        <FormControl type='number' placeholder='Enter your number' required />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Project</FormLabel>
                        <FormControl as='select' placeholder='Project type' required >
                            <option value=''>Project type</option>
                            <option value=''>SEO</option>
                            <option value=''>SMO</option>
                            <option value=''>SEM PPC</option>
                            <option value=''>Mobile app developement</option>
                            <option value=''>E Commerece Website</option>
                            <option value=''>Other</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='formBasicCheckbox'>
                        <FormCheck type="checkbox" label="Remember Me ">
                        </FormCheck>
                    </FormGroup>
                    <div className='w-100  d-flex justify-content-center align-items-center'>
                        <Button type="submit" variant='outline-dark' className='my-4 px-5 btnsubmit'
                            style={{ width: "80%" }}>Submit</Button>
                    </div>

                    <div className='text-center'>
                        <p className='sm mx-5'>if you don't have an account <span className=' text-decoration-underline ' style={{color:"#3B7FBF", cursor:"pointer"}}>Go with </span> </p>
                        <hr />
                        <p className='sm text-center'>or</p>
                        <div className='d-flex justify-content-center align-items-center gap-2 '>
                            <a href="https://maps.app.goo.gl/vTXfDoKJ9iTTwVvz9" target="_blank" >
                            <FcGoogle size={32} /></a>
                            <a href='https://www.linkedin.com/company/razobyte/?originalSubdomain=in' target="_blank" ><FaLinkedin size={32} color='#3B7FBF' /></a>
                            <a href='https://www.instagram.com/razobyte/' target="_blank" ><img src="Image/instagram (1) 1.png" alt="" className='instra' /></a>
                            <a href='https://www.facebook.com/razobyte/' target="_blank">
                            < FaFacebook size={32} color='#3B7FBF'  /></a>
                        </div>
                    </div>
                </Form>
            </div>
        </Col>
        <Col md={6} >
           <div>
           <img src="/Image/Svg.png" alt="" className='img-fluid' />
           </div>
           <div className='clients-card'>
           <div className='clients-card2'>
           <div>
           <img src="Image/undraw_Male_avatar_g98d-removebg-preview.png" alt="" className='img-fluid'  />
           </div>
           <div>
           <h5>
           {clients &&
            <CountUp start={0} end={750} duration={3} delay={0}/>
        }
        +
        </h5>
           
           <p>Happy Clients</p>
           </div>
           </div>
           <div className='clients-card2'>
           <div>
           <img src="Image/undraw_Male_avatar_g98d-removebg-preview.png" alt="" className='img-fluid'  />
           </div>
           <div>
           <h5>{
            clients &&
            <CountUp start={0} end={1450} duration={3} delay={0}/>
           }
           +
           </h5>
           <p>Software's Sold</p>
           </div>
           </div>
           <div className='clients-card2'>
           <div>
           <img src="Image/undraw_Male_avatar_g98d-removebg-preview.png" alt="" className='img-fluid'  />
           </div>
           <div>
           <h5>
           {clients && 
            <CountUp start={0} end={2250} duration={3} delay={0}/>}
            %</h5>
           <p>Support Kid's</p>
           </div>
           </div>
           </div>
            </Col>
    </Row>

    
     
      
    );
}
